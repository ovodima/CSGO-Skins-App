import React, { Component } from 'react'
import Details from './section/Details'
import Products from './section/Products'
import { Route } from 'react-router-dom'

export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/market" component={Products} exact/>
                <Route path="/product/:id" component={Details}/>
            </section>
        )
    }
}

export default Section
