import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom'
import $ from 'jquery'
import { toast } from 'react-toastify';






const Withdraw = () => {



    //function to update status data
    // const updateStatus = async (status, _id) => {
    //     console.log(status, _id);
    //     const res = await fetch('/admin/withdrawstatus', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             data: localStorage.getItem('Auth_token')

    //         },
    //         body: JSON.stringify({
    //             status, _id
    //         })
    //     })
    //     console.log(res);
    //     const data = await res.json()
    //     console.log(data);
    //     if (res.status === 200) {
    //         // window.location.reload()
    //         TableDatatablesManaged()

    //     }

    // }


    const navigate = useNavigate()

    //WithdrawDetails datatable
    var TableDatatablesManaged = (function () {
        var initTable1 = function () {
            // var table = $("#dashboard-tbl");
            var table1 = $("#WithdrawDetails").DataTable({
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
                    url: "admin/withdraw",
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
                        data: 'name',

                    },
                    {
                        data: 'point',

                    },
                    {
                        data: 'fee',

                    },
                    {
                        data: null,
                        render: function (data) {

                            if (data.mode === '1') { return '<span className="badge badge-success" style="font-size:unset">' + 'BankAccount' + '</span> ' }
                            if (data.mode === '0') { return '<span className="badge badge-primary" style="font-size:unset">' + 'Upi' + '</span> ' }
                            else { return '-' }
                        }

                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.type === '1') { return '<span className="badge badge-success" style="font-size:unset">' + 'Wallet' + '</span> ' }
                            if (data.type === '2') { return '<span className="badge badge-primary" style="font-size:unset">' + 'AdminWallet' + '</span> ' }
                            if (data.type === '') { return '-' }
                        }

                    },
                    {
                        data: 'ifsc',

                    },
                    {
                        data: 'account',

                    },
                    {
                        data: 'transferredAccount',

                    },
                    {
                        data: null,
                        render: function (data) {

                            if (data.status === '1') { return '<span class="badge badge-success" style="font-size:unset">' + 'Success' + '</span> ' }
                            else {
                                return '<div id="allData">' + ' <select style="width:92px" id="select" className="selectBox form-control col-10" >' +
                                    '<option value="0"' + `${data.status == "0" && "selected = selected"}` + '>Pending</option>' +
                                    '<option value="1" id="success">Success</option>' +
                                    '  <option value="2"' + `${data.status == "2" && "selected = selected"}` + '>Cancel</option>' +
                                    '<option  class="d-none " id="data" value="1234" >' + data._id + '</option>' +
                                    '</select>' + '</div>'

                            }

                        }

                    },
                    {
                        data: null,
                        render: function (data) {

                            console.log(data);
                            const timestamp = Number(data.date);
                            const date = new Date(timestamp);
                            const year = date.getFullYear();
                            const month = date.getMonth() + 1;
                            const day = date.getDate();
                            const hours = date.getHours();
                            const minutes = date.getMinutes();
                            const seconds = date.getSeconds();
                            const formattedDate = `${day}-${month}-${year}  |  ${hours}:${minutes}:${seconds}`;
                            return formattedDate

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


            $("#WithdrawDetails tbody").on("click", "#id_button", function () {
                var rowUserID = $(this)[0].innerHTML;
                console.log(rowUserID);
                navigate('/invitedetails', { state: rowUserID })
            });
            $("#WithdrawDetails tbody").on("change", "#select", function () {
                var rowUserID = $(this)[0].value;
                var status = rowUserID
                var _id = document.getElementById('data').innerHTML
                updateStatus(status, _id)


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

    //function to update status data
    const updateStatus = async (status, _id) => {
        console.log(status, _id);
        const res = await fetch('https://fiewin-0083s-projects.vercel.app/admin/withdrawstatus', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                data: localStorage.getItem('Auth_token')

            },
            body: JSON.stringify({
                status, _id
            })
        })
        console.log(res);
        const data = await res.json()
        console.log(data);
        if (res.status === 200) {
            // window.location.reload()
            TableDatatablesManaged.init()
        }

    }


    return (
        <>
            <Header />
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1><span><i className="bi bi-layer-backward" style={{ marginRight: '5px' }}></i></span>Withdraw</h1>
                    <div style={{ opacity: 0.8, color: '#012970', marginTop: '4px' }}>

                        <Link to='/dashboard' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-people"></i></span><span> Users  |  </span></b></Link><b><span>    <i className="bi bi-layer-backward"></i>  Withdraw</span></b>
                    </div>
                </div>
                {/* WithdrawDetails dataTable */}
                <section className="section dashboard mt-4">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">


                                        <div className="card-body">
                                            <h4 className="card-title">Withdraw Details</h4>
                                            <table id="WithdrawDetails" className='table table-bordered table-striped tableFont' >
                                                <thead>
                                                    <tr >
                                                        <th>Sr</th>
                                                        <th>UserId</th>
                                                        <th>Name</th>
                                                        <th>Point</th>
                                                        <th>Fee</th>
                                                        <th>Mode</th>
                                                        <th>Type</th>
                                                        <th>Ifsc</th>
                                                        <th>Account</th>
                                                        <th>TransferredAccount</th>
                                                        <th style={{ width: '91px' }}>Status</th>
                                                        <th>Date</th>
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

            </main>
            <Footer />
        </>
    )
}

export default Withdraw
