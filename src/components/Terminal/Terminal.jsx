import React from 'react'
import './Terminal.scss'
import { Resizable } from 're-resizable'
import {BsThreeDots} from 'react-icons/bs'
import { FiChevronUp} from 'react-icons/fi'
import {RxCross2} from 'react-icons/rx'
import powershell from '../../assets/powershell-icon.jpg'
const Terminal = ({isTerminalOpen,setIsTerminalOpen}) => {
  return (
    <div className='terminal__container'>
        <Resizable
  defaultSize={{
    height:200,
  }}
  style={{ borderTop:'2px solid #696767' , padding: '10px' }}
  enable={{ top: true}}

>
  <div className="terminal__header">
    
   
        <div className="left">
            <p>PROBLEMS</p>
            <p>OUTPUT</p>
            <p>DEBUG CONSOLE</p>
            <p>TERMINAL</p>
        </div>
        <div className="right">
        <span><BsThreeDots size={20}/></span>
       <span> <FiChevronUp size={20}/></span>
        <span onClick={() => setIsTerminalOpen(!isTerminalOpen)}><RxCross2 size={20} /></span>
        </div>
   
  </div>
  <div className="terminal__body">
    <div className='left'>
      <textarea >
      C:\Users\micha\Desktop\vs-code-portfolio&#62;
      </textarea>
    </div >
    <div className="right">
      <span>
        <img src={powershell} alt="" />
        <p>powershell</p>
      </span>
      <span>
        <img src={powershell} alt="" />
        <p>powershell</p>
      </span>
      <span>
        <img src={powershell} alt="" />
        <p>powershell</p>
      </span>
    </div>
    </div>
</Resizable>
    </div>
  )
}

export default Terminal