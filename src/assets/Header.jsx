import React from 'react'

const Header = () => {
  return (
    <div>
        <section className="navbar">
            <div className="container">
            
            <div className="navbar__list">
            <h1><img src="https://templatemo.com/templates/templatemo_574_mexant/assets/images/logo.png" alt="" /></h1>
            <ul>
                <li> <a href='#'>Home</a></li>
                <li>Services</li>
                <li>About</li>
                <li  className='dropbutton'>Pages &#11206;
                    <ul className='dropdown'>
                        <li>About Us </li>
                        <li>Our Service</li>
                        <li>Contact Us</li>   
                    </ul>
                </li>
                <li>Testiminal</li>
                <button className='btn'>Contact Support</button>
            </ul>
            </div>
            </div>
            
            </section>
            <div className="image">
            <div className="container">
            <div className='text__box'>
               
                <h2>Get < span>ready</span> for your businnes & upgrade<span> all aspekts </span></h2>
                <p>______</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eum nisi minus fugiat ab dolorem explicabo possimus similique aliquid, magni, quis officia modi illo adipisci quos, nostrum laborum! Illum, dolorum corrupti!</p>
                <div className='button'>
                    <button className='btn'>Discover More</button>
                    <button className='btn bnn'>Contact Us</button>
              
                </div>
            </div>
            </div>
            </div>
           
        
    </div>
  )
}

export default Header