const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const session = require("express-session");
var path = require("path");

app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));

app.use(
  session({
    secret: "seCReT",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 }
  })
);

app.use("/", require("./routes/index.js"));

app.use("/users", require("./routes/users.js"));

app.get("*", (req, res) => {
  res.redirect("/users/dashboard");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
