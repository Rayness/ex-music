import React, { useState, useEffect } from "react";
import SongList from "../components/SongList";

const Tracks = () => {
    const [songs, setSongs] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("../db/songs.json")
            .then((response) => response.json())
            .then((data) => setSongs(data));
    }, []);

    const filteredSongs = songs.filter(
        (song) =>
            song.title.toLowerCase().includes(search.toLowerCase()) ||
            song.artist.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="tracks-page">
            <input
                type="text"
                placeholder="Поиск..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <SongList songs={filteredSongs} onPlay={(song) => console.log("Playing:", song)} />
        </div>
    );
};

export default Tracks;
