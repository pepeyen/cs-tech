import React from 'react';
import { Link } from "react-router-dom"; 

//Styles
import './cards.css';

function Cards() {
    return (
        <main>
            <div className = "c-card">
                <Link className = "c-card__body --html" to = "/course/html5" target="" rel="noopener noreferrer">
                    <p className = "c-card__title--medium">HTML</p>
                    <div className = {'c-card__description '}>
                        <p className = "c-card__text--extra-light">Click here to see more about the technology</p>  
                    </div>
                </Link>

                <Link className = "c-card__body --css" to = "/course/css3" target="" rel="noopener noreferrer">
                    <p className = "c-card__title--medium">CSS</p>
                    <div className = "c-card__description">
                        <p className = "c-card__text--extra-light">Click here to see more about the technology</p>      
                    </div>      
                </Link>

                <Link  className = "c-card__body --php" to = "/course/php" target="" rel="noopener noreferrer">
                    <p className = "c-card__title--medium">PHP</p>  
                    <div className = "c-card__description">
                        <p className = "c-card__text--extra-light">Click here to see more about the technology</p> 
                    </div>                  
                </Link>

                <Link  className = "c-card__body --jsf" to = "/course/jsf" target="" rel="noopener noreferrer"> 
                    <p className = "c-card__title--medium">JSF</p> 
                    <div className = "c-card__description">
                        <p className = "c-card__text--extra-light">Click here to see more about the technology</p>
                    </div>                 
                </Link>

                <Link className = "c-card__body --reactjs" to = "/course/reactjs" target="" rel="noopener noreferrer">
                <p className = "c-card__title--medium">REACT.JS</p>
                    <div className = "c-card__description">
                        <p className = "c-card__text--extra-light">Click here to see more about the technology</p> 
                    </div>                
                </Link>
            </div>
        </main>         
    );
}

export default Cards;