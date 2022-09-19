import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";

const CartBtn = () => {

    const state = useSelector((state) => state.addItem)

    return (
        <>
            <Link className='btn btn-outline-light ms-2' to='/cart'>
                <span className='fa fa-shopping-cart me-1'></span> Cart ({state.length})
            </Link>
        </>
    );
};

export default CartBtn;