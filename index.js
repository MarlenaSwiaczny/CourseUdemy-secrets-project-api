import express from "express";
import axios from "axios";

const app = express();
const port = 3000;


app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        console.log(result.data);
        let secret =  JSON.stringify(result.data.secret);
        let username = JSON.stringify(result.data.username)
        res.render("index.ejs", {"secret": secret, "user": username});
    } catch (error) {
        console.log("Uwaga błąd");
        console.log(error.response.data);
    }
    });

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})