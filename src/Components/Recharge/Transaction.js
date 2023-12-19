import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import { useEffect } from 'react'
import { useState } from 'react'
import { MDBDataTable } from 'mdbreact';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import $ from 'jquery'
import { toast } from 'react-toastify';




const Transaction = () => {
    const location = useLocation()
    const tr_id = location.state
    // console.log(tr_id);
    const [data, setData] = useState()
    const [selectedValue, setSelectedValue] = useState("");
    const navigate = useNavigate()

    //get user transaction Data
    const callAbout = async () => {
        try {
            const res = await fetch('https://fiewin-0083s-projects.vercel.app/admin/transaction', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    data: localStorage.getItem('Auth_token')

                },
                body: JSON.stringify({
                    tr_id
                })
            })
            console.log('response')
            const data = await res.json();
            console.log(data);
            setData(data)
            setSelectedValue(data.status)
            // console.log(data[0].category)
            // console.log(data.metaTitle)

            if (res.status === 200) {
                console.log('done');

            }
        } catch (e) {
            console.log(e);
            // navigate('/Login')
        }
    }

    useEffect(() => {
        callAbout();
    }, [])



    //return Payment Account data
    const payAccount = () => {
        if (data) {

            if (data.Payment_account === '') {
                return '-'
            } else {
                return data.Payment_account
            }
        } else {
            return 'Loading...'
        }
    }
    //retuen UPI details
    const transaction = () => {
        if (data) {

            if (data.u_transaction_id) {
                return data.u_transaction_id
            } else {
                return '-'
            }
        } else {
            return 'Loading...'
        }
    }
    //status data show and onchange send it ti backend
    const Status = () => {

        const change = async (e) => {
            const num = (e.target.value)
            setSelectedValue(num)
            const _id = data._id

            if (num === '3') {
                document.getElementById('select').disabled = true;

                try {
                    const res = await fetch('https://fiewin-0083s-projects.vercel.app/admin/status', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            data: localStorage.getItem('Auth_token')

                        },
                        body: JSON.stringify({
                            num, _id
                        })
                    })
                    console.log('response')
                    const data = await res.json();
                    // console.log(data.message);
                    if (data.message) {
                        toast.success('status change successfully', {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 2000,
                        });
                    }
                    navigate('/recharge')
                } catch (e) {
                    console.log(e);
                    // navigate('/Login')
                }
            }
            else {
                try {
                    const res = await fetch('https://fiewin-0083s-projects.vercel.app/admin/status', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            data: localStorage.getItem('Auth_token')

                        },
                        body: JSON.stringify({
                            num, _id
                        })
                    })
                    console.log('response')
                    const data = await res.json();
                    // console.log(data.message);
                    if (data.message) {
                        toast.success('status change successfully', {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 2000,
                        });
                    }
                    navigate('/recharge')

                } catch (e) {
                    console.log(e);
                    // navigate('/Login')
                }

            }

        }


        return <>
            <select onChange={change} value={selectedValue} className='box ' id='select'>
                <option value="0">pending</option>
                <option value="1">success</option>
                <option value="2">canceled</option>
                <option value="3" >failed</option>
                <option value="4">TimeOut</option>
            </select>
        </>
    }
    //return transaction screenshots photo
    const imageset = () => {
        console.log(data);
        if (data) {

            if (data.transcationScreenShot) {
                // console.log(data.transcationScreenShot);
                return <img src={data.transcationScreenShot} alt='img' />
            } else {
                return '-'
            }
        } else {
            return 'Loading...'
        }
    }


    //table label
    const label = () => {
        return <div className='text-center'><h4>Loading......</h4></div>
    }

    return (
        <>
            <Header />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1><span style={{ marginRight: '-2px' }}><i className="bi bi-send"></i></span> Transaction</h1>
                    <div style={{ opacity: 0.8, color: '#012970', marginTop: '7px' }}>
                        <Link to='/dashboard' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-people"></i></span><span> Users  |  </span></b></Link>
                        <Link to='/recharge' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-currency-rupee"></i></span><span> Recharge  |  </span></b></Link>
                        <span style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-send"></i></span><span> Transaction    </span></b></span>
                    </div>
                </div>
                {/* DataTable */}
                {/* <section className="section dashboard mt-4">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">


                                        <div className="card-body">
                                            <h4 className="card-title">{`Transactionid : ${tr_id}`}</h4>
                                            <MDBDataTable
                                                striped
                                                bordered
                                                small

                                                data={tableData}
                                                noRecordsFoundLabel={label()}

                                            />


                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>



                    </div>
                </section> */}
                <section className="section dashboard mt-4">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">


                                        <div className="card-body">
                                            <h4 className="card-title">{`Transactionid : ${tr_id}`}</h4>

                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">TransactionScreenShot</th>
                                                        <th scope="col">Payment Account</th>
                                                        <th scope="col">Upi</th>
                                                        <th scope="col">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{imageset()}</td>
                                                        <td>{payAccount()}</td>
                                                        <td>{transaction()}</td>
                                                        <td>{Status()}</td>
                                                    </tr>
                                                </tbody>
                                            </table>


                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>



                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default Transaction
