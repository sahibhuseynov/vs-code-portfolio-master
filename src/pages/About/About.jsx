import React from 'react'
import './About.scss'
import TextTitle from './../../components/TextTitle';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
const textTitle = 'My, Myself & I'.split("")
 
const About = () => {
  return (
    <div className='about'>
     
      <div className='about__left'>
        <div className='text__title' >
            {textTitle.map(( char, index) => {
              return (
                <React.Fragment key={index}>
                  <TextTitle textcolor={'#08fdd8'} >
                    { char === " " ? "\u00A0" : char}
                    
                  </TextTitle>
                 
                </React.Fragment>
              );
            })}
          </div>
          <div className='about__title'>
            <motion.p
            initial={{x:-850}}
            animate={{x:0}}
            transition={{ duration: 0.7, }}
            >I'm a Front-End Developer located in Azerbaijan. I enjoy designing user experiences and creating creative solutions.</motion.p>
            <motion.p
            initial={{x:-950}}
            animate={{x:0}}
            transition={{ duration: 0.7 , delay:0.3 }}
            >I'm a detail-oriented, problem-solving, hard-working student. My hobbies include playing chess and exploring new places.</motion.p>
            <motion.p
            initial={{x:-1150}}
            animate={{x:0}}
            transition={{ duration: 0.7 , delay:0.5 }}
            >I'm interested in frontend technologies and aim to work on innovative projects with positive people. Working with such people motivates me and I strive to continuously improve myself.</motion.p>
          </div>
      </div >
      <div className="about__right">
        
      </div>
    </div>
  )
}

export default About