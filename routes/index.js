const express = require("express");
const router = express.Router();
var path = require("path");

router.get("/", (req, res) =>
  res.status(200).sendFile(path.join(__dirname + "/../home.html"))
);

router.get("/event-list", (req, res) =>
  res.status(200).sendFile(path.join(__dirname + "/../event-list.html"))
);

router.get("/event1", (req, res) =>
  res.status(200).sendFile(path.join(__dirname + "/../event1.html"))
);

router.get("/event2", (req, res) =>
  res.status(200).sendFile(path.join(__dirname + "/../event2.html"))
);

router.get("/event3", (req, res) =>
  res.status(200).sendFile(path.join(__dirname + "/../event3.html"))
);

router.get("/event4", (req, res) =>
  res.status(200).sendFile(path.join(__dirname + "/../event4.html"))
);

router.get("/event5", (req, res) =>
  res.status(200).sendFile(path.join(__dirname + "/../event5.html"))
);

router.get("/schedule", (req, res) =>
  res.status(200).sendFile(path.join(__dirname + "/../schedule.html"))
);

router.get("/accommodation", (req, res) =>
  res.status(200).sendFile(path.join(__dirname + "/../accommodation.html"))
);

router.get("/contact", (req, res) =>
  res.status(200).sendFile(path.join(__dirname + "/../contact.html"))
);

router.get("/faq", (req, res) =>
  res.status(200).sendFile(path.join(__dirname + "/../faq.html"))
);

router.get("/sponsors", (req, res) =>
  res.status(200).sendFile(path.join(__dirname + "/../sponsors.html"))
);
module.exports = router;
