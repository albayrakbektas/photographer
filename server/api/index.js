const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const { uploadFile, listBuckets } = require("../firebase");
let isAdmin = false;
const admin = { name: "allperensahin", password: "123456" };
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

const upload = multer();

// const getImage = (req, res, next) => {
//   if (req.params.imageID) {
//     return next(null, "image Url");
//   }
//   return next(null, ["imageURl", "imageUrl", "...."]);
// };

app.get("/api/image/:imageID?", cors(), async (req, res) => {
  const albums = await listBuckets();
  // await getFiles();
  res.status(200).send(albums);
  // getImage(req, res, (err, response) => {
  //   if (err) {
  //     return res.status(400).send({ message: err.message });
  //   }
  //   return res.send(response);
  // });
});

app.get("/api/admin", (req, res) => {
  if (!isAdmin) {
    res.send("/login");
  } else {
    res.send("ok");
  }
});
app.post("/api/login", (req, res) => {
  const { name, password } = req.body;
  if (name === admin.name && password === admin.password) {
    isAdmin = true;
    res.status(200).send("ok");
  } else {
    isAdmin = false;
    res.status(500).send("Invalid Admin");
  }
});

app.post("/api/upload/image", upload.single("file"), async (req, res) => {
  await uploadFile(req.file, req.body.album, req.body.description)
    .then(() => {
      res.status(200).send("File successfully saved.");
    })
    .catch(() => {
      res.status(401).send("File doesn't saved!");
    });
});
module.exports = app;
