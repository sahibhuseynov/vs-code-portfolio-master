import React from 'react'
import './Contact.scss'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='contact'>
       <div className='contact__left'>
        <h3>Contact Me on Social Media</h3>
            <p><span>1</span> .socials &#123;</p> 
           <ul className='social__links'>
                <li><span>2</span> website: <Link className='contact__link' >Heyy</Link></li>
                <li><span>3</span> email: <Link to='mailto:sahibhuseynov41@gmail.com' className='contact__link' >sahibhuseynov41@gmail.com</Link></li>
                <li><span>4</span> github: <Link to='https://github.com/sahibhuseynov' target='_blank' className='contact__link' >sahibhuseynov</Link></li>
                <li><span>5</span> instagram: <Link to='https://www.instagram.com/hueseinovv' target='_blank' className='contact__link'>hueseinovv</Link></li>
                <li><span>6</span> twitter: <Link to='https://twitter.com/hueseinovv/' target='_blank' className='contact__link'>hueseinovv</Link></li>
           </ul>
           <p><span>7</span>  &#125;</p> 
       </div>

       <div className="contact__right">
        <h3>Or Complete This Form</h3>
        <form >
          <div className='form__header'>
               <div className='form__item'>
                    <label>NAME</label>
                    <input type="text" />
               </div>
               <div className='form__item'>
                    <label>EMAIL</label>
                    <input type="text" />
               </div>
          </div>
          <div className='form__item'>
                    <label>SUBJECT</label>
                    <input type="text" />
               </div>

               <div className='form__item'>
                    <label>MESSAGE</label>
                    <textarea cols="30" rows="10"></textarea>
               </div>
             <button>
                SUBMIT
             </button>
        </form>
       </div>
    </div>
  )
}

export default Contact