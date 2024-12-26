import React,{useState} from 'react'
import './Explorer.scss'
import {FiChevronDown,FiChevronRight} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import explorerItems from '../../assets/data/ExploreItesm'
const Explorer = () => {
  const [show, setShow] = useState(true)
  const handleClick = () => {
    setShow(!show)
  }
  return (
    <div className='explorer'>
      <h5>EXPLORER</h5>

      <div className='explorer__down' onClick={handleClick}>
          {
            show ? <FiChevronDown /> : <FiChevronRight />
          }
          <span>PORTFOLIO</span>
      </div>

    
        <div className='explorer__content' style={{display:show ? 'block' : 'none'}}>
      {explorerItems.map((item, index) => (
        <Link to={item.path} className='explorer__item link' key={index} >
          <img src={item.icon} alt={item.name} />
          <p>{item.name}</p>
          </Link>
      ))}
        </div>
    
    </div>
  )
}

export default Explorer