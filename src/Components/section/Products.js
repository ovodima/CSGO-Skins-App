import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'
import '../CSS/Product.css'
export class Products extends Component {

    static contextType = DataContext

    render() {
        const {products} = this.context
        return (
            <div id = 'products'>
                {
                   products.map(product => (
                    
                        <div className='card' key={product.id}>
                                <Link to = {`/product/${product.id}`}>
                                    <img src={product.src} alt='ak'/>
                                </Link>
                                <div  className='content'>
                                    <h3> 
                                        <Link to={`/product/${product.id}`}>
                                            {product.title}
                                        </Link>
                                    </h3>
                                    <span>${product.price}</span>
                                    <p>{product.description}</p>
                                    <button>Add to Card</button>
                                </div>
                            </div>
                   ))
                }
            </div>
        )
    }
}

export default Products
