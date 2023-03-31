import React from 'react'
import hero from '../images/hero.png';
import '../styles/home.css';
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {

    const { text } = useTypewriter({
        words: ["Youtuber", "Housewife", "Chef"],
        loop: 0
    });

    return (
        <>
            <div id='home' className="section dark-background px-5 my-5 pt-10 text-white text-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className='flexy'>
                        <div>

                            <div className='my-3'>
                                Hello, My name is Srima and <br />I am a&nbsp;
                                <span className="typing-effect text-black">
                                    {text}
                                    <Cursor cursorStyle="_" />
                                </span>
                            </div>
                            <div>
                            <a href="https://www.youtube.com/channel/UCqGMgvQQjivA9sR8u0uMBWg?sub-confirmation=1">
          
                                <button className='red py-0.5 px-5 rounded-full subscribe-button bg-white dark-color'>Subscribe</button>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="col image-container">
                        <img className='home-image' src={hero} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home