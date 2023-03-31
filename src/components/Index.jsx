import React from 'react'
import About from './About'
import Home from './Home'
import Stats from './Stats'
import Footer from './Footer';
import Slider from './Slider';
import Timeline from './Timeline';
import Navbar from './Navbar';
import Contact from './Contact';

const Index = () => {
    return (
        <>
        <Navbar />
            <div>
                <Home />
                <About />
                <Slider />
                <Stats />
                <Timeline />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default Index