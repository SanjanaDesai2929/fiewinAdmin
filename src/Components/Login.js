import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';



const Login = () => {



    const navigate = useNavigate();


    const [username, setName] = useState('');
    const [password, setPassword] = useState('');

    //send login data to backend and check
    const loginUser = async (e) => {
        e.preventDefault();
        if (username == '') {
            toast.error('Please Fill the All Details', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
            });
        } else {

            const res = await fetch('/admin/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username, password
                })
            })

            const data = await res.json();
            // console.log(data.tokens[0].token);
            console.log('data.message',res);

                if (res.status === 200) {
                    console.log('success');
                    toast.success('Login successful', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 1000,
                    });
                    localStorage.setItem('name', username)
                    localStorage.setItem('Auth_token', data.tokens[0].token)
                    navigate('/dashboard')
                }
                else {
                    // console.log('no data');
                    // alert('no data') 
                    toast.error('Invalid Login details', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 2000,
                    });
                }

        }

    }


    return (
        <>
            <div className='container-fluid '>
                <header id="header" className="header fixed-top d-flex align-items-center">

                    <div className="d-flex align-items-center justify-content-between">
                        <div className="logo d-flex align-items-center">
                            <span className=" d-lg-block"><h4>Fiewin Admin</h4></span>
                        </div>
                    </div>
                </header>
                <section className='mt-5'>
                    <div className="container-fluid h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                    className="img-fluid" alt="image1" />
                            </div>
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form>

                                    <div className="divider d-flex align-items-center my-4">
                                        <p className="text-center fw-bold mx-3 mb-0"><h3>Login </h3></p>
                                    </div>


                                    <div className="form-outline mb-4">
                                        <label className="form-label" for="form3Example3"><h5>User name</h5></label>
                                        <input type="text" id="form3Example3" className="form-control form-control-lg" style={{ marginTop: -'10px' }}
                                            placeholder="Enter a valid email address" value={username}
                                            onChange={(e) => { setName(e.target.value) }} required />
                                    </div>

                                    <div className="form-outline mb-3">
                                        <label className="form-label" for="form3Example4"><h5>Password</h5></label>
                                        <input type="password" id="form3Example4" className="form-control form-control-lg" style={{ marginTop: -'10px' }}
                                            placeholder="Enter password" value={password}
                                            onChange={(e) => { setPassword(e.target.value) }} required />
                                    </div>

                                    <div className="text-center text-lg-start mt-4 pt-2">
                                        <button type="button" className="btn btn-primary btn-lg" onClick={loginUser}
                                        >Login</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </section>


            </div>


        </>
    )
}

export default Login

