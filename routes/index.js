const express = require("express");
const router = express.Router();
var path = require("path");

router.get("/", (req, res) =>
  res.status(200).sendFile(path.join(__dirname + "/../home.html"))
);

router.get("/event-list.html", (req, res) =>
  res.status(200).sendFile(path.join(__dirname + "/../event-list.html"))
);

router.get("/event1.html", (req, res) =>
  res.status(200).sendFile(path.join(__dirname + "/../event1.html"))
);

router.get("/event2.html", (req, res) =>
  res.status(200).sendFile(path.join(__dirname + "/../event2.html"))
);

router.get("/event3.html", (req, res) =>
  res.status(200).sendFile(path.join(__dirname + "/../event3.html"))
);

router.get("/event4.html", (req, res) =>
  res.status(200).sendFile(path.join(__dirname + "/../event4.html"))
);

router.get("/event5.html", (req, res) =>
  res.status(200).sendFile(path.join(__dirname + "/../event5.html"))
);

router.get("/dashboard", (req, res) => {
  if (req.session.user) res.status(200).send(req.session.user);
  else res.status(401).send("login for this");
});

module.exports = router;
