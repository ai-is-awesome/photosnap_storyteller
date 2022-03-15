import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

export const uploadFile = (file, setSnapshot, setUploadStatus) => {
  const fileName = file.name;
  const fileRef = ref(storage, `photosnap_images/${fileName}`);
  const uploadBytesTask = uploadBytesResumable(fileRef, file);
  uploadBytesTask.on(
    "state_changed",
    (snapshot) => {
      // console.log("progress: ", snapshot.bytesTransferred);
      setSnapshot(snapshot);
    },
    (err) => console.log("err"),
    () => {
      getDownloadURL(uploadBytesTask.snapshot.ref).then((downloadUrl) =>
        setUploadStatus(true)
      );
    }
  );

  // uploadBytes.on("state_changed");
};

// const storageRef = ref(storage);

// const imagesRef = ref(storage, "images");

// const img = ref(storage, "images/63wfeewfwfefwebffdde.jpg");

// console.log(imagesRef.child());
