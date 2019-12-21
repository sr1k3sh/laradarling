import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="card-container column">
                <div className="card column">
                    <img src="./card.jpg" alt="card-img"></img>
                    <div class="title row">
                        <span className="font--bold" style={{marginRight:'10px'}}>John Doe</span><span className="text--uppercase">sample text</span>
                    </div>
                </div>
                <div className="card-content">
                    <p className="white-color ">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur adispsicing elit. Etiam non metus ligula. Maecenas ultrices semper aliquam. Donect ac mattis dui, mec aliquam nibh."</p>
                </div>
            </div>

        )
    }
}
