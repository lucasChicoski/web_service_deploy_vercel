import express from "express";
import ServerlessHttp from "serverless-http";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3001, () => {
    console.log("Server running on port 3000");
})