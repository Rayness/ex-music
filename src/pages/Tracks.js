import React, { useState, useEffect } from "react";
import styles from './Tracks.module.css';


const Tracks = ({ onSelectSong }) => {
    const [songs, setSongs] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        // Загружаем треки из songs.json
        fetch("/songs.json")
            .then((response) => response.json())
            .then((data) => setSongs(data))
            .catch((error) => console.error("Ошибка загрузки песен:", error));
    }, []);

    // Фильтрация треков на основе поиска
    const filteredSongs = songs.filter(
        (song) =>
            song.title.toLowerCase().includes(search.toLowerCase()) ||
            song.artist.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={styles.tracks__page}>
            <input
                type="text"
                placeholder="Поиск треков..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className={styles.container}>
                {filteredSongs.map((song, index) => (
                    <div
                        key={index}
                        className={styles.song}
                        onClick={() => onSelectSong(song)}
                    >
                        <img src={song.cover} alt="Обложка трека" />
                        <div>
                            <h3>{song.title}</h3>
                            <h4>{song.artist}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tracks;
