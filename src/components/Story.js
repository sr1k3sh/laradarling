import React, { Component } from 'react'
import Card from './Card'

export default class Story extends Component {
    render() {
        return (
            <div className="story">
                <div className="main-container">
                    <div className="container column justify--space-betwen">
                        <div className="story-left">
                            <div className="story-title">
                                <span className="text--uppercase slogan--big white-color">lara is </span>
                                <span className="text--uppercase slogan--big white-color font--bold">passionate </span>
                                <span className="text--uppercase slogan--big white-color">about helping you</span>
                                <span className="text--uppercase slogan--big white-color font--bold"> build your legacy</span>
                            </div>
                            <div>
                                <Card></Card>
                            </div>
                        </div>
                        <div className="story-right"></div>
                    </div>
                </div>
            </div>
        )
    }
}
