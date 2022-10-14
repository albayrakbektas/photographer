const admin = require("firebase-admin");
const { getStorage } = require("firebase-admin/storage");
const sharp = require("sharp");
const serviceAccount = require("./service-account-key.json");
const uuid = require("uuid-v4");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://alperen-ee6f5.appspot.com/",
});

const bucket = getStorage().bucket();
const uploadFile = async (file, album, description) => {
  const rootFolders = ["images", "thumbnails"];
  const id = uuid();
  for (let i = 0; i < rootFolders.length; i++) {
    const blob = bucket.file(
      rootFolders[i] + "/" + album + "/" + id + "-" + file.originalname
    );
    const blobStream = blob.createWriteStream({
      metadata: {
        metadata: {
          album,
          description,
        },
      },
    });
    blobStream.on("finish", () => {
      console.log("finished");
    });
    const buffer = await sharp(file.buffer)
      .resize({
        width: rootFolders[i] === "images" ? 1000 : 408,
        fit: "contain",
      })
      .toBuffer();
    blobStream.end(buffer);
  }
};

async function listBuckets() {
  let s = await bucket.getFiles();
  let buckets = [];
  await s[0].forEach((e) => {
    if (!buckets.includes(e.metadata.metadata.album)) {
      buckets.push(e.metadata.metadata.album);
    }
  });
  console.log(buckets);
  return buckets;
}
listBuckets().catch(console.error);

// async function getFiles() {
//   await listBuckets();
//   bucket.getFiles().then((res) => {
//     // console.log(res[0][0]);
//   });
// }

// uploadImages().then((res) => console.log(res));

// function postData() {
//   //heroes.json dosyası okunuyor
//   const jsonFile = fs.readFileSync("./heroes.json");
//   const heroes = JSON.parse(jsonFile);
//
//   //dota/heroes içerisine json file'ı bind ediyor.
//   return db
//     .collection("dota")
//     .doc("heroes")
//     .set(heroes)
//     .then(() => {
//       console.log("Fresh Meat!!");
//     });
// }
//
// function getData() {
//   try {
//     const docRef = db.doc("dota/heroes");
//     docRef.get().then((data) => {
//       if (data && data.exists) {
//         const responseData = data.data();
//         console.log(JSON.stringify(responseData, null, "  "));
//         return JSON.stringify(responseData, null, "  ");
//       }
//     });
//   } catch (e) {
//     console.log(e);
//   }
// }

module.exports = { uploadFile, listBuckets };
