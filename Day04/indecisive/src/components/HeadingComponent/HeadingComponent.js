import React from 'react';
import './HeadingComponent.css';

const title = "WE ARE THE INDECISIVES";

const HeadingComponent = () => {
    return (
        <>
            <div className='header'>
                <div className='team-logo'>
                    <img src={require("../../assets/image.png")} />
                    <span>{title}</span>
                </div>
            </div>
        </>
    )
}

export default HeadingComponent;