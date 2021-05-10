import { useState, useRef } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";

import "./styles/app.scss";

import data from "./utils"; // Data is our function;

function App() {
  const audio = useRef(null);
  // State
  const [songs] = useState(data()); // O que vem dentro de useState é o padrão.
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);

  const timeUpdateHandler = (e) => {
    let currentTime = e.target.currentTime;
    let duration = Math.floor(e.target.duration);
    setSongInfo({ ...songInfo, currentTime, duration });
  };

  return (
    <div className="App">
      <Nav isLibraryOpen={isLibraryOpen} setIsLibraryOpen={setIsLibraryOpen} />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audio={audio}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        audio={audio}
        isLibraryOpen={isLibraryOpen}
      />
      <audio
        src={currentSong.audio}
        ref={audio}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
      ></audio>
    </div>
  );
}

export default App;
