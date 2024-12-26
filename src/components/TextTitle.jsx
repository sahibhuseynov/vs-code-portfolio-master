import React, { useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const TextTitle = ({ children, hovercolor,textcolor }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const rubberBand = () => {
    return {
      transform: [
        'scale3d(1, 1, 1)',
        'scale3d(1.4, .55, 1)',
        'scale3d(.75,1.25, 1)',
        'scale3d(1.25, .85, 1)',
        'scale3d(.9, 1.05, 1)',
        'scale3d(1, 1, 1)',
      ],
    };
  };

  return (
    <motion.h1
    style={{color: textcolor}}
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) {
          controls.start(rubberBand());
          setIsPlaying(true);
        }
      }}
      onAnimationComplete={() => setIsPlaying(false)}
      transition={{
        duration: 1,
        ease: 'easeOut',
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        loop: 1,
        repeatDelay: 1,
      }}
     whileHover={{color: hovercolor}}
    >
      {children}
    </motion.h1>
  );
};

export default TextTitle;
