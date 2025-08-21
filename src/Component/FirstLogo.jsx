import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg'
import SecondCal from './SecondCal'

function FirstLogo() {
    return (
        <div className='text-centre'>
            <Link to={SecondCal}>
                <img src={logo} className="App-logo" alt="Vikram" />
            </Link>
        </div>
    )
}

export default FirstLogo