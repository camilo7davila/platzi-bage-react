import React from 'react'

import './styles/HomeStyle.css';
import astronauts from '../../images/astronauts.svg'
import logo from '../../images/platziconf-logo.svg'
import { Link } from 'react-router-dom';

export const HomeScreen = () => {
    return (
        <div className="container__main d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <img src={logo} alt="astronauts" />
                    <h1>print your badges</h1>
                    <p>the easiest way to manage you <br /> conference</p>
                    <div className="text-right">
                        <Link 
                            className="btn btn-primary"
                            to="/badges"    
                        >
                            Start now
                        </Link>
                    </div>
                </div>
                <div className="ml-5">
                    <img src={astronauts} alt="astro" />
                </div>

            </div>
        </div>
    )
}
