import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tracks from "./pages/Tracks";
import Player from "./components/Player";
import styles from './App.module.css';

function App() {
    const [songs, setSongs] = useState([]); // Список всех треков
    const [selectedSong, setSelectedSong] = useState(null); // Выбранный трек

    return (
        <Router>
            <div className={styles.App}>
                <Navbar />
                <main >
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Tracks
                                    onSelectSong={(song) => setSelectedSong(song)}
                                />
                            }
                        />
                    </Routes>
                </main>
                <Player
                    selectedSong={selectedSong}
                    songs={songs}
                    setSelectedSong={setSelectedSong}
                />
            </div>
        </Router>
    );
}

export default App;
