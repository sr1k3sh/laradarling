import React, { Component } from 'react'
import NextButton from './NextButton'

export default class About extends Component {
    render() {
        return (
            <div className="about main-container" >
                <div className="container row justify--space-between">
                    <div className="about-thumbnail column align--flex-end">
                        <div class="about-heading column">
                            <span className="text--uppercase slogan--big font--light white-color">about lara</span>
                            <span className="learn-more text--uppercase paragraph--bold text-align--right secondary-color">more about lara></span>
                        </div>
                        
                            <img className="image-thumbnail" src="https://pbs.twimg.com/media/EFyPmvYWwAAHj3j.jpg:large"></img>
                        <div className="click-me">
                            <NextButton></NextButton>
                        </div>                        
                    </div>
                    <div className="about-quotes">
                        <div style={{marginBottom:'30px'}}>
                            <span className="text--uppercase slogan--big font--light primary-color">saved from death, i choose to </span>
                            <span className="text--uppercase slogan--big font--bold primary-color">live my life with purpose</span>
                        </div>
                        <p className="paragraph--bold">
                            Lara is one of the Top 1% of the Top 1% of all Marketing and Experts in the world.He recently won an 8 Figure Club Award for producing over $10,000 Million  in revenue and 2 awards from Ram for achieving over $1 Million in revenue though 2 different business.<br></br><br></br>
                            Out of 60,000 users in the community,only 17 were awarded an 8 Figure Club Award and Lara was one of them.
                            <br></br><br></br>
                            Lara and her team of marketing and experts have generated well over $50 Million online for his clients, partnerships and his own funnels. Lara is passionate about Empowering Experts to Change the World.

                        </p>
                    </div>
                </div>
                
            </div>
        )
    }
}
