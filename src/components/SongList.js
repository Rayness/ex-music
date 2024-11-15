import React from "react";
import './tracks.css'

const SongList = ({ songs, onPlay }) => {
    return (
        <div className="song-list">
            {songs.map((song, index) => (
                <div key={index} className="song" onClick={() => onPlay(song)}>
                    <img src={song.cover} alt="cover" />
                    <div>
                        <h3>{song.title}</h3>
                        <h4>{song.artist}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SongList;
