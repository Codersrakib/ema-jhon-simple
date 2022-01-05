import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getStoredCart ,deleteFromDb, clearTheCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Reviewitem from '../Reviewitem/Reviewitem';
import happyimg from '../../images/giphy.gif';

const Review = (props) => {
    const [count,setCount] = useState([]);
    useEffect(()=>{
        //get cart from database
        const cartData =  getStoredCart();
        const productKey = Object.keys(cartData);
        const counts = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.Quantity = cartData[key];
            return product;
        });
        setCount(counts);
    },[]);
 
    
    const removeProduct = productKey => {
        // remove product from review cart
        const removePd = count.filter(pd => pd.key !== productKey);
        setCount(removePd);
        deleteFromDb(productKey);
    } 

    const [orderPlease , setOrderPlease] = useState(false);
    const handlePleaseOrderBtn = () => {
        setCount([]);
        setOrderPlease(true);
        clearTheCart();
    }
    let thankYou;
    if(orderPlease){
        thankYou = <img src={happyimg} alt="" />
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
            {
                count.map(pd =>  <Reviewitem removeProduct={removeProduct} product={pd}></Reviewitem>)
            }
            {
                thankYou // this is for showing image after clicked please order button.
            }
            </div>
            <div className="card-container">
                <Cart cart={count}>
                    <button onClick={handlePleaseOrderBtn} className='Cart-btn'>Please Order</button>
                </Cart>
            </div>
        </div>
    ); 
};

export default Review;