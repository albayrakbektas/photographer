import store from "@/store/index.js";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  getDownloadURL,
  getMetadata,
  list,
} from "firebase/storage";

const firebaseConfig = {
  storageBucket: "gs://alperen-ee6f5.appspot.com/",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const getImage = async (album) => {
  const root = ["thumbnails"];
  let src = "";
  let imgRef = ref(storage, root + "/" + album);
  const firstPage = await list(imgRef);
  const coverImage = firstPage.items[0];
  getDownloadURL(coverImage)
    .then((url) => {
      src = url;
    })
    .catch((error) => {
      console.log(error);
    });
  const metadata = await getMetadata(coverImage);
  return {
    sizeType: metadata.fullPath.split("/")[0],
    fullPath: metadata.fullPath,
    description: metadata.customMetadata.description,
    album: metadata.fullPath.split("/")[1],
    name: metadata.name,
    timeCreated: metadata.timeCreated,
    updated: metadata.updated,
    src: src,
  };
};
export const getAlbumsCount = async (album) => {
  let imgRef = ref(storage, "thumbnails/" + album);
  const firstPage = await list(imgRef);
  return firstPage.items.length;
};
export const getAllImages = async (albums = store.state.albums) => {
  store.state.isLoading = true;
  store.state.isImageLoaded = false;
  let myList = [];
  let count = 0;
  let index = 0;
  const roots = ["thumbnails"];
  for (let r = 0; r < roots.length; r++) {
    for (let i = 0; i < albums.length; i++) {
      let imgRef = ref(storage, roots[r] + "/" + albums[i]);
      const firstPage = await list(imgRef);
      for (let i = 0; i < firstPage.items.length; i++) {
        index++;
      }
      firstPage.items.forEach((e) => {
        let src = "";
        getDownloadURL(e)
          .then((url) => {
            src = url;
          })
          .catch((error) => {
            console.log(error);
          });
        getMetadata(e)
          .then((metadata) => {
            store.state.watchTrigger = !store.state.watchTrigger;

            myList.push({
              sizeType: metadata.fullPath.split("/")[0],
              fullPath: metadata.fullPath,
              description: metadata.customMetadata.description,
              album: metadata.fullPath.split("/")[1],
              name: metadata.name,
              timeCreated: metadata.timeCreated,
              updated: metadata.updated,
              src: src,
            });
          })
          .then(() => {
            count++;
            if (count === index) {
              store.state.isLoading = false;
              store.state.isImageLoaded = true;
              store.state.homeImageList = myList;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  }
  return myList;
};
export const getDetailedImage = async (item) => {
  store.state.isLoading = true;
  store.state.isImageLoaded = false;
  let myList = [];
  const root = ["images"];
  let imgRef = ref(storage, root + "/" + item.album + "/" + item.name);
  let src = "";
  getDownloadURL(imgRef)
    .then((url) => {
      src = url;
    })
    .catch((error) => {
      console.log(error);
    });
  getMetadata(imgRef)
    .then((metadata) => {
      myList.push({
        sizeType: metadata.fullPath.split("/")[0],
        fullPath: metadata.fullPath,
        description: metadata.customMetadata.description,
        album: metadata.fullPath.split("/")[1],
        name: metadata.name,
        timeCreated: metadata.timeCreated,
        updated: metadata.updated,
        src: src,
      });
    })
    .then(() => {
      store.state.imgDetailList = myList;
      store.state.isLoading = false;
      store.state.isImageLoaded = true;
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(src);
  return myList;
};
