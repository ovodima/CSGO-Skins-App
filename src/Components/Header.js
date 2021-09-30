import React, { Component } from 'react'
import Menu from './img/bars-solid.svg'
import  Close from './img/times-solid.svg'
import CartIcon from './img/steam-brands.svg'
import ShopIcon from './img/shopping-cart-solid.svg'
import { Link } from 'react-router-dom'
import './CSS/Header.css'
import { DataContext } from './Context'





export class Header extends Component {

    static contextType = DataContext

    state = {
        toggle: false
    }

    menuToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        const {toggle} =  this.state
        const {cart} = this.context
        return (
            <header>
                <div className='menu' onClick={this.menuToggle}>
                    <img src={Menu} alt='' width='20'/>
                </div>
                <div className='logo'>
                     <h1>
                         <img src={CartIcon} alt='' width='25'/>
                        <Link to='/'>
                            CS-GO Skins
                        </Link>
                     </h1>   
                </div>

                <nav>
                    <ul className={toggle ? 'toggle' : ''}>
                        <li> <Link to='/'>Home</Link></li>
                        <li> <Link to='/market'>Market</Link></li>
                        <li> <Link to='/contact'>Contact</Link></li>
                        <li> <Link to='/about'>About</Link></li>
                        <li> <Link to='/support'>Support</Link></li>
                        <li> <Link to='/login'>Login/Register</Link></li>
                        <li className='close' onClick={this.menuToggle}> 
                            <img src={Close} alt='' width='20'/>
                        </li>
                    </ul>

                    <div className='nav-cart'>
                        <span>{cart.length}</span>
                        <Link to='/cart'>
                        <img src={ShopIcon} alt='' width='20'/>
                        </Link>  
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header
