import React from 'react';

const Signup = () => {
    return (
        <>
            <button type="button" className="btn btn-outline-light ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className='fa fa-user-plus me-1'></span> Register
            </button>

            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className='btn btn-outline-dark w-100 mb-2'>
                                <span className='fa fa-google'></span> Sign up with Google
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInput"/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail2"
                                           aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with
                                        anyone else.
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword2"/>
                                </div>
                                <button type="submit" className="btn btn-outline-dark w-100">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;