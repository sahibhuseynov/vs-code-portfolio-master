import React, { useEffect } from 'react';
import './Home.scss';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import TextTitle from './../components/TextTitle';
import randomcolor from 'randomcolor';

const textTitle = 'Hi,Im Sahib,\nWeb Developer.'.split("").map((char, index) => {
  return {
    char: char === " " ? "\u00A0" : char,
    key: index,
    isComma: char === ","
  };
});

const colors = randomcolor({ count: textTitle.length, luminosity: 'bright', saturation: 'vivid' });

const Home = () => {
  // useEffect(() => {
  //   const canvas = document.getElementById('canvas');
  //   const ctx = canvas.getContext('2d');

  //   // Canvas boyutlarını ayarlama
  //   function resizeCanvas() {
  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;
  //   }

  //   // Animasyon işlevi
  //   function animateCanvas() {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas'ı temizle
  //     ctx.beginPath();
  //     ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 50, 0, Math.PI * 2);
  //     ctx.fillStyle = randomcolor({ luminosity: 'bright', saturation: 'vivid' }); // Her seferinde rastgele renk
  //     ctx.fill();
  //     ctx.stroke();
  //     requestAnimationFrame(animateCanvas); // Bir sonraki frame için animasyonu tekrarla
  //   }

  //   // Sayfa yüklendiğinde ve pencere boyutu değiştiğinde canvas boyutlarını ayarla
  //   window.addEventListener('resize', resizeCanvas);
  //   resizeCanvas(); // Başlangıçta boyutlandır

  //   animateCanvas(); // Animasyonu başlat

  //   return () => {
  //     window.removeEventListener('resize', resizeCanvas); // Temizlik işlemi
  //   };
  // }, []);

  return (
    <div className='home'>
      <canvas id='canvas'></canvas> {/* Canvas'ı burada kullanıyoruz */}
      <div className="home__title">
        <div className='text__title'>
          {textTitle.map(({ char, key, isComma }, index) => {
            return (
              <React.Fragment key={key}>
                <TextTitle hovercolor={colors[index]}>{char}</TextTitle>
                {isComma && <br />}
              </React.Fragment>
            );
          })}
        </div>
        <TypeAnimation
          sequence={['Front End Developer / React Expert', ]}
          speed={35} 
          wrapper="h3"
        />
        <div className='home__btn__group'>
          <Link to='/projects'><button className='btn2'><span>View Work</span></button></Link>
          <Link to='/contact'><button className='btn'><span>Contact Me</span></button></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
