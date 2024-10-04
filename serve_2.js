const http = require('http');

const gerarNumeroAleatorio = require('./aleatorio_N');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Bem-vindo!');
    } else if (req.url === '/sobre') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Sobre: funciona eu acho');
    } else if (req.url === '/contato') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Contato: faz um pix');
    } else if (req.url === '/numero') {
        const numeroAleatorio = gerarNumeroAleatorio();
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`numero aleatorio talvez seja esse: ${numeroAleatorio}`);
    } else if (req.url.startsWith('/saudacao/')) {
        const nome = req.url.split('/')[2];
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(` ola, ${nome.charAt(0).toUpperCase() + nome.slice(1)}!`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página não encontrada');
    }
});

const port = 8080;
server.listen(port, () => {
    console.log(`Ta funcionando essa bagaça na Posta:${port}`);
});
