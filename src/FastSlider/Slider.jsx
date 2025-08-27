import React from 'react';
import Marquee from 'react-fast-marquee';
import AirbnbIcon from '../svgIcon/AirbnbIcon';
import GoogleIcon from '../svgIcon/GoogleIcon';
import MicrosoftIcon from '../svgIcon/MicrosoftIcon';
import Spotify from '../svgIcon/Spotify';
import MailChimpIcon from '../svgIcon/MailChimpIcon';
import MashableIcon from '../svgIcon/MashableIcon';

const Slider = () => {

    return (
        <div className='text-white '>
            <Marquee pauseOnHover={true} speed={100} >
                <div className='gap-5 flex '>
                    <a className="mr-10 ">   <AirbnbIcon /></a>
                </div>
                <div>
                    <a className="mr-10 ml-3">    <MicrosoftIcon /></a>
                </div>
                <div>
                    <a className="mr-10 ml-3">  <Spotify /> </a>
                </div>
                <div>
                    <a className="mr-10 ml-3"> <GoogleIcon /> </a>
                </div>
                <div>
                    <a className="mr-10 ml-3">   <MailChimpIcon /></a>
                </div>
                <div>
                    <a className="mr-10 ml-3">  <MashableIcon /> </a>
                </div>

            </Marquee>

        </div>
    );
};

export default Slider;