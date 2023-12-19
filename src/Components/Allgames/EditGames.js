import React, { useEffect } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify';


const EditGames = () => {

    const location = useLocation()
    const dataid = location.state.dataId

    const [image, setImage] = useState()
    const [imagePreview, setImagePreview] = useState()
    const [name, setName] = useState()

    const navigate = useNavigate()

    //get data
    const callData = async () => {
        try {
            const res = await fetch('https://fiewin-0083s-projects.vercel.app/admin/OneGame', {
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

            setName(datares.game_name)
            setImagePreview(datares.game_logo)
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


    //edit game details 
    const sendData = async () => {
        const formData = new FormData()
        formData.append("dataid", dataid)
        formData.append("image", image)
        formData.append("name", name)

        const res = await fetch('https://fiewin-0083s-projects.vercel.app/OneGameUpdate', {
            method: "POST",
            headers: {
                // "Content-Type": "application/json"
                data: localStorage.getItem('Auth_token')

            },
            body: formData

        })
        if (res.status === 200) {

            toast.success('Game Data Edit Successfully', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000,
            });
            setTimeout(() => {
                navigate('/allGames')
            }, 1000);
        }
    }



    return (
        <>
            <Header />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1><span><i className="bi bi-pencil-square" style={{ marginRight: '5px' }}></i></span>Edit Game</h1>
                    <div style={{ opacity: 0.8, color: '#012970', marginTop: '4px' }}>

                        <Link to='/dashboard' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-people"></i></span><span> Users  |  </span></b></Link><b><span cursor="pointer">  Games  | <span><i className="bi bi-pencil-square"></i></span> Edit Games </span></b>
                    </div>
                </div>
                {/* table data */}
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

                                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Edit Game Details</p>

                                                            <form className="mx-1 mx-md-4">

                                                                <div className="d-flex flex-row align-items-center mb-4">
                                                                    <div className="form-outline flex-fill mb-0">
                                                                        <label className="form-label" for="form3Example1c">Game Name</label>
                                                                        <input type="text" id="form3Example1c" className="form-control" value={name||"Loading..."} onChange={(e) => { setName(e.target.value) }} />
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex flex-row align-items-center mb-4">
                                                                    <div className="form-outline flex-fill mb-0">
                                                                        <label className="form-label" for="form3Example4c">Logo</label>
                                                                        <input type="file" id="form3Example4c" className="form-control" onChange={(e) => {
                                                                            const selectedFile = e.target.files[0];
                                                                            setImage(selectedFile);
                                                                            if (selectedFile) {
                                                                                const previewUrl = URL.createObjectURL(selectedFile);
                                                                                setImagePreview(previewUrl)
                                                                            }
                                                                        }} />
                                                                        <div className='text-center'>

                                                                            <img src={imagePreview} className='img-fluid mt-2' alt='Preview of Logo' />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                                    <button type="button" className="btn btn-primary btn-lg" onClick={sendData}>Edit</button>
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
            </main>
            <Footer />
        </>
    )
}

export default EditGames