const express = require("express");
const app = express();
const router = express.Router();
const bcrypt = require("bcrypt");
const mySqlConnection = require("../db/db");
let user;
var path = require("path");

app.use(express.static(path.join(__dirname + "../public/css")));
app.use(express.static(path.join(__dirname, "./public/assests")));

router.get("/register", (req, res) => {
  if (!req.session.user) {
    res.status(200).sendFile(path.join(__dirname + "/../register.html"));
  } else res.redirect("/users/dashboard");
});

router.get("/login", (req, res) => {
  if (!req.session.user)
    res.status(200).sendFile(path.join(__dirname + "/../login.html"));
  else res.redirect("/users/dashboard");
});

router.get("/dashboard", (req, res) => {
  if (req.session.user) {
    req.session.user = user;
    if (user.event1 === 0) {
      event1 = "#CC3333";
    } else {
      event1 = "#33cc33";
    }
    if (user.event2 === 0) {
      event2 = "#CC3333";
    } else {
      event2 = "#33cc33";
    }
    if (user.event3 === 0) {
      event3 = "#CC3333";
    } else {
      event3 = "#33cc33";
    }
    if (user.event4 === 0) {
      event4 = "#CC3333";
    } else {
      event4 = "#33cc33";
    }
    if (user.event5 === 0) {
      event5 = "#CC3333";
    } else {
      event5 = "#33cc33";
    }
    if (user.accommodation === 0) {
      accommodation = "#CC3333";
    } else {
      accommodation = "#33cc33";
    }
    res.render("dashboard", {
      name: user.name,
      college: user.college,
      event1: event1,
      event2: event2,
      event3: event3,
      event4: event4,
      event5: event5,
      accommodation: accommodation
    });
  } else res.redirect("/users/login");
});

router.post("/dashboard", (req, res) => {
  let { but } = req.body;
  let event1 = user.event1,
    event2 = user.event2,
    event3 = user.event3,
    event4 = user.event4,
    event5 = user.event5,
    accommodation = user.accommodation;
  switch (but) {
    case "1":
      if (event1 == 0) event1 = 1;
      else event1 = 0;
      break;
    case "2":
      if (event2 == 0) event2 = 1;
      else event2 = 0;
      break;
    case "3":
      if (event3 == 0) event3 = 1;
      else event3 = 0;
      break;
    case "4":
      if (event4 == 0) event4 = 1;
      else event4 = 0;
      break;
    case "5":
      if (event5 == 0) event5 = 1;
      else event5 = 0;
      break;
    case "6":
      if (accommodation == 0) accommodation = 1;
      else accommodation = 0;
      break;
  }
  email = user.email;
  mySqlConnection.query(
    "UPDATE users SET event1=?, event2=?, event3=?, event4=?, event5=?, accommodation=? WHERE email = ?",
    [event1, event2, event3, event4, event5, accommodation, user.email],
    err => {
      if (err) res.status(500).send(err);
      mySqlConnection.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (err, rows) => {
          if (err) res.status(500).send(err);
          user = rows[0];
          if (user) {
            req.session.user = user;
            res.redirect("/users/dashboard");
          }
        }
      );
    }
  );
});
// Registration Page
router.post("/register", (req, res) => {
  let { email, name, password, password2, college, phone } = req.body;
  let event1 = 0,
    event2 = 0,
    event3 = 0,
    event4 = 0,
    event5 = 0,
    accommodation = 0;

  let errors = [];

  if (password.length < 6) {
    errors.push({ msg: "Password must be at least 6 characters" });
  }

  if (!name || !email || !password || !password2 || !college || !phone) {
    errors.push({ msg: "Please enter all fields" });
  }

  if (password != password2) {
    errors.push({ msg: "Passwords do not match" });
  }

  password = bcrypt.hashSync(password, 10);
  password2 = bcrypt.hashSync(password2, 10);

  mySqlConnection.query(
    "SELECT * FROM users WHERE email = ?",

    [email],

    (err, rows) => {
      if (err) res.status(500).send(err);
      else if (rows.length) errors.push({ msg: "Email already exists" });
      else if (errors.length > 0) {
        res.statusCode = 400;

        res.send(errors);
      } else {
        var sql = `INSERT INTO users (email, name, pwdhash, college, event1, event2, event3, event4, event5, accommodation, phone) VALUES ?`;

        const values = [
          [
            email,
            name,
            password,
            college,
            event1,
            event2,
            event3,
            event4,
            event5,
            accommodation,
            phone
          ]
        ];

        mySqlConnection.query(sql, [values], function(err) {
          if (err) res.status(500).send(err);
          else res.redirect("/users/login");
        });
      }
    }
  );
});

//Login Page
router.post("/login", (req, res) => {
  let { email, password } = req.body;
  mySqlConnection.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, rows) => {
      if (err) res.status(500).send(err);
      user = rows[0];
      if (user) {
        const result = bcrypt.compareSync(password, user.pwdhash);
        password = bcrypt.hashSync(password, 10);
        if (result) {
          req.session.user = user;
          res.redirect("/users/dashboard");
        } else {
          res.status(400).send("pwd incorrect");
        }
      } else {
        res.status(400).send("email does not exist");
      }
    }
  );
});

router.get("/logout", (req, res) => {
  if (req.session.user) {
    req.session.destroy(() => {
      res.redirect("/");
    });
  }
});

module.exports = router;
