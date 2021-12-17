import React,{useEffect,useState} from 'react';
import fakeData from '../../fakeData';
import { getStoredCart ,deleteFromDb } from '../../utilities/fakedb';
import Reviewitem from '../Reviewitem/Reviewitem';

const Review = () => {
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
    return (
        <div>
            <h1 style={{color:'yellow',textAlign:'center',background:'green'}}>Review : {count.length}</h1>
            {
                count.map(pd =>  <Reviewitem removeProduct={removeProduct} product={pd}></Reviewitem>)
            }
        </div>
    ); 
};

export default Review;