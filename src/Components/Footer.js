import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Footer = () => {

    const [name, setName] = useState()
    const [value, setValue] = useState()

    // const style = {
    //     left: 0,
    //     bottom: 0,
    //     right: 0
    // }


    useEffect(() => {

        const getData = async () => {
            const res = await fetch('/admin/SettingData', {
                method: "GET",
                headers: {
                  
                
                    data: localStorage.getItem('Auth_token')


                },
                credentials: "include"
            })
            const data = await res.json()
            setName(data[1].web_config_name)
            setValue(data[1].web_config_value)

        }
        getData()
    })





    return (
        <>
            <footer id="footer" className="footer py-3">
                <div className="copyright">
                    {value}
                </div>

            </footer>
        </>
    )
}

export default Footer
