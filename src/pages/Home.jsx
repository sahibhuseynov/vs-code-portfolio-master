import React from 'react';
import './Home.scss';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import TextTitle from './../components/TextTitle';
import randomcolor from 'randomcolor';
import '../components/hoverthree'

const textTitle = 'Hi,Im Sahib,\nWeb Developer.'.split("").map((char, index) => {
  return {
    char: char === " " ? "\u00A0" : char,
    key: index,
    isComma: char === ","
  };
});

const colors = randomcolor({ count: textTitle.length, luminosity: 'bright',saturation: 'vivid',  });

const Home = () => {
  return (
    <div className='home'>
     <canvas id='canvas'></canvas>
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
          <Link to='/contact'><button className='btn'>Contact Me</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
