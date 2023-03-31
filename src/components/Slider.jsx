import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import '../styles/slider.css'

const Slider = () => {

    const data = ['sHZoqW4rVs4','qL2o5xN1TXA','kRdNclzrYCQ','sHZoqW4rVs4',]

    const items = data.map((link, index) => {
        return (
            <iframe frameborder="0" allowfullscreen="true" src={`https://www.youtube.com/embed/${link}?showinfo=0`}></iframe>
        )
    })
    
    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 2,
        },
        1024: {
            items: 5,
        },
    };

    return (
        <>

            <div id="videos" className="section px-5 pb-8">
            
            <div className='pb-8'>
                    <div className="section-heading">Videos</div>
                    <div className="section-subheading">Some of my videos</div>
                </div>
                {/* <AliceCarousel
                        className="my-4"
                        mouseTracking
                        infinite
                        autoPlayInterval={1000}
                        animationDuration={1500}
                        disableDotsControls
                        disableButtonsControls
                        responsive={responsive}
                        items={items}
                        autoPlay
                    /> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className='flexy'>
                        <iframe className='youtube-frame' frameborder="0" allowfullscreen="true" src={`https://www.youtube.com/embed/kRdNclzrYCQ?showinfo=0`}></iframe>
                    </div>
                    <div className='flexy'>
                        <iframe className='youtube-frame' frameborder="0" allowfullscreen="true" src={`https://www.youtube.com/embed/zicYKAXDEWM?showinfo=0`}></iframe>
                    </div>
                    
                    <div className='flexy'>
                        <iframe className='youtube-frame' frameborder="0" allowfullscreen="true" src={`https://www.youtube.com/embed/qL2o5xN1TXA?showinfo=0`}></iframe>
                    </div>
                    <div className='flexy'>
                        <iframe className='youtube-frame' frameborder="0" allowfullscreen="true" src={`https://www.youtube.com/embed/_sXNashY1uE?showinfo=0`}></iframe>
                    </div>            
                    </div>
        
                {/* <iframe src="https://www.youtube.com/embed/uXWycyeTeCs" ></iframe> */}
            </div>
        </>
    )
}

export default Slider