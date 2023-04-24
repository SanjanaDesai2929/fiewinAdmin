import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import { useEffect } from 'react'
import { useState } from 'react'
import { MDBDataTable } from 'mdbreact';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import $ from 'jquery'




const Rounddata = () => {


    const navigate = useNavigate();
    //get Id from another page
    const location = useLocation()
    const dataId = location.state




    //datatable of round data
    var TableDatatablesManaged = (function () {
        var initTable1 = function () {
            // var table = $("#dashboard-tbl");
            var table1 = $("#RoundData").DataTable({
                processing: true,
                serverSide: true,
                destroy: true,
                language: {
                    search: "Search: ",
                    searchPlaceholder: "Search...",
                },
                language: {
                    paginate: {
                        next: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
                        previous: '<i class="fa fa-chevron-left" aria-hidden="true"></i>'
                    }

                },
                ajax: {
                    url: `admin/RoundData?dataId=${dataId}`,
                    headers: {
                        data: localStorage.getItem('Auth_token')

                    },
                    type: "GET",
                    dataSrc: "data",

                },
                columns: [
                    {
                        data: 'sr',
                        sorting:false

                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.user) {
                                return '<span className="pointer-awe text-lightgreen " style="color:blue;cursor: pointer;" id="id_button" >' + data.user + '</span>'
                            }
                        }

                    },
                    {
                        data: 'target',

                    },
                    {
                        data: 'amount',

                    },
                    {
                        data: 'point',

                    },
                    {
                        data: null,
                        render: function (data) {
                            var a = Number(data.point)
                            var b = Number(data.amount)
                            var c = a - b
                            return c
                        }

                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.win_amount === '0') { return '<span className="badge badge-danger" style="font-size:unset">' + 'Lose' + '</span> ' }
                            else { return '<span className="badge badge-success" style="font-size:unset">' + 'Profit' + '</span> ' }
                        }

                    },
                    {
                        data: 'createdAt',

                    },
                    {
                        data: 'updatedAt',

                    },
                ],

                // select: {
                //   // style: "multi",
                //   selector: "td:first-child",
                // },
                order: [[1, "desc"]],
                Destroy: true,
            });


            $("#RoundData tbody").on("click", "#id_button", function () {
                var rowUserID = $(this)[0].innerHTML;
                // console.log(rowUserID);
                navigate('/invitedetails', { state: rowUserID })
            });



        };
        return {
            init: function () {
                if (!$().dataTable) {
                    return;
                }
                initTable1();
            },
        };
    })();


    $(document).ready(function () {
        $.fn.dataTableExt.sErrMode = "throw";
        TableDatatablesManaged.init();
    });





    return (
        <>
            <Header />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1><span><i className="bi bi-database" style={{ marginRight: '5px' }}></i></span>Round Data</h1>
                    <div style={{ opacity: 0.8, color: '#012970', marginTop: '4px' }}>

                        <Link to='/dashboard' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-people"></i></span><span> Users  |  </span></b></Link>
                        <Link to='/crash' style={{ opacity: 0.8, color: '#012970' }}> <b><span>  Games  | <span><i className="bi bi-airplane-engines"></i></span> Crash |</span></b></Link>
                        <b><span>  <i className="bi bi-database"></i> Round Data</span></b>
                    </div>
                </div>
                {/* DataTable */}
                <section className="section dashboard mt-4">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">


                                        <div className="card-body">
                                            <h4 className="card-title">{`Round Number : ${dataId}`}</h4>
                                            <table id="RoundData" className='table table-bordered table-striped tableFont'>
                                                <thead>
                                                    <tr>
                                                        <th>Sr</th>
                                                        <th>User</th>
                                                        <th>Target</th>
                                                        <th>Amount</th>
                                                        <th>Point</th>
                                                        <th>Fees</th>
                                                        <th>Win Amount</th>
                                                        <th>CreatedDate</th>
                                                        <th>EndDate</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
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



export default Rounddata
