export default {
  async fetch(request) {
    return new Response(`
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <title>Em manutenção</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            background-color: #000;
            color: white;
            font-family: sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;
          }
          img {
            max-width: 300px;
            width: 80%;
            margin-bottom: 40px;
          }
          h1 {
            font-size: 2.5em;
          }
        </style>
      </head>
      <body>
        <img src="https://vempradig.com/logo.png" alt="Logo em manutenção" />
        <h1>Estamos em manutenção.</h1>
      </body>
      </html>
    `, {
      status: 503,
      headers: {
        'Content-Type': 'text/html'
      }
    });
  }
}