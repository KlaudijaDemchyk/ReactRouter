import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersList from "./components/UsersList";
import HomePage from "./components/HomePage";
import AlbumList from "./components/AlbumList";
import PhotoList from "./components/PhotoList";
import "./App.css";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:userId/albums" element={<AlbumList />} />
        <Route path="/albums/:albumId/photos" element={<PhotoList />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
