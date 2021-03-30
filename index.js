const { Car } = require('./src/models/car');
const { Marks } = require('./src/models/marks')
const { User } = require("./src/models/user")
const express = require("express");
const passport = require("passport");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const pool = require("./db");

const { Mark } = require('./src/models/mark');

app.use(cors());
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());



app.post("/post", async (req, res) => {
    try {
        const {mark, model, color, price, year_of_issue, id_supplier} = req.body;
        const newCar = await pool.query(
            "INSERT INTO car (mark, model, color, price, year_of_issue, id_supplier) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [mark, model, color, price, year_of_issue, id_supplier]``);
        res.json(newCar.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
})

app.get("/getCars", async (req, res) => {
    try {
        const cars = await Car.findAll({
            include: Mark
        });
        res.json(cars.map(c => c.dataValues));
    } catch (err) {
        console.log(err.message);
    }
})

app.get("/marks", async (req, res) => {
    try {
        const marks = await Marks.findAll({});
        res.json(marks.map(m => m.dataValues));
    } catch (err) {
        console.log(err.message);
    }
})

app.get("/users", async (req, res) => {
    try {
        const users = await User.findAll({});
        res.json(users.map(u => u.dataValues));
    } catch (err) {
        console.log(err.message);
    }
})

app.listen(PORT, () => console.log("Server has been started..."));