const express = require('express')
const cors = require('cors')
const app = express(),
    // bodyParser = require("body-parser");
    port = 3000;
app.use(cors({
    origin: "http://localhost:8080",
    credentials: true,
    methods: "GET,POST,DELETE,PUT,OPTIONS",
    allowedHeaders:
        "Origin, X-Requested-With, Content-Type, Accept, authorization, x-xsrf-token"
}));
let count="1";

app.get('/count', (req, res) => {
    res.json({"changed" :count});
})

const background=function() {
    console.log('backgroung executed');
    setTimeout(background, 5000);
    count++;
}

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
    background();
});