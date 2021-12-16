import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';


const ProductDetails = (props) => {

    const {productkey} = useParams();
    // console.log(productkey)
    const product = fakeData.find(data => data.key === productkey);
    console.log(product);
    return (
        <div>
            <h1 style={{color:'green',textAlign:'center'}}>Product Details</h1>
            <Product showAddTo={'false'} productData={product}></Product>
            
        </div>
    );
};

export default ProductDetails;