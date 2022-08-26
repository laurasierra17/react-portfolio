import React from 'react';

export default function About() {
    return (
        <div className='row align-items-center'>
            <div className='col-lg-6'>
                <div className='about-text'>
                    <h2>I'm Laura, a Full-Stack Developer completing UC Berkeley's Coding Bootcamp and incoming Full-Stack Software Engineer at Impel.</h2>
                    <p>
                        I'm a recent graduate from the University of Central Florida as of May 2022, where I majored in Web
                        Design and earned my minor in Computer Science. I've spent the last 2 years working across front-end and
                        back-end development and UI/UX.
                    </p>
                    <p>
                        These days I spend my time researching, learning, and coding. Outside my focus zone, I'm watching Korean
                        dramas on Netflix, trying new restaurants, or playing with my cat, Lucy.
                    </p>
                </div>
                
            </div>
            <div className="col-lg-6">
                <div>
                    <img src="./images/laura-color.jpeg" alt="Laura at her university graduation" />
                </div>
            </div>
        </div>
    )
}