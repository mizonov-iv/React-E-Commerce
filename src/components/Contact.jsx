import React from 'react';

const Contact = () => {
    return (
        <div class='container mt-3 p-4'>
            <div className="row">
                <div className="col-12">
                    <h1>Have some questions?</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center">
                        <div class='w-50'>
                            <img className='img-fluid' src="/img/email.png" alt="email"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleForm" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="exampleForm"
                                       placeholder="Brendan Eich"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                       placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type='submit' class='btn btn-outline-dark w-100'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;