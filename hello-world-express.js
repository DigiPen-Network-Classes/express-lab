import express from 'express';
const app = express();
const port = 3100;

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    console.log(`Received request from agent ${req.headers["user-agent"]}`);
    res.send("Hello, world!\n");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
