import React, { useState } from "react";
import "./MusicFolder.scss";

const musicFiles = [
  { id: 1, title: "Song 1", src: "/music/song1.mp3" },
  { id: 2, title: "Song 2", src: "/music/song2.mp3" },
  { id: 3, title: "Song 3", src: "/music/song3.mp3" },
];

const MusicFolder = ({ closeFolder }) => {
  const [currentMusic, setCurrentMusic] = useState(null);

  return (
    <div className="music-folder">
      {!currentMusic ? (
        <>
          <h2>Müzik Listesi</h2>
          <ul className="music-folder__list">
            {musicFiles.map((file) => (
              <li key={file.id} onClick={() => setCurrentMusic(file)}>
                🎵 {file.title}
              </li>
            ))}
          </ul>
          <button onClick={closeFolder} className="close-btn">
            Klasörü Kapat
          </button>
        </>
      ) : (
        <div className="music-player">
          <h3>Çalan Şarkı: {currentMusic.title}</h3>
          <audio controls autoPlay>
            <source src={currentMusic.src} type="audio/mpeg" />
            Tarayıcınız bu sesi desteklemiyor.
          </audio>
          <button onClick={() => setCurrentMusic(null)}>Müzik Listesine Dön</button>
        </div>
      )}
    </div>
  );
};

export default MusicFolder;
