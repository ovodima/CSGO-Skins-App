import React, { Component } from 'react'
import Details from './section/Details'
import Products from './section/Products'
import { Route } from 'react-router-dom'
import Cart from './section/Cart'


export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/market" component={Products} exact/>
                <Route path="/product/:id" component={Details}/>
                <Route path="/cart" component={Cart}/>
            </section>
        )
    }
}

export default Section
