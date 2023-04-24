import React from 'react'
import { Link, useLocation } from "react-router-dom";
import $ from 'jquery'
import { useState } from 'react';

const Aside = () => {
    const location = useLocation()
    // console.log(location.pathname);





    
    return (
        <>
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">

                    <li className='nav-item' >

                        <Link className={`nav-link ${location.pathname == "/dashboard" && 'active'}  collapsed `} to="/dashboard" >

                            <i className="bi bi-people "></i>
                            <span className=''>Users</span>
                        </Link>
                    </li>
                    {/* <!-- End Dashboard Nav --> */}

                    <li className='nav-item'>
                        <a className={`nav-link ${location.pathname == "/fastparity" && 'active'|| location.pathname == "/minessweeper" && 'active' || location.pathname == "/crash" && 'active' || location.pathname == "/allGames" && 'active'}   collapsed `} data-bs-target="#components-nav" data-bs-toggle="collapse" href="/" >
                            <i className="bi bi-controller"></i><span>Games</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav" >
                            <li>
                                <Link to="/allGames" className={`nav-link ${location.pathname == "/allGames" && 'active'}  collapsed `}>
                                <i className="bi bi-circle"></i><span>All-Games</span>
                                </Link>
                                <Link to="/fastparity" className={`nav-link ${location.pathname == "/fastparity" && 'active'}  collapsed `}>
                                    <i className="bi bi-circle"></i><span>Fast-parity</span>
                                </Link>
                                <Link to='/minessweeper' className={` nav-link ${location.pathname == "/minessweeper" && 'active'}  collapsed `} >
                                    <i className="bi bi-circle"></i><span>Mines-Sweeper</span>
                                </Link>
                                <Link to='/crash' className={` nav-link ${location.pathname == "/crash" && 'active'}  collapsed `} >
                                    <i className="bi bi-circle"></i><span>Crash</span>
                                </Link>

                            </li>


                        </ul>
                    </li>
                    {/* <!-- End Components Nav --> */}

                    {/* <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="/recharge">
                            <i className="bi bi-journal-text"></i><span>Recharges</span>
                            {/* <i className="bi bi-chevron-down ms-auto"></i> */}
                    {/* </a> */}
                    {/* <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to='/forms-elements'>
                                    <i className="bi bi-circle " data-bs-target="#sidebar"></i><span>Form Elements</span>
                                </Link>
                            </li>

                        </ul> */}
                    {/* </li> */}
                    <li className="nav-item">
                        <Link to="/recharge" className={`  nav-link ${location.pathname == "/recharge" && 'active'}  collapsed `}>
                            <i className="bi bi-currency-rupee"></i>
                            <span>Recharge</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/upidetail" className={`  nav-link ${location.pathname == "/upidetail" && 'active'}  collapsed `}>
                            <i className="bi bi-credit-card-2-front"></i>
                            <span>Upi-Details</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/taskreword" className={`  nav-link  ${location.pathname == "/taskreword" && 'active'} ${location.pathname == "/addtask" && 'active'} collapsed `}>
                            <i className="bi bi-trophy"></i>
                            <span>Task Reword</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/withdraw" className={` nav-link  ${location.pathname == "/withdraw" && 'active'}  collapsed `}>
                            <i className="bi bi-layer-backward"></i>
                            <span>Withdraw</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Profile" className={`  nav-link ${location.pathname == "/Profile" && 'active'}  collapsed `}>
                            <i className="bi bi-person"></i>
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/setting" className={`  nav-link ${location.pathname == "/setting" && 'active'}  collapsed `}>
                            <i className="bi bi-person"></i>
                            <span>Setting</span>
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/Profile" className={`  nav-link ${location.pathname == "/Profile" && 'active'}  collapsed `}>
                            <i className="bi bi-person"></i>
                            <span>Profile</span>
                        </Link>
                    </li> */}
                    {/* <!-- End Forms Nav --> */}

                    {/* <li className="nav-item">
                        <a   className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="/">
                            <i className="bi bi-layout-text-window-reverse"></i><span>Tables</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/GeneralTable">
                                    <i className="bi bi-circle"></i><span>General Table</span>
                                </Link>
                            </li>

                        </ul>
                    </li> */}
                    {/* <!-- End Tables Nav --> */}

                    {/* <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="/">
                            <i className="bi bi-bar-chart"></i><span>Charts</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="charts-nav" className="nav-content collapse     " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/Chart">
                                    <i className="bi bi-circle"></i><span>Chart.js</span>
                                </Link>
                            </li>

                        </ul>
                    </li> */}
                    {/* <!-- End Charts Nav --> */}

                    {/* <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="/">
                            <i className="bi bi-gem"></i><span>Icons</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/Icons">
                                    <i className="bi bi-circle"></i><span>Icons</span>
                                </Link>
                            </li>

                        </ul>
                    </li> */}
                    {/* <!-- End Icons Nav --> */}
                    {/* <li className="nav-item">
                        <Link to="/Profile" className={`  nav-link ${location.pathname == "/Profile" && 'active'}  collapsed `}>
                            <i className="bi bi-person"></i>
                            <span>Profile</span>
                        </Link>
                    </li> */}
                    {/* <!-- End Profile Page Nav --> */}

                    {/* <li className="nav-item">
                        <Link className="nav-link collapsed" to="/Faq">
                            <i className="bi bi-question-circle"></i>
                            <span>F.A.Q</span>
                        </Link>
                    </li> */}
                    {/* <!-- End F.A.Q Page Nav --> */}

                    {/* <li className="nav-item">
                        <Link className="nav-link collapsed" to="/Contact">
                            <i className="bi bi-envelope"></i>
                            <span>Contact</span>
                        </Link>
                    </li> */}
                    {/* <!-- End Contact Page Nav --> */}

                    {/* <li className="nav-item">
                        <Link className="nav-link collapsed" to="/Register">
                            <i className="bi bi-card-list"></i>
                            <span>Register</span>
                        </Link>
                    </li> */}
                    {/* <!-- End Register Page Nav --> */}

                    {/* <li className="nav-item">
                        <Link className="nav-link collapsed" to="/Login">
                            <i className="bi bi-box-arrow-in-right"></i>
                            <span>Login</span>
                        </Link>
                    </li> */}
                    {/* <!-- End Login Page Nav --> */}
                    {/* 
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/Error">
                            <i className="bi bi-dash-circle"></i>
                            <span>Error 404</span>
                        </Link>
                    </li> */}
                    {/* <!-- End Error 404 Page Nav --> */}

                    {/* <li className="nav-item">
                        <Link className="nav-link collapsed" to="/Blank">
                            <i className="bi bi-file-earmark"></i>
                            <span>Blank</span>
                        </Link>
                    </li> */}
                    {/* <!-- End Blank Page Nav --> */}

                </ul>
            </aside>

            {/* <!-- End Sidebar--> */}
        </>
    )
}

export default Aside
