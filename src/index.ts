import express from "express";
import ServerlessHttp from "serverless-http";
const app = express();

app.get("/teste", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
})