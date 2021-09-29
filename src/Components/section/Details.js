import React, { Component } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'
import '../CSS/Details.css'



export class Details extends Component {

    static contextType = DataContext
    state = {
        product: [],
    }

    getProduct = () => {
        if(this.props.match.params.id) {
            const res = this.context.products
            const data = res.filter(item => {
                return item.id === this.props.match.params.id
            })
            this.setState({product: data})
        }  
    }

    componentDidMount(){
        this.getProduct()
    }

    render() {
        const {product} = this.state
        return (
            <div>
                {
                    product.map(product => (
                        <div className='details' key={product.id}>
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
                                <Link to='/cart' className='cart'>
                                    Add to cart
                                </Link>
                            </div>
                         </div>
                    ))
                }
            </div>
        )
    }
}

export default Details
