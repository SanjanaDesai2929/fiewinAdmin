
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import $ from 'jquery'
import { toast } from 'react-toastify';


const Changepassword = () => {

    const name = localStorage.getItem('name')
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [newpassword, setNewPassword] = useState('');
    const [newshowPassword, setNewShowPassword] = useState(false);
    const [conpassword, setConPassword] = useState('');
    const [conshowPassword, setConShowPassword] = useState(false);
    const navigate = useNavigate()

    //onChange setPassword filled
    const passChange = (event) => {
        setPassword(event.target.value);
    };
    //toggle on Showpassword
    const passtoggleChange = (e) => {
        setShowPassword(!showPassword);
    };
    //setNewpassword on onChange event
    const newpassChange = (event) => {
        setNewPassword(event.target.value);
    };
    //toggle on Newpassword
    const newpasstoggleChange = (e) => {
        setNewShowPassword(!newshowPassword);
    };
    //setConpassword on onChange event
    const conpassChange = (event) => {
        setConPassword(event.target.value);
    };
    //toggle on Conpassword
    const conpasstoggleChange = (e) => {
        setConShowPassword(!conshowPassword);
    };


    //boxStyle
    const style = {
        borderRadius: 0,
        textAlign: 'center',
        padding: 8
    }



    //click event - send data backend
    const Click = async (e) => {
        e.preventDefault();
        if (!password || !newpassword || !conpassword) {
            toast.error('Please Fill up All Required Data', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
            });
        }
        else if (newpassword !== conpassword) {
            toast.error('new password and confirm password not same', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
            }); 
        }
        else {
            try {
                const res = await fetch('admin/changepassword', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        data: localStorage.getItem('Auth_token')

                    },
                    body: JSON.stringify({
                        password, newpassword, conpassword, name
                    })
                })

                const data = await res.json();
                if (res.status === 200) {
                    console.log('success');
                    toast.success('New Password Save Successfully', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 2000,
                    });
                    navigate('/dashboard')

                }
                if (res.status === 401) {
                    toast.error('Please Fill The All Required Filled', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 2000,
                    });

                }
                if (res.status === 400) {
                    toast.error('Old Password Not Match', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 2000,
                    });
                }

            } catch (e) {
                console.log(e);
                // navigate('/Login')
            }
        }
    }


    return (
        <>
            <Header />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1><span style={{ marginRight: '6px' }}>  <i className="bi bi-gear"></i></span>Changepassword</h1>
                    <div style={{ opacity: 0.8, color: '#012970', marginTop: '7px' }}>

                        <Link to='/dashboard' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-people"></i></span><span> Users  |  </span></b></Link><b><span> <i className="bi bi-gear"></i></span><span>  Changepassword</span></b>
                    </div>
                </div>
                {/* //password */}
                <section >
                    <div className="container py-5 h-100">
                        <div className="row d-flex align-items-center justify-content-center h-100">
                            <div className="col-md-8 col-lg-7 col-xl-6">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phoneimage" />
                            </div>
                            <div className="col-md-8 mt-md-3     col-lg-5 col-xl-5 offset-xl-1 col-11 ">
                                <form>

                                    <div className=" mb-4 row">
                                        <label className="" for="form1Example13" style={{ padding: 0 }}><span style={{ color: 'red' }}>*</span> Old Password</label>
                                        <input type={showPassword ? 'text' : 'password'} id="password" className="form-control form-control-lg col-lg-10 col-10" onChange={passChange} style={{ borderRadius: 0 }} />
                                        <div className='form-control form-control-lg col-2 col-lg-1' style={style} onClick={passtoggleChange}>{showPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}</div>
                                    </div>
                                    <div className=" mb-4 row">
                                        <label className="" for="form1Example13" style={{ padding: 0 }}><span style={{ color: 'red' }}>*</span> New Password</label>
                                        <input type={newshowPassword ? 'text' : 'password'} id="password" className="form-control form-control-lg col-lg-10 col-10" onChange={newpassChange} style={{ borderRadius: 0 }} />
                                        <div className='form-control form-control-lg col-2 col-lg-1' style={style} onClick={newpasstoggleChange}>{newshowPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}</div>
                                    </div>
                                    <div className=" mb-4 row">
                                        <label className="" for="form1Example13" style={{ padding: 0 }}><span style={{ color: 'red' }}>*</span> Confirm New Password</label>
                                        <input type={conshowPassword ? 'text' : 'password'} id="password" className="form-control form-control-lg col-lg-10 col-10" onChange={conpassChange} style={{ borderRadius: 0 }} />
                                        <div className='form-control form-control-lg col-2 col-lg-1' style={style} onClick={conpasstoggleChange}>{conshowPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}</div>
                                    </div>



                                    <button type="submit" className="btn btn-primary btn-lg btn-block  col-md-10 col-12 " onClick={Click}>Set New Password</button>


                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Changepassword
