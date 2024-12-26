import React from 'react'
import './Sidebar.scss'
import {VscFiles,VscAccount} from 'react-icons/vsc'
import {FiGithub,FiSettings} from 'react-icons/fi'
import {BsCodeSlash,BsPencil} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import { Link,useLocation} from 'react-router-dom'


const sidebarTopItems = [
  {
    Icon: VscFiles,
    path: '/',
  },
  {
    Icon: FiGithub,
    path: '/github',
  },
  {
    Icon: BsCodeSlash,
    path: '/projects',
  },
  {
    Icon: BsPencil,
    path: '/articles',
  },
  {
    Icon: AiOutlineMail,
    path: '/contact',
  },
];

const sidebarBottomItems = [
  {
    Icon: VscAccount,
    path: '/about',
  },
  {
    Icon: FiSettings,
    path: '/settings',
  },
];
const Sidebar = () => {
  const location = useLocation();
  const {pathname} = location;
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        {sidebarTopItems.map((item, index) => {
          const { Icon, path } = item;
          return (
           <Link to={path} key={index} className={pathname == path ? 'sidebar__item active' : 'sidebar__item ' } >
              
               <Icon size={25} color={pathname == path ? 'white' : 'gray'} />
              
           </Link >
          );
        })}
        </div>
        <div className="sidebar__bottom">
        {sidebarBottomItems.map((item, index) => {
          const { Icon, path } = item;
          return (
           <Link to={path} key={index} className='sidebar__item' >
              
               <Icon size={25} color={pathname == path ? 'white' : 'gray'} />
              
           </Link >
          );
        })}
        </div>
    </div>
  )
}

export default Sidebar