// Http Module
const http = require('http');
// req - incoming request 
// res - what is sent back

const server = http.createServer((req, res) => {
    console.log(req.url);

  

    if (req.url === '/') {
        console.log('home');
        res.end('Welcome to our Home Page');
    }

    else if (req.url === '/about') {
        console.log('about');
        res.end('Here is our short history');
    }
    else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page that you are looking for</p>
            <a href="/">back home</a>
        `);
    }


})

server.listen(5000);