import React from 'react';
import './App.css';

export default function Home() {
    return (
        <div>
        <div className='home-pg-container'> 
           <h3> Welcome to the best place to order Pizza! </h3>
                <div className='img-container'>
                    <img src='https://raw.githubusercontent.com/mattcasey879/web-sprint-challenge-single-page-applications/main/Assets/Pizza.jpg' alt='pizza'/>
                    <p>Delivery Free!!</p>
                </div>
           </div>
        </div>
    )
}