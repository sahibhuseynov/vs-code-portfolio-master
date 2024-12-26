import React from 'react'
import './Navbar.scss'
import VsCodeIcon from '../../assets/vscode_icon.svg'
import {AiOutlineLine} from 'react-icons/ai'
import {FaRegWindowRestore} from 'react-icons/fa'
import {RxCross2} from 'react-icons/rx'
import { Link } from 'react-router-dom';

const Navbar = ({isTerminalOpen,setIsTerminalOpen}) => {
  return (
    <section className='navbar'>
     <di className='nav__left'>
        <img src={VsCodeIcon} alt="vs code icon" />
        <div className='nav__items'>
        <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Go</p>
          <p>Run</p>
          <p onClick={() => setIsTerminalOpen(!isTerminalOpen)} >Terminal</p>
          <p>Help</p>
        </div>
     </di >
      <p className='nav__title'>Sahib Huseynov - Visual Studio Code</p>
      <div className='nav__right'>
        <span><AiOutlineLine size={17}/></span>
        <span><FaRegWindowRestore size={12} /></span>
        <Link to='/window' className='link'><span ><RxCross2 size={17}/></span></Link>
      </div>
    </section>
  )
}

export default Navbar