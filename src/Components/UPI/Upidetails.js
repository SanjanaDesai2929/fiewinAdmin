import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify';
import $ from "jquery"


const Upidetails = () => {
    const navigate = useNavigate()

    //click-on Add button
    const handleAddClick = () => {
        navigate('/addupi')
    }



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
                    TableDatatablesManaged.init()
                }, 800);
            }
        } catch (e) {
            console.log(e);
        }


    }



    var TableDatatablesManaged = (function () {
        var initTable1 = function () {
            // var table = $("#dashboard-tbl");
            var table1 = $("#UpiDetails").DataTable({
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
                    url: "admin/upidata",
                    headers: {
                        data: localStorage.getItem('Auth_token')

                    },
                    type: "GET",
                    dataSrc: "data",
                },
                columns: [
                    {
                        data: 'sr',
                        sorting: false
                    },
                    {
                        data: 'paymentMethod',
                    },
                    {
                        data: 'account',
                    },
                    {
                        data: null,
                        render: function (data) {
                            return ' <button class="btn-sm btn-primary" id="edit" ><i class="bi bi-pencil"></i></button>' +
                                '<button class="btn-sm btn-danger buttonData" id="delete">' + '<i class="bi bi-trash"></i>' + '</button>'
                        }
                    },


                ],

                // select: {
                //   // style: "multi",
                //   selector: "td:first-child",
                // },
                order: [[1, "desc"]],
                Destroy: true,
            });


            $("#UpiDetails tbody").on("click", "#edit", function () {
                var row = window.$(this).parents("tr")[0];
                const id = table1.row(row).data() && table1.row(row).data()
                console.log(id);
                // console.log("rowUserID", id.id );
                navigate('/editupi', { state: id && id.id })
            });
            $("#UpiDetails tbody").on("click", "#delete", function () {

                var row = window.$(this).parents("tr")[0];
                const id = table1.row(row).data() && table1.row(row).data()

                if (id) {
                    deleteFun(id && id.id)
                }
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
                                                    <table id="UpiDetails" className='table table-bordered table-striped tableFont' >
                                                        <thead>
                                                            <tr >
                                                                <th>Sr</th>
                                                                <th>Payment Method</th>
                                                                <th>UPI</th>
                                                                <th>Action</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody >
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
