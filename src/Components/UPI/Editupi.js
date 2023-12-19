import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify';


const Editupi = () => {

    const [type, setType] = useState()
    const [upi, setUpi] = useState()
    const [qrcode, setQrcode] = useState("")
    const [qrcodepreview, setQrcodepreview] = useState()

    const location = useLocation()
    const dataid = location.state
    console.log(dataid);
    const navigate = useNavigate()

    //get upi data 
    const callData = async () => {
        try {
            const res = await fetch('admin/userupidata', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    data: localStorage.getItem('Auth_token')

                },
                body: JSON.stringify({
                    dataid
                })

            })
            const datares = await res.json();
            console.log(datares);
            datares.map((e) => {
                setType(e.paymentMethod)
                setUpi(e.account)
                console.log(e.qrcode);
                setQrcodepreview(e.qrcode)
            })
            if (res.status === 200) {
                console.log('done');
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        callData()
    }, [])

    //click event send data to backend
    const handleClick = async () => {

        if (!type || !upi || !upi) {
            toast.error('Please Fill The All Required Filled ', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
            });
        } else {


            const formData = new FormData()
            formData.append("dataid", dataid)
            formData.append("type", type)
            formData.append("upi", upi)
            formData.append("qrcode", qrcode)

            try {
                const res = await fetch('admin/upidataupdate', {
                    method: "POST",
                    headers: {
                        // "Content-Type": "application/json"
                        data: localStorage.getItem('Auth_token')

                    },
                    body: formData

                })
                const datares = await res.json();
                if (res.status === 200) {
                    console.log('done');
                    toast.success('Upi Data Update Successfully', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 1000,
                    });
                    setTimeout(() => {
                        navigate('/upidetail')
                    }, 1000);

                }
            } catch (e) {
                console.log(e);
            }
        }


    }

    return (
        <>
            <Header />
            <main id="main" className="main">

                <div className="pagetitle">
                    <div className='row'>

                        <div className='col-6'>
                            <h1><span style={{ marginRight: '-2px' }}><i className="bi bi-database-add"></i></span> Add Upi</h1>

                            <div style={{ opacity: 0.8, color: '#012970', marginTop: '7px' }}>
                                <Link to='/dashboard' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-people"></i></span><span> Users  |  </span></b></Link>
                                <Link to='/upidetail    ' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-credit-card-2-front"></i></span><span> Upi-Details  |  </span></b></Link>
                                <span style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-database-add"></i></span><span> Add Upi    </span></b></span>
                            </div>
                        </div>
                    </div>
                    <section className="section dashboard mt-4">
                        <div className="row">

                            <div className="col-lg-12">
                                <div className="row">

                                    <div className="container h-100">
                                        <div className="row d-flex justify-content-center align-items-center h-100">
                                            <div className="col-lg-12 col-xl-11">
                                                <div className="card text-black" >
                                                    <div className="card-body p-md-5">
                                                        <div className="row justify-content-center">
                                                            <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">

                                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Edit Upi Details</p>

                                                                <form className="mx-1 mx-md-4">

                                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                                        <div className="form-outline flex-fill mb-0">
                                                                            <label className="form-label" for="form3Example1c">Payment Method</label>
                                                                            <input type="text" id="form3Example1c" className="form-control" value={type} onChange={(e) => { setType(e.target.value) }} />
                                                                        </div>
                                                                    </div>

                                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                                        <div className="form-outline flex-fill mb-0">
                                                                            <label className="form-label" for="form3Example3c">Upi </label>
                                                                            <input type="email" id="form3Example3c" className="form-control" value={upi} onChange={(e) => { setUpi(e.target.value) }} />
                                                                        </div>
                                                                    </div>

                                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                                        <div className="form-outline flex-fill mb-0">
                                                                            <label className="form-label" for="form3Example4c">QR Code</label>
                                                                            <input type="file" id="form3Example4c" className="form-control" onChange={(e) => {
                                                                                const selectedFile = e.target.files[0];
                                                                                // console.log(selectedFile, "hello")
                                                                                setQrcode(selectedFile);
                                                                                if (selectedFile) {
                                                                                    const previewUrl = URL.createObjectURL(selectedFile);
                                                                                    setQrcodepreview(previewUrl)
                                                                                        ;
                                                                                }
                                                                            }} />
                                                                            <img src={qrcodepreview} className='img-fluid' />
                                                                        </div>
                                                                    </div>



                                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                                        <button type="button" className="btn btn-primary btn-lg" onClick={handleClick}>Edit</button>
                                                                    </div>

                                                                </form>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>



                        </div>
                    </section>

                </div>

            </main>
            <Footer />
        </>
    )
}

export default Editupi
