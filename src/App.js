import { useState } from "react";
import "./App.css";

function App() {
  const [img, setImg] = useState(null);
  const [vid, setVid] = useState(null);
  const imgUrl =
    "https://2023-10-16-s3-m3u8.s3.ap-northeast-2.amazonaws.com/dog.jpeg";
  const videoUrl =
    "https://2023-10-16-s3-m3u8.s3.ap-northeast-2.amazonaws.com/sample-mp4-file-small.mp4";

  const clickHandler = (type) => {
    if (type === "img") {
      setImg(imgUrl);
    } else {
      setVid(videoUrl);
    }
  };
  return (
    <div className="App">
      <div className="rowDiv">
        <div className="colDiv">
          <h1> IMG</h1>
          <button onClick={() => clickHandler("img")}>Click Me</button>
          {img && (
            <img
              className="srcDiv"
              src={img}
              alt="img"
            />
          )}
        </div>
        <div className="colDiv">
          <h1> VIDEO</h1>
          <button onClick={() => clickHandler("vid")}>Click Me</button>
          {vid && (
            <video
              className="srcDiv"
              src={vid}
              controls
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
