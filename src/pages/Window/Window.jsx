import React, { useState } from "react";
import "./Window.scss";
import BottomBar from "../../components/Window/BottomBar/BottomBar";
import RecycleBin from "../../components/Window/RecycleBin/RecycleBin";
import MyComputer from "../../components/Window/MyComputer/MyComputer";
import MusicIcon from "../../assets/MusicIcon.png"; // MusicIcon bileşenini ekledik
import MusicFolder from "../../components/Window/MediaPlayer/MusicFolder"; // MusicFolder bileşenini ekledik

const Window = () => {
  const [isMusicOpen, setIsMusicOpen] = useState(false);

  return (
    <div className="window__screen">
      <img
        src="https://wallpapercave.com/wp/wp5493583.jpg"
        alt="Background"
        className="background"
      />

      {/* Music Folder Icon */}
      <div
        className="window__icon"
        onDoubleClick={() => setIsMusicOpen(true)} // Modal açma işlevi
        title="Music"
      >
        <img src={MusicIcon} alt="Music" />
      </div>

      {/* Music Folder Modal */}
      {isMusicOpen && (
        <div className="window__modal">
          <div className="modal-header">
            <span className="modal-title">Music Folder</span>
            <button
              className="close-btn"
              onClick={() => setIsMusicOpen(false)} // Modal kapama işlevi
            >
              X
            </button>
          </div>
          <MusicFolder closeFolder={() => setIsMusicOpen(false)} />
        </div>
      )}

      {/* Other Components */}
      <BottomBar />
      <RecycleBin />
      <MyComputer />
    </div>
  );
};

export default Window;
