import React from 'react'
import AnimatedNumber from "animated-number-react";

const Stats = () => {

    const formatValue = (value) => {
        return (`${value.toFixed(0)}`);
    }
    return (
        <>
            <div id="stats" className="section light-background my-5">


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
                        <div className="section-heading">Stats</div>
                        <div className="section-subheading">Some of my achievments</div>
                    </div>
                    <div class="text-gray-600 body-font">
                        <div class="container px-5 py-24 mx-auto">
                            <div class="flex flex-wrap -m-4 text-center">
                                <div class="p-4 sm:w-1/4 w-1/2">
                                    <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                        <AnimatedNumber value={100} duration={1000} formatValue={formatValue} />+
                                    </h2>
                                    <p class="leading-relaxed">Videos Uploaded</p>
                                </div>
                                <div class="p-4 sm:w-1/4 w-1/2">
                                    <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                        <AnimatedNumber value={5000000} duration={1000} formatValue={formatValue} />+
                                    </h2>
                                    <p class="leading-relaxed">Views</p>
                                </div>
                                <div class="p-4 sm:w-1/4 w-1/2">
                                    <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                        <AnimatedNumber value={500} duration={1000} formatValue={formatValue} />+
                                    </h2>
                                    <p class="leading-relaxed">Subscribers</p>
                                </div>
                                <div class="p-4 sm:w-1/4 w-1/2">
                                    <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                        <AnimatedNumber value={2300} duration={1000} formatValue={formatValue} />+
                                    </h2>
                                    <p class="leading-relaxed">Hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </>
    )
}

export default Stats