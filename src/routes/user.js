const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/users.controller");
const imageUploader = require("../helpers/imageUploader");

router.get(
  "/users",
  usercontroller.listUser,
  (req, res) => {
    res.send(req.data);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);
router.post(
  "/users",
  imageUploader.upload.single("image_src"),
  usercontroller.createUser,
  async (req, res, next) => {
    res.send(req.data);
  },
  (error, req, res, next) => {
    res
      .status(400)
      .send({ message: error.message, status: "failed", statusCode: "400" });
  }
);

router.put(
  "/edit/users/:user_uuid",
  imageUploader.upload.single("image_src"),
  usercontroller.updateUser,
  (req, res) => {
    res.send(req.data);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

router.post(
  "/login",
  imageUploader.upload.single("image_src"),
  usercontroller.Login,
  (req, res) => {
    res.send(req.data);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);
module.exports = router;
