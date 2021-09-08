import React from 'react'
import { Button } from './Button'
import '../App'
import './Section1.css'




function Section1() {
    return (
        <div className='section1-container'>
            <video src='/videos/Cascade - 261.mp4' autoPlay loop muted />
            <h1>Wellness for Everyone</h1>
            <p>What are you waiting for?</p>
            <div>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    LET'S GET STARTED!
                </Button>
                <Button 
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far
                    fa-play-circle' />
                </Button>
            </div>
        </div >
    )
}

export default Section1