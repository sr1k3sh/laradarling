import React, { Component } from 'react'
import Card from './Card'

export default class Story extends Component {
    render() {
        return (
            <div className="story">
                <div className="main-container">
                    <div className="container row justify--space-betwen">
                        <div className="story-left">
                            <div className="story-title">
                                <span className="text--uppercase slogan--big white-color">lara is </span>
                                <span className="text--uppercase slogan--big white-color font--bold">passionate </span>
                                <span className="text--uppercase slogan--big white-color">about helping you</span>
                                <span className="text--uppercase slogan--big white-color font--bold"> build your legacy</span>
                            </div>
                            <div>
                                <Card></Card>
                                <Card></Card>
                                <Card></Card>

                            </div>
                        </div>
                        <div className="story-right">
                            <div className="story-title column text-align--right">
                                <span className="text--uppercase slogan--big white-color">success </span>
                                <span className="text--uppercase slogan--big white-color font--bold">stories </span>
                            </div>
                            <div className="story-right-thumbnail">
                                <img src="./card.jpg"></img>
                                <div class="title row">
                                    <span className="font--bold" style={{ marginRight: '10px' }}>John Doe</span><span className="text--uppercase">sample text</span>
                                </div>
                            </div>
                            <div>
                                <p>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
                                    <br></br><br></br>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                    <br></br><br></br>
                                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                    <br></br><br></br>
                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,
                                    "
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
