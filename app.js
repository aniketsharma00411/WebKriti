const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const session = require("express-session");

app.use(
  session({
    secret: "seCReT",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 }
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/index.js"));

app.use("/users", require("./routes/users.js"));

app.get("*", (req, res) => {
  res.status(404).send("You did something wrong!");
});

const PORT = 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
