const express = require("express");
const app = express();
const port = 8080;
app.use(express.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`standard GET response. Welcome ${user}! Congratulations! Your Application Form Successfully Submitted`);
});

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    res.send(`standard POST response. Welcome ${user}! Congratulations! Your Application Form Successfully Submitted`);
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});