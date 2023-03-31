import React from 'react'
import about from '../images/about.gif';
import '../styles/about.css'

const About = () => {
    return (
        <>
            <div id="about" className="section light-background about-section my-5">




                <div class="area" >
                    <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >

                <div class="context px-5">
                
            <div className='py-4'>
                    <div className="section-heading">About</div>
                    <div className="section-subheading">Read to know about my journey</div>
                </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="gif-container flexy">
                            <img className='about-image' src={about} alt="" />
                        </div>
                        <div className='col-span-2 flexy'>
                            I'm an ordinary housewife aiming to achieve extra-ordinary dreams through my Cooking channel. I show people easy steps to cook amazing food in my youtube channel. Currently I'm marching forward to get my 1000 subscribers on my channel, would be glad if you join me in my journey.
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About