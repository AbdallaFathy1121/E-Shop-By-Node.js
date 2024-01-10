const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("app run");
})



app.get('/', (req, res) => {
    res.send("Hello API");
})