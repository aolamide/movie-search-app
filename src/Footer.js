import React from 'react';

const Footer = () => {
    return(
       <div className='footer'>
           <p>Made with <i className="fa fa-heart"></i>{' '}by  <a href='https://aolamide.tech'>Olamide Aboyeji</a></p>
           <div>
                <a href="https://linkedin.com/in/aolamide" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2x"></i></a>
                <a href="https://github.com/aolamide" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x"></i></a>
                <a href="mailto:me@aolamide.tech" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope fa-2x"></i></a>
           </div>
       </div>
    )
}


export default Footer;