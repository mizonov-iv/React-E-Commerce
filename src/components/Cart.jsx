import React from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {deleteItem} from "../redux/actions/index";
import {Link} from "react-router-dom";

const Cart = () => {

    const state = useSelector((state) => state.addItem)
    const dispatch = useDispatch()

    const closeCart = (item) => {
        dispatch(deleteItem(item))
    }

    const cartItems = (cartItem) => {
        return (
            <div className='px-3 my-5 rounded-3 border py-3' key={cartItem.id}>
                <div className="container">
                    <button onClick={() => closeCart(cartItem)} className='btn-close float-end' aria-label='Close'></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img className='img-fluid w-75' src={cartItem.img} alt={cartItem.title}/>
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw-bold'>$ {cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const emptyCart = () => {
        return (
            <div className='px-4 my-5 rounded-3 py-3'>
                <div className="container">
                    <div className="row">
                        <h3 className='text-center fw-bold'>Your Cart is Empty</h3>
                    </div>

                </div>
            </div>
        )
    }

    const button = () => {
        return (
            <div className='container'>
                <div className="row">
                    <Link to='/chekout' className='btn btn-outline-dark mb-5 w-25 mx-auto'>
                        Proceed To Checkout
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    );
};

export default Cart;