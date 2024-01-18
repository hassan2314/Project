const express = require("express");
require("./db/config");
const user = require("./db/user");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  let User = new user(req.body);
  let result = await User.save();
  res.send(result);
});
app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let User = await user.findOne(req.body).select("-password");

    if (User) {
      res.send(User);
    } else {
      res.send({ result: "User not Found" });
    }
  } else {
    res.send({ result: "Email or Password not Found" });
  }
});
app.listen(4500);
