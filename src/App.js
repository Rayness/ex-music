import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tracks from "./pages/Tracks";
import AddSong from "./pages/AddSong";
import Visualizer from "./pages/Visualizer";
import Player from "./components/Player";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Tracks />} />
                        <Route path="/add-song" element={<AddSong />} />
                        <Route path="/visualizer" element={<Visualizer />} />
                    </Routes>
                </main>
                <Player />
            </div>
        </Router>
    );
}

export default App;
