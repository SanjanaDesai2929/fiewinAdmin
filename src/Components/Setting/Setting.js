import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify';


const Setting = () => {

    const [image, setImage] = useState()
    const [imagePreview, setImagePreview] = useState()
    const [value, setValue] = useState()
    const [footer, setFooter] = useState()
    const [footerValue, setFooterValue] = useState()
    const [id, setId] = useState()






    useEffect(() => {
        //get data
        const getData = async () => {
            const res = await fetch('admin/SettingData', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    data: localStorage.getItem('Auth_token')


                },
                credentials: "include"

            })
            const datares = await res.json();
            setImagePreview(datares[0].web_config_value)
            setValue(datares[0].web_config_name)
            setFooter(datares[1].web_config_name)
            setFooterValue(datares[1].web_config_value)
            setId({ logoid: datares[0]._id, footerid: datares[1]._id })
        }
        getData()
    }, [])

    //save data             
    const saveData = async (e) => {

        const logoId = id.logoid
        const footerId = id.footerid

        const formData = new FormData()
        formData.append("value", value)
        formData.append("image", image)
        formData.append("footer", footer)
        formData.append("footerValue", footerValue)
        formData.append("logoId", logoId)
        formData.append("footerId", footerId)

        const res = await fetch('admin/updateSetting', {
            method: "POST",
            headers: {
                // "Content-Type": "application/json"
                data: localStorage.getItem('Auth_token')

            },
            body: formData
        })
        if (res.status === 200) {
            // alert('data save')
            toast.success('Upi Data Update Successfully', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 800,
            });
            setTimeout(() => {
                window.location.reload()
            }, 1000);
        }

    }




    return (
        <>
            <Header />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1><span style={{ marginRight: '-2px' }}><i className="bi bi-gear"></i></span> Setting</h1>
                    <div style={{ opacity: 0.8, color: '#012970', marginTop: '7px' }}>
                        <Link to='/dashboard' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-people"></i></span><span> Users  |  </span></b></Link><b><span> <i className="bi bi-gear"></i> Setting</span></b>

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
                                            <h4 className="card-title">settings</h4>

                                            <table className="table className='table table-striped table-bordered '">
                                                <tbody>

                                                    <tr>
                                                        <td className='col-4 text-center'>
                                                            <input type="text" className="form-control-plaintext text-center" id="staticEmail" value={value} style={{ fontSize: '20px' }}
                                                                onChange={(e) => { setValue(e.target.value) }}
                                                            ></input>
                                                        </td>
                                                        <td >
                                                            <input type="file" id="form3Example4c" className="form-control col-8" onChange={(e) => {
                                                                const selectedFile = e.target.files[0];
                                                                // console.log(selectedFile, "hello")
                                                                setImage(selectedFile);
                                                                if (selectedFile) {
                                                                    const previewUrl = URL.createObjectURL(selectedFile);
                                                                    setImagePreview(previewUrl)
                                                                        ;
                                                                }
                                                            }} />
                                                            {setImagePreview && (
                                                                <img className='mt-3'
                                                                    src={imagePreview}
                                                                    alt="Preview of selectedimage"
                                                                    style={{ maxWidth: '20%' }}
                                                                />
                                                            )}
                                                        </td>
                                                        {/* <td >
                                                            <button className=' btn-sm btn-primary' onClick={() => { saveData(id.logoid) }}>save</button>
                                                        </td> */}
                                                    </tr>
                                                    <tr>
                                                        <td className='col-3 text-center'>
                                                            <input type="text" className="form-control-plaintext text-center" id="staticEmail" value={footer} style={{ fontSize: '20px' }}
                                                                onChange={(e) => { setFooter(e.target.value) }}
                                                            ></input>
                                                        </td>
                                                        <td className='col-8' >  <input type="text" className="form-control-plaintext" id="staticEmail" value={footerValue}
                                                            onChange={(e) => { setFooterValue(e.target.value) }}
                                                        ></input></td>
                                                        {/* <td>
                                                            <button className=' btn-sm btn-primary' onClick={() => { saveData(id.footerid) }}>save</button>
                                                        </td> */}
                                                    </tr>
                                                    <tr>
                                                        <td className='col-12 text-center' colSpan='2' >

                                                            <button className=' btn btn-primary' onClick={() => { saveData() }}>save</button>
                                                        </td>
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

export default Setting
