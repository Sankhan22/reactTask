import React from 'react'
import Header from './assets/Header'
import Services from './assets/Services'
import Testimonials from './assets/Testimonials'

function App() {
  return (
    <div>
      <Header/>
      <Services/>
      <section className='simple'>
      
         <h1>Business <span className='green'>Solutions</span> and <span>Crypto</span> Investments</h1>
         <div>
         <div className='button'>
                    <button className='btn'>Discover More</button>
                    <button className='btn bnn'>Contact Us</button>
              
                </div>
              
      
        </div>
         </section>

         <Testimonials/>
    
      <section className="freedom">
        <div className="container">
        <div className='fotoBox'>
          <div className="foto">
          <img src="https://templatemo.com/templates/templatemo_574_mexant/assets/images/calculator-image.png" alt="" />
          </div>
        <div className='inputBox'> 
       <h6> YOUR FREEDOM</h6>
          <h1>Get A Financial Plan</h1>
          <form >
            <div className='input'>
              <div className='inputLable'>
              <label htmlFor="">Your Name</label> 
            <input type="text" />
            </div>
            <div className='inputLable'> 
            <label htmlFor="">Your Email</label> 
            <input type="text" />
            </div>
            </div>
            <div>
              <label htmlFor=""> Subject</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Your Reason</label> 
              
              <select className='select'>
    <option value="0">Choose an option</option>
    <option value="1">Online Bank</option>
    <option value="2">Financial control</option>
    <option value="3">Yearly Profit</option>
    <option value="4">Crypto Investment</option>
    </select>
            </div>
            <div className='button'>
                    
                    <button className='btn bnn'>Submit Now</button>
              
                </div>
          </form>
        </div>
        </div>
        </div>
      </section>
     
      
     <div className='blue'>
     <div className="container">
        <div className='company'>
            <div className="col-lg-2 col-sm-4 col-6">
            <img src='https://templatemo.com/templates/templatemo_574_mexant/assets/images/client-01.png'></img>
            </div>
            <div className="col-lg-2 col-sm-4 col-6">
            <img src='https://templatemo.com/templates/templatemo_574_mexant/assets/images/client-01.png'></img>
            </div>
            <div className="col-lg-2 col-sm-4 col-6">
            <img src='https://templatemo.com/templates/templatemo_574_mexant/assets/images/client-01.png'></img>
            </div>
            <div className="col-lg-2 col-sm-4 col-6">
            <img src='https://templatemo.com/templates/templatemo_574_mexant/assets/images/client-01.png'></img>
            </div>
            <div className="col-lg-2 col-sm-4 col-6">
            <img src='https://templatemo.com/templates/templatemo_574_mexant/assets/images/client-01.png'></img>
            </div>
             <div className="col-lg-2 col-sm-4 col-6">
            <img src='https://templatemo.com/templates/templatemo_574_mexant/assets/images/client-01.png'></img>
            </div>
            

            
            </div>
        </div>
    </div>
    </div>


  )
}

export default App