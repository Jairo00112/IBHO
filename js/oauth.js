import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Servir archivos estáticos desde el directorio raíz
app.use(express.static(__dirname));

// Rutas de OAuth
app.get('/api/oauth/auth', (req, res) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUri = process.env.REDIRECT_URI || `https://${req.headers.host}/api/oauth/callback`;
  const scope = 'repo'; // Permisos para acceder al repositorio

  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  res.redirect(authUrl);
});

app.get('/api/oauth/callback', async (req, res) => {
  const code = req.query.code;
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  const redirectUri = process.env.REDIRECT_URI || `https://${req.headers.host}/api/oauth/callback`;

  if (!code) {
    return res.status(400).send('Código de autorización faltante');
  }

  try {
    // Intercambiar código por token de acceso
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        redirect_uri: redirectUri,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return res.status(400).send(`Error en OAuth: ${tokenData.error_description}`);
    }

    const accessToken = tokenData.access_token;

    // Página HTML que envía el token a Decap CMS via postMessage
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Autenticación Exitosa</title>
      </head>
      <body>
        <script>
          // Enviar el token de acceso a la ventana padre (Decap CMS)
          window.opener.postMessage({
            type: 'authorization:github:success',
            data: { token: '${accessToken}' }
          }, '*');
          window.close();
        </script>
      </body>
      </html>
    `;

    res.send(html);
  } catch (error) {
    console.error('Error en callback OAuth:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Ruta catch-all para servir index.html en rutas no encontradas (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});