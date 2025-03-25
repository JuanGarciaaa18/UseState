import React, { useState } from 'react';
import { LikesDislikes } from '../LikesDislikes/LikesDislikes';
import './DarkLigthMode.css';

export const DarkLightMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className='page'>
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <div>
                <button className="btn-add" onClick={toggleMode}>
                    {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
            </div>
                

           <div>
            <LikesDislikes />
           </div>

          
          
            
        </div>
        </div>
    );
};