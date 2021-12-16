import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    // formatting number
    const formatNumber = num => {
        return num.toFixed(2);
    }
    const cart = props.cart;
    // total price using reduce..
    const totalPrice = cart.reduce((total, Product) => total + Product.price, 0);
    // total price using for loop..
    // let totalPrice = 0;
    // for(let i = 0; i < cart.length; i++){
    //      let product = cart[i];
    //      totalPrice = totalPrice + product.price;
    //      totalPrice.toFixed(2);
    // }

    // shipping cost
    let shippingCost = 0;
    if(totalPrice > 40){
        shippingCost = 0;
    }
    else if(totalPrice > 30){
        shippingCost = 6;
    }
    else if(totalPrice > 0){
        shippingCost = 12;
    }
    // tex amount
    let tex = totalPrice / 12;
    
    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <h6>Items Ordered : {cart.length}</h6>
            <h6>Shipping Cost : {shippingCost}</h6>
            <h6>Tex & vat (12%) : {formatNumber(tex)}</h6>
            <h6>Total Price : {formatNumber(totalPrice + tex + shippingCost)}</h6>
            <Link to={'/review'}>
                <button className='Cart-btn'> Order Review</button>
            </Link>
        </div>
    );
};

export default Cart;