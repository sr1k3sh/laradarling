import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="card column">
                <img src="./card.jpg"></img>
                <div class="title row">
                    <span className="font--bold" style={{marginRight:'10px'}}>John Doe</span><span className="text--uppercase">sample text</span>
                </div>
            </div>
        )
    }
}
