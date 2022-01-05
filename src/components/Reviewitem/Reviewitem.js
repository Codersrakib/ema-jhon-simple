import React from 'react';

const Reviewitem = (props) => {
    console.log(props)
    const { name,Quantity,key,price} = props.product;
    return (
        <div>
            <h1 className='product-name'>{name}</h1>
            <h3>Quantity: {Quantity}</h3>
            <p>${price}</p>
            <div onClick={() => props.removeProduct(key)} className='cart-btn'>Remove</div>
        </div>
    );
};

export default Reviewitem;