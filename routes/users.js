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
    res.status(200).send("register form will be here");
  } else res.status(401).send("Not possible as you are logged in already");
});

router.get("/login", (req, res) => {
  if (!req.session.user)
    res.status(200).sendFile(path.join(__dirname + "/../login.html"));
  else res.status(401).send("nope, logout");
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

  if (password.length < 6) {
    errors.push({ msg: "Password must be at least 6 characters" });
  }

  let errors = [];

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
          else
            res.status(200).sendFile(path.join(__dirname + "/../login.html"));
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
          // res.render("participant_portal", {
          //   name: "abc",
          //   roll: "2019BCS-XXX",
          //   sem: "I"
          // });
          res.status(200).sendFile(path.join(__dirname + "/../home.html"));
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
      res.status(200).send("logout success");
    });
  } else {
    res.status(400).send("you are not logged in");
  }
});

router.post("/contacts", (req, res) => {
  if (req.session.user) {
    const { name, phone, relationship, email } = req.body;
    let errors = [];
    if (!name || !phone)
      errors.push({ msg: "name or phone number cannot be empty" });
    else {
      var sql = `INSERT INTO contacts (name, email, phone, relationship, userID) VALUES ?`;
      const values = [[name, email, phone, relationship, req.session.user.id]];

      mySqlConnection.query(sql, [values], err => {
        if (err) res.status(500).send(err);
        res.status(200).send("contact saved");
      });
    }
  } else res.status(401).send("login to post");
});

router.get("/contacts", (req, res) => {
  if (req.session.user) {
    mySqlConnection.query(
      "SELECT * FROM contacts WHERE userID = ?",
      [req.session.user.id],
      (err, rows) => {
        if (err) res.status(500).send(err);
        req.session.contacts = rows;
        res.status(200).send(rows);
      }
    );
  } else res.status(401).send("login to view");
});

router.post("/contacts/:contactID", (req, res) => {
  if (req.session.user) {
    const { name, phone, relationship, email } = req.body;
    mySqlConnection.query(
      "SELECT * FROM contacts WHERE contactID = ? AND userID = ?",
      [req.params.contactID, req.session.user.userID],
      (err, rows) => {
        if (err) res.status(500).send(err);
        if (!rows.length) res.status(401).send("you don't have this contact");
        else {
          mySqlConnection.query(
            "UPDATE contacts SET name=?, phone=?, relationship=?, email=? WHERE contactID = ?",
            [name, phone, relationship, email, req.params.contactID],
            err => {
              if (err) res.status(500).send(err);
              res.status(200).send("updated");
            }
          );
        }
      }
    );
  } else res.status(401).send("login to update");
});

module.exports = router;
