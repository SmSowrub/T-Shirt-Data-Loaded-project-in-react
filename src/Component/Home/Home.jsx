import React, { useState } from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from "react-router-dom";
import './Home.css'
import T_Shart from '../T_Shart/T_Shart';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const LoadData = useLoaderData();
    const [cart, setCart] = useState([]);

    const handelAddToCart = (product) => {
        const NotAnotherAdded = cart.find(pd => pd._id === product._id)
        if (NotAnotherAdded) {
            toast("T-Shirt all ready added!");
        }
        else {
            const AddCart = [...cart, product];
            setCart(AddCart);
        }
    }

    const handelRemoveToCart = (id) => {
        const removeToCart = cart.filter(dlt => dlt._id !== id)
        setCart(removeToCart)
    }
    console.log(cart);
    return (
        <div className='ParentDiv'>

            <div className="cartItem">
                {
                    LoadData.map(carts => <T_Shart handelAddToCart={handelAddToCart} key={carts._id} carts={carts}></T_Shart>)
                }
            </div>
            <div className="cartList">
                <Cart key={cart._id} handelRemoveToCart={handelRemoveToCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;