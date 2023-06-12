import React from 'react'
import { BiDownArrowAlt } from "react-icons/bi";
// assets
import Scroll from '../../assets/scroll.svg'

const ScrollDown = () => {
    return (
        <div className='home__scroll'>
            <a href="#about" className='home__scroll-button button--flex'>
                <img src={Scroll} alt="scroll" />
                <span className='home__scroll-name'>Scroll Down</span>
                <BiDownArrowAlt className="home__scroll-arrow"></BiDownArrowAlt>
            </a>
        </div>
    )
}

export default ScrollDown