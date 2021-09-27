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
                    products.map(product => {
                        return (
                            <div className='card' key={product._id}>
                                <Link to = {`/product/${product._id}`}>
                                    <img src={product.src} alt='ak'/>
                                </Link>
                                <div  className='content'>
                                    <h3> 
                                        <Link to={`/product/${product._id}`}>
                                            {product.title}
                                        </Link>
                                    </h3>
                                    <span>${product.price}</span>
                                    <p>{product.description}</p>
                                    <button>Add to Card</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Products
