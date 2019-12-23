import React, { Component } from 'react'
import Card from './Card'

export default class Story extends Component {
    render() {
        return (
            <div className="story">
                <div className="background-container row justify--space-betwen">
                    <div className="clip clippath1">
                        <div className="story-left">
                            <div className="story-title">
                                <span className="text--uppercase slogan--big white-color">lara is <span className="text--uppercase slogan--big white-color font--bold"> passionate </span></span>
                                <span className="text--uppercase slogan--big white-color">about helping you<span className="text--uppercase slogan--big white-color font--bold"> build your legacy</span> </span>
                                
                            </div>
                            <div className="card-items">
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>

                            </div>
                        </div>
                    </div>
                    <div className="clip clippath2">
                        <div className="story-right">
                            <div className="story-title column text-align--right">
                                <span className="text--uppercase slogan--big white-color">success </span>
                                <span className="text--uppercase slogan--big white-color font--bold">stories </span>
                            </div>
                            <div className="story-right-thumbnail">
                                <img src="./card.jpg"></img>
                                <div class="title row">
                                    <span className="font--bold white-color" style={{ marginRight: '10px' }}>John Doe</span><span className="text--uppercase white-color">sample text</span>
                                </div>
                            </div>
                            <div className="story-paragraph">
                                <p>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                    <br></br><br></br>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                                    <br></br><br></br>
                                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                    <br></br><br></br>
                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer 
                                    "
                                </p>
                            </div>
                            <div>
                                <span className="text--uppercase slogan--big primary-color">view more</span>
                                <div className="button-secondary"><span>success stories</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="main-container">
                    <div className="container row justify--space-betwen">
                       
                        
                    </div>
                </div> */}
            </div>
        )
    }
}
