import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  setIsPlaying,
  audio,
  isLibraryOpen,
}) => {
  const showSongs = songs.map((song) => {
    return (
      <LibrarySong
        song={song}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        key={song.id}
        audio={audio}
        songs={songs}
      />
    );
  });

  return (
    <div className={`library ${isLibraryOpen ? "library-open" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">{showSongs}</div>
    </div>
  );
};

export default Library;
