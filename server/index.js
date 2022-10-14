const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const { uploadFile, listBuckets } = require("./firebase");
let isAdmin = false;
const admin = { name: "allperensahin", password: "123456" };

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const upload = multer();

// const getImage = (req, res, next) => {
//   if (req.params.imageID) {
//     return next(null, "image Url");
//   }
//   return next(null, ["imageURl", "imageUrl", "...."]);
// };

app.get("/image/:imageID?", cors(), async (req, res) => {
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

app.get("/admin", (req, res) => {
  if (!isAdmin) {
    res.send("/login");
  } else {
    res.send("ok");
  }
});
app.post("/login", (req, res) => {
  const { name, password } = req.body;
  console.log(name, password);
  if (name === admin.name && password === admin.password) {
    isAdmin = true;
    res.status(200).send("ok");
  } else {
    isAdmin = false;
    res.status(500).send("Invalid Admin");
  }
});

app.post("/upload/image", upload.single("file"), async (req, res) => {
  await uploadFile(req.file, req.body.album, req.body.description)
    .then(() => {
      res.status(200).send("File successfully saved.");
    })
    .catch(() => {
      res.status(401).send("File doesn't saved!");
    });
  // await uploadFile(file.file, file.album, file.description);
  // if (
  //   req.body.user !== "Alperen" ||
  //   req.body.secret !== "adskljaksljdlkajskldjad"
  // ) {
  //   return res.status(401).send({ message: "Invalid vredential" });
  // }

  // req.body.images;
  // [ "data:base64;image/jpeg,adsakjskldjaklsjdklajskldjakljsdl" ]
  // upload to storage
  // res.send("Ok")
  // else res.status(400).send({message: "hata mesaji"})
});

app.listen(port, "192.168.1.171", () => {
  console.log(port);
});
