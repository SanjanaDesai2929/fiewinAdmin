import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify';



const Addtask = () => {

    const location = useLocation()
    const _id = location.state


    const [task, setTask] = useState()
    const [description, setDescription] = useState()
    const [points, setPoints] = useState()
    const [status, setStatus] = useState()
    const [order, setOrder] = useState()
    const [type, setType] = useState()
    const [range, setRange] = useState()
    const [image, setImage] = useState()
    const [qrcodepreview, setQrcodepreview] = useState()
    const navigate = useNavigate()

    //get task data 
    const callAbout = async () => {
        try {
            const res = await fetch('https://fiewin-0083s-projects.vercel.app/admin/gettask', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
            data: localStorage.getItem('Auth_token')

                },
                body: JSON.stringify({
                    _id
                })

            })
            const data = await res.json()
            // console.log('data',data);
            data.map((e) => {
                console.log(e);
                setDescription(e.description)
                setOrder(e.order)
                setPoints(e.points)
                setQrcodepreview(e.image)
                setRange(e.range)
                setStatus(e.status)
                setTask(e.task)
                setType(e.type)
            })





        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        callAbout()
    }, [])



    //click event - send data to backend
    const handleClick = async () => {
        const formData = new FormData()

        formData.append("task", task)
        formData.append("description", description)
        formData.append("points", points)
        formData.append("status", status)
        formData.append("order", order)
        formData.append("type", type)
        formData.append("range", range)
        formData.append("image", image)
        formData.append("_id", _id)


        //api
        try {
            const res = await fetch('https://fiewin-0083s-projects.vercel.app/admin/editreword', {
                method: "POST",
                headers: {
                    // "Content-Type": "application/json"
            data: localStorage.getItem('Auth_token')

                },
                body: formData
            })
            console.log('response')
            const data = await res.json();
            console.log(data);

            if (res.status === 200) {
                console.log('done');
                toast.success('Edit Task Reword Successfully', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 1000,
                });
                setTimeout(() => {
                    navigate('/taskreword')
                }, 1300);
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
                            <h1><span style={{ marginRight: '-2px' }}><i className="bi bi-file-earmark-plus"></i>   </span> Edit Task</h1>

                            <div style={{ opacity: 0.8, color: '#012970', marginTop: '7px' }}>
                                <Link to='/dashboard' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-people"></i></span><span> Users  |  </span></b></Link>
                                <Link to='/taskreword' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-trophy"></i></span><span> Task Reword  |  </span></b></Link>
                                <span style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-file-earmark-plus"></i></span><span> Edit Task    </span></b></span>
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

                                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Edit Task Reword</p>

                                                                <form className="mx-1 mx-md-4">

                                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                                        <div className="form-outline flex-fill mb-0">
                                                                            <label className="form-label" for="form3Example1c">Task</label>
                                                                            <input type="text" id="form3Example1c" className="form-control" value={task} onChange={(e) => { setTask(e.target.value) }} />
                                                                        </div>
                                                                    </div>

                                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                                        <div className="form-outline flex-fill mb-0">
                                                                            <label className="form-label" for="form3Example3c">Description </label>
                                                                            <textarea type="text" id="form3Example3c" className="form-control" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                                        <div className="form-outline flex-fill mb-0">
                                                                            <label className="form-label" for="form3Example3c">Order </label>
                                                                            <input type="number" id="form3Example3c" className="form-control" value={order} onChange={(e) => { setOrder(e.target.value) }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                                        <div className="form-outline flex-fill mb-0">
                                                                            <label className="form-label" for="form3Example3c">points </label>
                                                                            <input type="number" id="form3Example3c" className="form-control" value={points} onChange={(e) => { setPoints(e.target.value) }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                                        <div className="form-outline flex-fill mb-0">
                                                                            <label className="form-label" for="form3Example3c">range </label>
                                                                            <input type="number" id="form3Example3c" className="form-control" value={range} onChange={(e) => { setRange(e.target.value) }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                                        <div className="form-outline flex-fill mb-0">
                                                                            <label className="form-label" for="form3Example3c">type </label>
                                                                            <input type="text" id="form3Example3c" className="form-control" value={type} onChange={(e) => { setType(e.target.value) }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                                        <div className="form-outline flex-fill mb-0">
                                                                            <label className="form-label" for="form3Example3c">status </label>
                                                                            <select name="cars" id="cars" className="form-control" value={status} onChange={(e) => { setStatus(e.target.value) }}>
                                                                                <option value="0">Start</option>
                                                                                <option value="1">Processing</option>
                                                                                <option value="2">Complete</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                                        <div className="form-outline flex-fill mb-0">
                                                                            <label className="form-label" for="form3Example3c">Image </label>
                                                                            <input type="file" id="form3Example4c" className="form-control" onChange={(e) => {
                                                                                const selectedFile = e.target.files[0];
                                                                                setImage(selectedFile);
                                                                                if (selectedFile) {
                                                                                    const previewUrl = URL.createObjectURL(selectedFile);
                                                                                    setQrcodepreview(previewUrl);
                                                                                }
                                                                            }} />
                                                                            {qrcodepreview && (
                                                                                <img
                                                                                    src={qrcodepreview}
                                                                                    alt="Preview of selectedimage"
                                                                                    style={{ maxWidth: '100%', marginTop: '1rem' }}
                                                                                />
                                                                            )}
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

export default Addtask
