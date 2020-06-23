// ---------- Dependencies ----------
const express = require("express");

// ---------- Port ----------
const PORT = process.env.PORT || 3000;

// ---------- App Set-Up ----------
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ---------- Express-Handlebars Setup ----------
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ---------- Import Routes ----------
const routes = require("./controllers/burgers_controller.js");
app.use(routes);


// ---------- Start Server ----------
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
