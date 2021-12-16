import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb, getDb } from '../../utilities/fakedb';
const Shop = () => {
    const productTen = fakeData.slice(0,10);
    const [products, setProduct] = useState(productTen);
    const [cart, setCart] = useState([]);
    const handelAddToCart = (thisClicked) => {
        console.log('i am clicked.', thisClicked);
        const newCartItem = [...cart,thisClicked];
        setCart(newCartItem);
       addToDb(thisClicked.key);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.key} showAddTo={'true'} AddToCartBtn={handelAddToCart} productData={product}></Product>)
                }
            </div> 
            <div className="card-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;