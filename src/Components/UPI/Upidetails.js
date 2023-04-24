import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify';


const Upidetails = () => {
    const navigate = useNavigate()
    const [data, setData] = useState()
    //click-on Add button
    const handleAddClick = () => {
        navigate('/addupi')
    }

    //get Data of Upi 
    const callData = async () => {
        try {

            const res = await fetch('admin/upidata', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    data: localStorage.getItem('Auth_token')


                },
                credentials: "include"

            })
            console.log('response')
            const data = await res.json();

            setData(data)

            if (res.status === 200) {
                console.log('done');

            }
        } catch (e) {
            console.log(e);
            // navigate('/Login')
        }
    }

    useEffect(() => {
        callData()
    }, [])

    // delete upi function
    const deleteFun = async (e) => {
        console.log('delete', e);
        const _id = e

        try {
            const res = await fetch('/admin/upidelete', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    data: localStorage.getItem('Auth_token')

                },
                body: JSON.stringify({
                    _id
                })
            })

            if (res.status === 200) {
                toast.success('Upi Delete Successfully ', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 800,
                    // onHidden: window.location.reload()
                });
                setTimeout(() => {
                    window.location.reload(false);
                }, 800);
            }
        } catch (e) {
            console.log(e);
        }


    }



    return (
        <>
            <Header />
            <main id="main" className="main">
                <div className="pagetitle">
                    <div className='row'>

                        <div className='col-6'>
                            <h1><span style={{ marginRight: '-2px' }}><i className="bi bi-credit-card-2-front"></i></span> Upi-Details</h1>
                            <div style={{ opacity: 0.8, color: '#012970', marginTop: '7px' }}>
                                <Link to='/dashboard' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-people"></i></span><span> Users  |  </span></b></Link><b><span> <i className="bi bi-credit-card-2-front"></i> Upi-Details</span></b>
                            </div>
                        </div>
                        <div className='col-6 text-end'>
                            <div>
                                <button onClick={handleAddClick} className='btn btn-primary '> Add </button>
                            </div>

                        </div>

                        {/* upi datatable */}
                        <section className="section dashboard mt-4">
                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="row">

                                        <div className="col-12">
                                            <div className="card recent-sales overflow-auto">


                                                <div className="card-body">
                                                    <h4 className="card-title">Upi-Details</h4>
                                                    <table className="table className='table table-bordered table-striped tableFont'">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Payment Method</th>
                                                                <th scope="col">UPI</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {data?.map((e, index) => {
                                                                var dataId = e._id
                                                                return (
                                                                    <>

                                                                        <tr key={index}>
                                                                            <td >{e.paymentMethod}</td>
                                                                            <td >{e.account} </td>
                                                                            <td >
                                                                                <Link to='/editupi' state={{ dataId }} ><button className=' btn-sm btn-primary'><i className="bi bi-pencil"></i></button></Link>
                                                                                <button className=' btn-sm btn-danger' style={{ marginLeft: '5px' }} onClick={() => { deleteFun(dataId) }}><i className="bi bi-trash"></i></button>
                                                                            </td>
                                                                        </tr>
                                                                    </>
                                                                )
                                                            })}
                                                        </tbody>
                                                    </table>

                                                </div>

                                            </div>
                                        </div>


                                    </div>
                                </div>



                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Upidetails
