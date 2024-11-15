import React, { useState, useRef, useEffect } from "react";
import styles from './Player.module.css';

const Player = ({ selectedSong, songs, setSelectedSong }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (selectedSong && isPlaying) {
            audioRef.current.src = selectedSong.audio;
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [selectedSong, isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const onTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
    };

    const changeTime = (e) => {
        const time = (e.target.value / 100) * audioRef.current.duration;
        audioRef.current.currentTime = time;
        setCurrentTime(time);
    };

    const playNext = () => {
        const currentIndex = songs.findIndex((song) => song === selectedSong);
        const nextSong = songs[(currentIndex + 1) % songs.length];
        setSelectedSong(nextSong);
    };

    const playPrevious = () => {
        const currentIndex = songs.findIndex((song) => song === selectedSong);
        const prevSong =
            songs[(currentIndex - 1 + songs.length) % songs.length];
        setSelectedSong(prevSong);
    };

    return (
        <div className={styles.player}>
            <audio
                ref={audioRef}
                src={selectedSong ? selectedSong.audio : ""}
                onTimeUpdate={onTimeUpdate}
            />
            <div className={styles.player__info}>
            <img src='' alt="Обложка трека" />
                <div>
                    <h3>{songs.title}</h3>
                    <h4>{songs.artist}</h4>
                </div>
            </div>
            <div className={styles.player__center}>
                <div className={styles.player__controls}>
                    <button onClick={playPrevious}>Назад</button>
                    <button onClick={togglePlayPause}>
                        {isPlaying ? "Пауза" : "Воспроизведение"}
                    </button>
                    <button onClick={playNext}>Вперёд</button>
                </div>
                <div className={styles.player__progress}>
                    <span>{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, "0")}</span>
                    <input
                        className={styles.player__progress__slider}
                        type="range"
                        value={(currentTime / duration) * 100 || 0}
                        onChange={changeTime}
                    />
                    <span>{Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, "0")}</span>
                </div>
                <div className={styles.volume}>
                    <input
                        className={styles.volume__slider}
                        type="range"
                        value={(audioRef.volume)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Player;
