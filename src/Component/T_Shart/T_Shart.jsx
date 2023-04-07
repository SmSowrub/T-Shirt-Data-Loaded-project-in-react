import React from 'react';
import './T_Shart.css'
const T_Shart = ({carts, handelAddToCart}) => {
    const {name, picture, id, price,gender}=carts;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: {price}</p>
            <p>GEnder : {gender}</p>
            <button onClick={()=>handelAddToCart(carts)} className='AddToCart'>Add To Cart</button>
        </div>
    );
};

export default T_Shart;