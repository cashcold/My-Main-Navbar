import React, { Component } from 'react';
import './style.css'
import axios from 'axios'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showText: ''
         }
    }
   componentDidMount(){
    fetch('https://www.coingecko.com').then(res => res.json()).then(data => this.setState({
        showText: data
    }))
    console.log(this.state.showText)

    const ToggleBtn = ()=>{
        const btnNow = document.querySelector('.toggleIcon img')
        const navLinks = document.querySelector('.nav-links')
        btnNow.addEventListener('click',()=>{
            if(navLinks.style.display === 'none'){
                navLinks.style.display = 'block'
            }else{
                navLinks.style.display = 'none'
            }
        })
    }
    ToggleBtn()
   }
    render() { 
        return ( 
            <div className='mainNavbar '>
                <div className='main-nav'>
                   <header className='header'>
                       <div className='logo'>
                           <img src={require('../../images/logo.png')}/>
                           <span className='welcomeText'>PAYITFORWARD</span>
                       </div>
                       <div className='loginInfoWeb'>
                                <a href='' className='btn btn-success logInfo'>LOGIN</a>
                                <a href='' className='btn btn-warning logInfo'>REGISTER</a>
                            </div>
                        <div className='socailIcons'>
                            <i class="fab fa-facebook fa-3x"></i>
                            <i class="fab fa-twitter fa-3x"></i>
                            <i class="fab fa-skype fa-3x"></i>
                            <i class="fab fa-whatsapp fa-3x"></i>
                        </div>
                        <div className='toggleIcon'>
                               <img src={require('../../images/menu.png')}/>
                        </div>
                   </header>
                    <nav className='nav-links animate__animated animate__bounceInLeft animate__slower'>
                        <ul >
                            <li><a href=''>HOME</a></li>
                            <li><a href=''>ABOUT-US</a></li>
                            <li><a href=''>GET STARTED</a></li>
                            <li><a href=''>AFFILIATE</a></li>
                            <li><a href=''>FAQ</a></li>
                            <li><a href=''>SUPPORT</a></li>
                            <div className='loginInfo'>
                                <a href='' className='btn btn-success logInfo'>LOGIN</a>
                                <a href='' className='btn btn-warning logInfo'>REGISTER</a>
                            </div>
                        </ul>
                       
                    </nav>
                    <div className='showText'>
                        <marquee>
                            <p>This is what am talking about</p>
                            {this.state.showText}
                        </marquee>
                    </div>
                    {this.state.showText}
                </div>
            </div>
         );
    }
}
 
export default Navbar;