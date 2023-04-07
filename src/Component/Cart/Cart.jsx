import React from 'react';
import './Cart.css'
const Cart = ({cart,handelRemoveToCart}) => {
    return (
        <div className=''>
            <h3>Total Item : {cart.length}</h3>
           <div>
           {
                cart.map(Tshirt =><p className='CartItem' key={Tshirt._id}>
                    <span>Name: {Tshirt.name}</span> <span>Price : {Tshirt.price}</span>
                    <button onClick={()=>handelRemoveToCart(Tshirt._id)}>Dlt</button>
                </p>)
            }
           </div>
        </div>
    );
};

export default Cart;