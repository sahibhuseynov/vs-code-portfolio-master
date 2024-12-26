import React from 'react'
import './Tabs.scss'
import explorerItems from '../../assets/data/ExploreItesm'
import { Link, useLocation } from 'react-router-dom';

const Tabs = () => {
  const location = useLocation();
  const {pathname} = location;
  
  return (
    <div className='tabs'>
    {explorerItems.map((item, index) => (
        <Link to={item.path} className={pathname == item.path ? 'tabs__item link active' : 'tabs__item link' } key={index} >
          <img src={item.icon} alt={item.name} />
          <p>{item.name}</p>
          </Link>
      ))}
    </div>
  )
}

export default Tabs