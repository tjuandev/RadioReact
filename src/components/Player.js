import React, {useEffect, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  isPlaying,
  setIsPlaying,
  audio,
  songInfo,
  setSongInfo,
  songs,
  currentSong,
  setCurrentSong,
}) => {
  const gradient = useRef(null);

  const setTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  useEffect(() => {
    gradient.current.style.background = `linear-gradient(90deg, ${currentSong.color[0]} 30%, ${currentSong.color[1]} 100%)`;
    songs.forEach((el) => {
      el.active = false;
    });
    currentSong.active = true;
  }, [currentSong]);

  const playSongHandler = () => {
    if (isPlaying === false) {
      setIsPlaying(true);
      audio.current.play();
    } else {
      setIsPlaying(false);
      audio.current.pause();
    }
  };

  const dragHandler = (e) => {
    const time = e.target.value;
    setSongInfo({ ...songInfo, currentTime: time });
    audio.current.currentTime = time;
  };

  const skipTrackHandler = (direction) => {
    const indexSong = songs.indexOf(currentSong);

    const playMusic = () => {
      setTimeout(() => {
        audio.current.play();
        setIsPlaying(true);
      }, 0);
    };

    if(direction === 'back') { // A divisão por resto é crucial e é o que vai fazer que o final volte para o início e assim vai...
      if(indexSong === 0) {
        playMusic();
        return setCurrentSong(songs[songs.length - 1])
      }
      setCurrentSong(songs[(indexSong - 1) % songs.length])
    } else {
      setCurrentSong(songs[(indexSong + 1) % songs.length])
    }
    playMusic();
  };

  return (
    <div className="player">
      <div className="time-control">
        <p className="current-time">{setTime(songInfo.currentTime)}</p>
        <div className="track" ref={gradient}>
          <input
            type="range"
            min={0}
            max={songInfo.duration}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          <div className="animate-track">
            
          </div>
        </div>
        <p>{songInfo.duration ? setTime(songInfo.duration): '0:00'}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} onClick={() => skipTrackHandler('back')} />
        <FontAwesomeIcon
          onClick={() => playSongHandler()}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-foward"
          size="2x"
          icon={faAngleRight}
          onClick={() => skipTrackHandler('foward')}
        />
      </div>
    </div>
  );
};

export default Player;
