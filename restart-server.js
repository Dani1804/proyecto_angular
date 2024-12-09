const { exec } = require('child_process');

// Comando ajustado para PowerShell
exec('npx kill-port 3000; npx json-server --watch db.json --port 3000', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al reiniciar el servidor: ${error.message}`);
    return;
  }
  if (stderr) {
    console.warn(`Advertencia: ${stderr}`);
  }
  console.log(`Servidor reiniciado: ${stdout}`);
});
