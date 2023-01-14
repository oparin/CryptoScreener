const express = require('express')
const app = express(),
    // bodyParser = require("body-parser");
    port = 3000;
let count="1";

app.get('/', (req, res) => {
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