import React, { Component } from 'react'

export default class Navbar extends Component {
    componentDidMount(){
        window.addEventListener('scroll', _=>{
            var navbar = document.getElementById('nav')
            
            if (window.scrollY > 1) {
                navbar.style.background ="#757575d6"
                
            } else if (window.scrollY < 1) {
                navbar.style.background="none"
            }

        });


    }
    render() {
        return (
            <div id="nav" className="navbar main-container justify--space-around">
                <div className=" container row align--center justify--space-between">
                    <div className="logo">
                        <span>LARA</span><span className="font--bold">DARLING</span>
                    </div>
                    <div className="column align--flex-end justify--space-evenly" style={{width:'60%',height:'100%'}}>
                        <div className="menu-top text--uppercase row justify--space-between">
                            <span>media</span>
                            <span>blog</span>
                            <span>contact</span>
                        </div>
                        <div className="menu-bottom text--uppercase row justify--space-between">
                            <span>about</span>
                            <span>programs</span>
                            <span>speaking services</span>
                            <span>case studies</span>
                            <span>events & webinars</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
