import { motion, AnimatePresence } from 'framer-motion';
import randomcolor from 'randomcolor';
import ProjectsData from '../../assets/data/Projects';
import './Projects.scss';

const Projects = () => {
  const colors = ProjectsData.map(() => randomcolor());

  return (
    <div className='projects'>
      <h3>Tamamladığım Projelerim</h3>
      <div className='projects__container'>
        <AnimatePresence>
          {ProjectsData.map((project, index) => (
            <motion.div
              className='project__card'
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className='project__card__header'
                style={{ background: colors[index] }}
              ></div>
              <div className='project__card__body'>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <div className='project__card__footer'>
                  <a href={project.link} target='_blank' rel='noreferrer'>
                    Canlı Demo
                  </a>
                  <a href={project.github} target='_blank' rel='noreferrer'>
                    Kaynak Kodu
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
