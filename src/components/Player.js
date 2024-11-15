import React, { useState, useEffect, useRef } from "react";

const Player = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const onTimeUpdate = () => {
        const audio = audioRef.current;
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
    };

    return (
        <div className="player">
            <audio ref={audioRef} onTimeUpdate={onTimeUpdate}>
                <source src="path/to/audio.mp3" type="audio/mp3" />
            </audio>
            <button onClick={togglePlayPause}>
                {isPlaying ? "Пауза" : "Воспроизведение"}
            </button>
            <div>
                {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, "0")} /{" "}
                {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, "0")}
            </div>
        </div>
    );
};

export default Player;
