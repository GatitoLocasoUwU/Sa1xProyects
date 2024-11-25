const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.static('public'));

app.get('/proxy', async (req, res) => {
    const url = req.query.url;

    if (!url) {
        return res.status(400).send('URL no proporcionada');
    }

    try {
        const response = await axios.get(url);
        res.send(response.data);  // Enviar la respuesta de la página solicitada
    } catch (error) {
        res.status(500).send('Error al cargar la URL');
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
