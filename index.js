const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const pool = require("./db");

app.use(cors());
app.use(express.json());


app.post("/post", async (req, res) => {
    try {
        const { mark, model, color, price, year_of_issue, id_supplier} = req.body;
        const newCar = await pool.query(
            "INSERT INTO car (mark, model, color, price, year_of_issue, id_supplier) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [mark, model, color, price, year_of_issue, id_supplier]);
        res.json(newCar.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

app.listen(PORT, () => console.log("Server has been started..."));