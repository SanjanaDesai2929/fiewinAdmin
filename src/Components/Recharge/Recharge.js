import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import { Link, useNavigate } from 'react-router-dom';
import $ from 'jquery'



const Recharge = () => {

    const navigate = useNavigate()



    //recharge datatable
    var TableDatatablesManaged = (function () {
        var initTable1 = function () {
            // var table = $("#dashboard-tbl");
            var table1 = $("#Recharges").DataTable({
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
                    url: `admin/rechargeData`,
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
                            if (data.userId) {
                                return '<span className="pointer-awe text-lightgreen " style="color:blue;cursor: pointer;" id="id_button" >' + data.userId + '</span>'
                            }
                        }

                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.transactionId) {
                                return '<span className="pointer-awe text-lightgreen " style="color:blue;cursor: pointer;" id="transactionId" >' + data.transactionId + '</span>'
                            }
                        }

                    },
                    {
                        data: 'amount',

                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.status === '0') { return '<span class="badge badge-warning" style="font-size:15px">' + 'Pending' + '</span> ' }
                            if (data.status === '1') { return '<span class="badge badge-success" style="font-size:15px">' + 'Success' + '</span> ' }
                            if (data.status === '2') { return '<span class="badge badge-info" style="font-size:15px">' + 'Canceled' + '</span> ' }
                            if (data.status === '3') { return '<span class="badge badge-danger" style="font-size:15px">' + 'Failed' + '</span> ' }
                            if (data.status === '4') { return '<span class="badge badge-primary" style="font-size:15px">' + 'TimeOut' + '</span> ' }
                            else { return '-' }
                        }

                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.Compaint === '0') { return '<span class="badge badge-primary" style="font-size:15px">' + 'No' + '</span> ' }
                            if (data.Compaint === '1') { return '<span class="badge badge-warning" style="font-size:15px">' + 'pending' + '</span> ' }
                            if (data.Compaint === '2') { return '<span class="badge badge-danger" style="font-size:15px">' + 'invalid' + '</span> ' }

                        }

                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.paymentMethod === 'gpay') { return '<span  style="color:red">' + '<b>' + 'Google' + '</b>' + '</span>' + '<span style="color:blue">' + ' ' + '<b>' + 'Pay' + '</b>' + '</span>' }
                            if (data.paymentMethod === 'paytm') { return '<span  style="color:darkblue">' + '<b>' + 'Pay' + '</b>' + '</span>' + '<span style="color:#00b5ff">' + '' + '<b>' + 'tm' + '</b>' + '</span>' }
                            if (data.paymentMethod === 'phonepe') { return '<span  style="color:blueviolet">' + '<b>' + 'Phonepe' + '</b>' + '</span>' }
                            if (data.paymentMethod === 'amazonpay') { return '<span  >' + '<b>' + 'Amazonpay' + '</b>' + '</span>' }

                        }

                    },
                    {
                        data: 'createdAt',

                    },
                ],

                // select: {
                //   // style: "multi",
                //   selector: "td:first-child",
                // },
                order: [[1, "desc"]],
                Destroy: true,
            });


            $("#Recharges tbody").on("click", "#id_button", function () {
                var rowUserID = $(this)[0].innerHTML;
                // console.log(rowUserID);
                navigate('/invitedetails', { state: rowUserID })
            });
            $("#Recharges tbody").on("click", "#transactionId", function () {
                var rowUserID = $(this)[0].innerHTML;
                // console.log(rowUserID);
                navigate('/transaction', { state: rowUserID })
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
                    <h1><span style={{ marginRight: '-2px' }}><i className="bi bi-currency-rupee"></i></span> Recharge</h1>
                    <div style={{ opacity: 0.8, color: '#012970', marginTop: '7px' }}>
                        <Link to='/dashboard' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-people"></i></span><span> Users  |  </span></b></Link><b><span> <i className="bi bi-currency-rupee"></i>Recharge</span></b>

                    </div>
                </div>
                {/* Recharges DataTable */}
                <section className="section dashboard mt-4">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">


                                        <div className="card-body">
                                            <h4 className="card-title">Users Recharges </h4>
                                            <table id="Recharges" className='table table-bordered table-striped tableFont'>
                                                <thead>
                                                    <tr>
                                                        <th>Sr</th>
                                                        <th>UserId</th>
                                                        <th>TransactionId</th>
                                                        <th>Amount</th>
                                                        <th>Status</th>
                                                        <th>Complaint</th>
                                                        <th>PaymentMethod</th>
                                                        <th>Start-Date</th>
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

export default Recharge
