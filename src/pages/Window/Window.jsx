import React, { useState } from 'react';
import './Window.scss';
import BottomBar from '../../components/Window/BottomBar/BottomBar';
import RecycleBin from './../../components/Window/RecycleBin/RecycleBin';
import MyComputer from '../../components/Window/MyComputer/MyComputer';

const Window = () => {


  return (
    <div className="window__screen">
      <img src="https://wallpapercave.com/wp/wp5493583.jpg" alt="Background" />
      
      
      <BottomBar />
      <RecycleBin />  {/* RecycleBin bileşenini ekledik */}
      <MyComputer />  {/* MyComputer bileşenini ekledik */}
    </div>
  );
};

export default Window;
