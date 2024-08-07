import React from "react";
import { usePlayer } from "../context/PlayerContext";
import Loading from "./Loading";
import Error from "./Error";
import "./Player.css";

const Player = () => {
  const {
    audioRef,
    currentEpisode,
    currentShow,
    currentSeason,
    loading,
    error,
  } = usePlayer();

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="player">
      {loading ? (
        <Loading />
      ) : currentEpisode ? (
        <>
          <div className="audio-container">
            <audio ref={audioRef} controls />
            <div className="player-details">
              <img
                src={currentSeason ? currentSeason.image : currentShow.image}
                alt={currentShow.title}
                className="player-image"
              />
              <div>
                <h3>
                  Episode {currentEpisode.episode}: {currentEpisode.title}
                </h3>
                <p>{currentShow.title}</p>
                {currentSeason && <p>Season {currentSeason.season}</p>}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="select-podcast">
          <small>
            <p>Select a podcast</p>
          </small>
        </div>
      )}
    </div>
  );
};

export default Player;
