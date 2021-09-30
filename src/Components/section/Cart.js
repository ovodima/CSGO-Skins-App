import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'
import '../CSS/Cart.css'
import '../CSS/Details.css'

export class Cart extends Component {

    static contextType = DataContext

    render() {
        const {cart, reduction, increase, removeProduct} = this.context
        if(cart.lenth === 0) {
           return <h2>Nothing Product.</h2>
        } else {
            return (
             
                <div>
                    {
                     cart.map(product => (
                            <div className='cart' key={product.id}>
                                <img src={product.src} alt=''/>
                                <div className='box'>
                                    <div className='row'>
                                        <h2>{product.title}</h2>
                                        <span>${product.price}</span>
                                     </div>
                                     <p className='type'>{
                                         product.type.map((type, index) => (
                                             <button key={index}>{type} </button>
                                         ))
                                    }</p>
                                     <p>{product.description}</p>
                                     <p>{product.content}</p>
                                    <div className='amout'>
                                        <button className='count' onClick={()=> reduction(product.id)}>-</button>
                                        <span>{product.count}</span>
                                        <button className='count' onClick={()=> increase(product.id)}>+</button>
                                    </div>
                                </div>
                                <div className='delete' onClick={() => removeProduct(product.id)}> X </div>
                             </div>
                        )) 
                    }
                    <div className='total'>
                        <Link to='/payment'> Payment </Link>
                        <h3>Total: 0</h3>
                    </div>
                </div>
                )
            }
        }
}

export default Cart
