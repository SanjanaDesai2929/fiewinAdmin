import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReactSwitch from 'react-switch';
import { toast } from 'react-toastify';
import { useEffect } from 'react';


const AllGames = () => {

    const [data, setData] = useState()

    //status update
    const sendData = async (e, dataId) => {
        var status = e
        const res = await fetch('https://fiewin-0083s-projects.vercel.app/admin/gameStatus', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                data: localStorage.getItem('Auth_token')

            },
            body: JSON.stringify({
                status, dataId
            })
        })
        if (res.status === 200) {
            toast.success('Status Change Successfully', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 600,
            });
            getData()
        }
    }


    //get all games data 
    const getData = async () => {
        const res = await fetch('https://fiewin-0083s-projects.vercel.app/admin/allGame', {
            method: "GET",
            headers: {
             
                "Content-Type": "application/json",
                data: localStorage.getItem('Auth_token')


            },
            credentials: "include"
        })
        const datares = await res.json()
        setData(datares)
    }


    useEffect(() => {
        getData()
    }, [])



    return (
        <>
            <Header />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1><span><i className="bi bi-stack" style={{ marginRight: '5px' }}></i></span>All Games</h1>
                    <div style={{ opacity: 0.8, color: '#012970', marginTop: '4px' }}>

                        <Link to='/dashboard' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-people"></i></span><span> Users  |  </span></b></Link><b><span>  Games  | <span><i className="bi bi-stack"></i></span> All Games </span></b>
                    </div>
                </div>

                {/* table */}
                <section className="section dashboard mt-4">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">


                                        <div className="card-body">
                                            <h4 className="card-title">All Games</h4>
                                            <table className="table table-bordered table-striped tableFont">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Game Name</th>
                                                        <th scope="col">Logo</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col" className='text-center'>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {data && data.length ? data.map((e) => {


                                                        var statusData = (e) => {
                                                            console.log(e)
                                                            if (e.game_status === 'true') {
                                                                return 'true'
                                                            }
                                                        }
                                                        var dataId = e._id

                                                        return (
                                                            <>

                                                                <tr >
                                                                    <td >{e.game_name}</td>
                                                                    <td >

                                                                        {
                                                                            e.game_logo && (
                                                                                <img
                                                                                    src={e.game_logo}
                                                                                    alt="Preview of selectedimage"
                                                                                    style={{ maxWidth: '20%' }}
                                                                                    img-fluid />
                                                                            )}
                                                                    </td>
                                                                    <td>
                                                                        <ReactSwitch
                                                                            checked={statusData(e)}
                                                                            readOnly
                                                                            onChange={(e) => {
                                                                                //    console.log(e)
                                                                                if (e === true) {
                                                                                    console.log(e)
                                                                                    sendData(e, dataId)
                                                                                }
                                                                                if (e === false) {
                                                                                    sendData(e, dataId)
                                                                                }
                                                                            }}
                                                                        />
                                                                    </td>
                                                                    <td className='text-center'>
                                                                        <Link to='/editGame' state={{ dataId }} ><button className=' btn-sm btn-primary'><i className="bi bi-pencil"></i></button></Link>
                                                                    </td>




                                                                </tr>
                                                            </>
                                                        )
                                                    }) :
                                                        <tr>
                                                            <td colSpan='4'>

                                                                <div class="text-center w-100" colspan="2">
                                                                    <div class="spinner-border" role="status">
                                                                        <span class="sr-only">Loading...</span>
                                                                    </div>
                                                                </div>
                                                            </td>

                                                        </tr>
                                                    }
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

export default AllGames