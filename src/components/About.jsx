import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className='container mt-3 py-4'>
            <div className="row">
                <div className="col-md-6 p-1">
                    <h1 className='fw-bold'>About Us</h1>
                    <p className='lead mb-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci alias aliquid atque aut blanditiis consequatur doloremque explicabo fuga fugiat harum iste itaque laudantium magnam maiores natus numquam perspiciatis, possimus, quam quasi quo reiciendis ullam. Ad alias aspernatur beatae cum cupiditate delectus deserunt dolor enim ex excepturi, harum hic, illo illum incidunt inventore ipsum modi necessitatibus nihil nobis nostrum perferendis placeat quae quia recusandae repellat rerum sapiente suscipit, tenetur totam ullam unde vel vero voluptatem. Alias architecto aspernatur assumenda consequuntur facere fugiat illum, in ipsa laboriosam, nam perspiciatis quo tenetur ullam. Consequuntur doloremque eligendi officiis possimus qui? Nulla veritatis, vitae?
                    </p>
                    <Link to={'/contact'} className='btn btn-outline-dark'>
                        Contacts Us
                    </Link>
                </div>
                <div className="col-md-6 p-4">
                    <img className='img-fluid' src="/img/about-us.png" alt="aboutus"/>
                </div>
            </div>
            
        </div>
    );
};

export default About;