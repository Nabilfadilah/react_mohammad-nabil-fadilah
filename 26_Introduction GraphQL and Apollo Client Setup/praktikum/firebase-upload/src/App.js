import './App.css';
import { useState } from 'react';
// import storage from './component/firebaseConfig';
import storage from './firebaseConfig'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

function App() {
  // state upload file
  const [file, setFile] = useState("");

  // progres
  const [percent, setPercent] = useState(0);

  // handle input change event dan update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleUpload() {
    if (!file) {
      alert("Please choose a file first!")
    }

    const storageRef = ref(storage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progess 
        setPercent(percent);
      }, 
      (err) => console.log(err),
      () => {
        // download url 
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  }
  
  return (
    <div>
      <input type='file' accept='' onChange={handleChange}/>
      <button onClick={handleUpload}>Upload to Firebase</button>
      <p>{percent} "% done</p>
    </div>
  );
}

export default App;
