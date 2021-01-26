import React, { useEffect } from "react";

const LibrarySong = ({ song, setCurrentSong, setIsPlaying, audio, songs }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    setTimeout(() => {
      audio.current.play();
      setIsPlaying(true);
    }, 0);

    songs.forEach((el) => {
      el.active = false;
    });
    song.active = true;
  };
  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt="song-cover" />
      <div className="info">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
