const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('here is our short history')
    }
    res.end(`<h1>oops!</h1>
    <p>we cant find the page you are looking for</p>
    <a href='/' > ack home < /a>`)
});
server.listen(5000)
    //this will notwork until youactually go to a browserand put 5000...that is server.listen

//you need torun this fileevery time you refresh the page to go thenew link