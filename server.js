// server.js
const express = require('express');
const child_process = require('child_process');
const app = express();

// Ruta para reiniciar el servidor
app.get('/restart', (req, res) => {
  child_process.exec('node restart-server.js', (err, stdout, stderr) => {
    if (err) {
      console.error('Error executing restart:', err);
      return res.status(500).send('Error al reiniciar el servidor');
    }
    console.log(stdout);
    res.send('Servidor reiniciado');
  });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
