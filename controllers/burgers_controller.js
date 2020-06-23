// ---------- Dependencies ----------
const express = require("express");
const burger = require("../models/burger.js");

// ---------- Create Router ----------
const router = express.Router();

// ---------- Create Router Paths ----------
router.get("/", (req, res) => {
    burger.selectAll(function (data) {
        res.render("index", { burgers: data });
    });
});

router.get("/api/burgers", (req, res) => {
    burger.selectAll(function (data) {
        res.json(data);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne("burger_name", req.body.burger, function (data) {
        res.json(data);
    });
});

router.put("/api/burgers", (req, res) => {
    burger.updateOne("devoured", req.body.devoured, req.body.id, function (data) {
        res.json(data);
    });
});

router.delete("/api/burgers", (req, res) => {
    burger.deleteOne(req.body.id, function (data) {
        res.json(data);
    });
});

// ---------- Default Route ----------
router.get("*", (req, res) => {
    burger.selectAll(function (data) {
        res.render("index", { burgers: data });
    });
});

// ---------- Export Router ----------
module.exports = router;