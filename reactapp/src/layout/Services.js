import React from 'react'

import { Link } from 'react-router-dom';
const Services= () => {
    return (
        <div className='background-image'>
         <h2>
            <Link to='/que'><div className="continue-btn">Back</div></Link></h2>
        <div className="hero">
            <div class="card text-bg-dark-black border-0">
           
                    <div class="card-img-overlay d-flex flex-column
                    justify-content-center">
                        <div className="container">
                      <h5 class="card-title display-5 fw-bolder mb-0">THE TOP COMPANIES WHICH WE ASSOCIATE ARE</h5><br></br>
                      <p class="card-text lead fs-2">
                          *AMAZON
                          *ZOHO
                          *WIPRO
                          *TCS
                          *BOSCH
                          AND MORE WITH EXCITING PACKAGES AT YOUR HANDS!!!
                      </p>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    );
};
export default Services;
