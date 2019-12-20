import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="banner-top main-container">
                    <div className="container row justify--space-between">
                        <div className="slogan column justify--center">
                            <span className="text--uppercase slogan--small white-color">your expertise powered by the right system can</span>
                            <span className="text--uppercase slogan--big font--bold secondary-color">change the world</span>
                            <div className="button-primary">
                                <span>start here</span>
                            </div>
                        </div>
                        <div className="banner-person">
                            <img src="https://rjonetworks.com/wp-content/uploads/revslider/dream-theme-the7-fancy-title-business/rev-person-img.png"></img>
                        </div>
                        <div className="banner-testimonial column justify--center">
                            <img src="./logo.png" alt="logo"></img>
                            <div className="testimonial">
                                <span className="text--uppercase white-color">i help authors, speaker, coaches and experts </span><span className="text--uppercase secondary-color">build your legacy</span>
                            </div>
                            <div className="testimonial-paragraph">
                                <p className="paragraph--bold text-align--right">
                                    You can see consistent growth and profit by creating you offer, designing your lunch strategy growing and scaling your business  and establishing powerful connections.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offer-section main-container">
                    <div className="container row justify--space-between">
                        <div className="offer-left column">
                            <div>
                                <span className="text--uppercase slogan--big font--light">build your</span><span className="text--uppercase slogan--big font--bold"> legacy</span>

                            </div>
                            <p className="paragraph--bold">
                                We grew an exper business, and e-commerce business, and a digital agency to produce over $1Million in just 12 months. Download the exact word-for-word pages, ads, emails and scripts we used to do this.
                            </p>

                        </div>
                        <div className="offer-right column justify--center">
                            <span className="text--uppercase text-align--center slogan--small" style={{lineHeight:0}}>limited</span>
                            <span className="text--uppercase text-align--center slogan--small font--bold">availability</span>
                            <div className="button-secondary"><span>apply now</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
