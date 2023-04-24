import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {

    const [data, setData] = useState()
    const [uname, setUname] = useState()
    const [wallet, setWallet] = useState()
    const [id, setId] = useState()
    const navigate = useNavigate()
    const username = localStorage.getItem('name')
    console.log(username);

    //get admin profile data
    const callAbout = async () => {

        try {
            const res = await fetch('admin/profile', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    data: localStorage.getItem('Auth_token')

                },
                body: JSON.stringify({
                    username
                })
            })

            const datares = await res.json();

            if (datares) {
                setData(datares)
                setUname(datares.username)
                setWallet(datares.wallet)
                setId(datares._id)
            }
            // console.log(datares);


            if (res.status === 200) {
                console.log('done');

            }
        } catch (e) {
            console.log(e);
            // navigate('/Login')
        }
    }


    useEffect(() => {
        callAbout()
    }, [])

    //onChange event set username
    const Change = (e) => {
        // console.log(e.target.value);
        setUname(e.target.value)
    }
    //onChange event set wallet
    const ChangeWallet = (e) => {
        // console.log(e.target.value);
        setWallet(e.target.value)
    }

    //click event - send data to backend
    const Click = async (e) => {
        e.preventDefault();
        if (!uname || !wallet) {
            toast.error('Please Fill The All Data', {
                position: toast.POSITION.TOP_CENTER
            });

        } else {

            try {
                const res = await fetch('admin/profileupdate', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        data: localStorage.getItem('Auth_token')

                    },
                    body: JSON.stringify({
                        uname, wallet, id
                    })
                })

                const data = await res;
                if (data.status === 200) {

                    toast.success('Profile Data Update Successfully', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 1000,
                    });

                    localStorage.removeItem('name')
                    localStorage.setItem('name', uname)
                    navigate('/dashboard')

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
                    <h1><span style={{ marginRight: '6px' }}><i className="bi bi-person-circle"></i></span>Profile</h1>
                    <div style={{ opacity: 0.8, color: '#012970', marginTop: '7px' }}>

                        <Link to='/dashboard' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-people"></i></span><span> Users  |  </span></b></Link><b><span><i className="bi bi-person-circle"></i></span><span>  Profile</span></b>
                    </div>
                </div>
                <section style={{ backgroundColor: '#eee' }}>
                    <div className="container py-5 ">
                        <div className='row'>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3 text-sm-end" style={{ marginTop: '6px' }}>
                                            <p className="mb-0" > Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            {/* <input type="text" id="form3Example1c" className="form-control" value={task} onChange={(e) => { setTask(e.target.value) }} /> */}

                                            <input type="text" id="form3Example1c" className="form-control" value={uname} onChange={Change}></input>
                                        </div>

                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3 text-sm-end" style={{ marginTop: '6px' }}>
                                            <p className="mb-0" >Wallet</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <input type="text" id="form3Example1c" className="form-control" value={wallet} onChange={ChangeWallet}></input>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0"></p>
                                        </div>
                                        <div className="col-sm-9 text-start">
                                            <button type="button" className="btn btn-primary" onClick={Click}
                                            >Submit</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* <div className="col-lg-8">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0" >Full Name</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input className='col-8' style={{ opacity: 0.8 }} value={uname} onChange={Change}></input>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Wallet</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input className='col-8' style={{ opacity: 0.8 }} value={wallet} onChange={ChangeWallet}></input>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0"></p>
                                            </div>
                                            <div className="col-sm-9">
                                                <button type="button" className="btn btn-primary" onClick={Click}
                                                >Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default Profile
