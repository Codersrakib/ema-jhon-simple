import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props)
    const {img,name,seller,price,stock,key} = props.productData;
    return (
        <div className='product'>
            <div className='img'>
                {
                <img  src={img} alt="" />
                }
            </div>
            <div className='product-details'>
            <h4 className='product-name'><Link to={`/product/${key}`}>{name}</Link></h4>
                <p><small>by : {seller}</small></p>
                <p>Price : $ {price}</p>
                <p>Only {stock} left in stock - Order soon</p>
                {
                    props.showAddTo &&
                        <div onClick={() => props.AddToCartBtn(props.productData)} className="cart-btn"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</div>
                }  
            </div>
        </div>
    );
};

export default Product;