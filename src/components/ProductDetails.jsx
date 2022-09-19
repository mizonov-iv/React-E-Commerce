import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {DATA} from "../Data";
import {useDispatch} from "react-redux";
import {addItem, deleteItem} from "../redux/actions/index";

const ProductDetails = () => {

    const [cartBtn, setCartBtn] = useState('Add to Cart')

    const productId = useParams()
    const productDetail = DATA.filter(x => x.id == productId.id)
    const product = productDetail[0]
    console.log(product)

    const dispatch = useDispatch()
    const addToCart = () => {
        if(cartBtn === 'Add to Cart') {
            dispatch(addItem(product))
            setCartBtn('Remove from Cart')
        } else {
            dispatch(deleteItem(product))
            setCartBtn('Add to Cart')
        }
    }

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center product">
                    <img src={product.img} alt={product.title}/>
                </div>
                <div className="col-md-6">
                    <h1 className='fw-bold'>{product.title}</h1>
                    <hr/>
                    <h2>$ {product.price}</h2>
                    <p>{product.descr}</p>
                    <button onClick={() => addToCart(product)} className='btn btn-outline-dark w-100'>{cartBtn}</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;