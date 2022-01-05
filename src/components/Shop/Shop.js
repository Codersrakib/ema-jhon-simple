import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb, getDb, getStoredCart } from '../../utilities/fakedb';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';
const Shop = () => {
    const productTen = fakeData.slice(0,10);
    const [products, setProduct] = useState(productTen);
    const [cart, setCart] = useState([]);


    useEffect(()=>{
        //get cart from database
        const cartData = getStoredCart();
        const productKey = Object.keys(cartData);
        const counts = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.Quantity = cartData[key];
            return product;
        });
        setCart(counts);
    },[]);

    const handelAddToCart = (thisClicked) => {
        // console.log('i am clicked.', thisClicked);
        const toBeAddedKey = thisClicked.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.Quantity + 1;
            sameProduct.Quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else{
            thisClicked.Quantity = 1;
            newCart = [...cart, thisClicked];
        }
        setCart(newCart);
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
                <Cart cart={cart}>
                <Link to={'/review'}>
                    <button className='Cart-btn'> Order Review</button>
                </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;