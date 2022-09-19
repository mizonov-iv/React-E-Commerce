import React from 'react';
import {DATA} from "../Data";
import {Link} from 'react-router-dom'

const Product = () => {

    const cardItem = (item) => {
        return (
            <div className="card my-2 py-2" key={item.id} style={{width: '20rem'}}>
                <img src={item.img} className="card-img-top p-2" alt={item.title}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="lead">${item.price}</p>
                        <Link to={`/product/${item.id}`} className="btn btn-outline-dark w-100">Buy Now</Link>
                    </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className="row mt-3">
                <div className="col-12">
                    <h1 className='text-center'>Product</h1>
                    <hr/>
                </div>
            </div>
            <div className="row justify-content-around">
                {DATA.map(cardItem)}
            </div>
        </div>
    );
};

export default Product;