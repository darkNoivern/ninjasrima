import React, { useState } from 'react'
import '../styles/timeline.css'

const Timeline = () => {

    const [active, setActive] = useState(true);

    return (
        <div id="timeline" className="qualification section-25 section px-5">

            <div className="mb-8">
                <h2 class="section-heading">Timeline</h2>
                <span class="section-subheading">My Personal Journey</span>
            </div>

            <div class="qualification__container container">

                <div class="qualification__section">

                    <div class={`qualification__content ${active && "qualification__active"}`} data-content id="education">
                        <div class="qualification__data">
                            <div class="text__right">
                                <h3 class="qualification__title">
                                    500 subscribers
                                </h3>
                                {/* <span class="qualification__subtitle">
                                    NIT Durgapur
                                </span> */}
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt mr-2"></i>
                                    Feb 2023
                                </div>
                            </div>
                            <div>
                                <span class="qualification__rounder"></span>
                                <span class="qualification__line"></span>
                            </div>
                        </div>

                        <div class="qualification__data">
                            <div></div>
                            <div>
                                <span class="qualification__rounder"></span>
                                <span class="qualification__line"></span>
                            </div>
                            <div>
                                <h3 class="qualification__title">
                                    Orange Cake went viral
                                </h3>
                                <span class="qualification__subtitle">
                                    80K+ views
                                </span>
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt mr-2"></i>
                                    Dec 18, 2022
                                </div>
                            </div>
                        </div>

                        <div class="qualification__data">
                            <div class="text__right">
                                <h3 class="qualification__title">
                                    Started my Youtube journey
                                </h3>
                                {/* <span class="qualification__subtitle">
                                    Hem Sheela Model School
                                </span> */}
                                <div class="qualification__calendar">
                                    <i class="uil uil-calendar-alt mr-2"></i>
                                    Aug 28, 2021
                                </div>
                            </div>
                            <div>
                                <span class="qualification__rounder"></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Timeline