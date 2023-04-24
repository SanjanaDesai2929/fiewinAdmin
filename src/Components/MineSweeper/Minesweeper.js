import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom'
import $ from 'jquery';



const Minesweeper = () => {
    const navigate = useNavigate()

    //MinesSweeper datatable
    var TableDatatablesManaged = (function () {
        var initTable1 = function () {
            // var table = $("#dashboard-tbl");
            var table1 = $("#MinesSweeper").DataTable({
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
                    url: "admin/MinesSweeper",
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
                        data: 'amount',

                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.type === '2') { return '<span class="badge badge-success" style="font-size:unset">' + '2x2' + '</span> ' }
                            if (data.type === '4') { return '<span class="badge badge-success" style="font-size:unset">' + '4x4' + '</span> ' }
                            if (data.type === '8') { return '<span class="badge badge-success" style="font-size:unset">' + '8x8' + '</span> ' }
                            else { return '-' }
                        }

                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.win_point === '') { return '0' }
                            else { return data.win_point }
                        }

                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.status === '0') { return '<span class="badge badge-warning" style="font-size:unset">' + 'pending' + '</span> ' }
                            if (data.status === '1') { return '<span class="badge badge-success" style="font-size:unset">' + 'completed' + '</span> ' }
                            if (data.status === '2') { return '<span class="badge badge-danger" style="font-size:unset">' + 'failed' + '</span> ' }

                        }

                    },
                    {
                        data: null,
                        render: function (data) {
                            const timestamp = Number(data.startDate);
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
                    {
                        data: null,
                        render: function (data) {
                            if (data.endDate) {

                                const timestamp = Number(data.endDate);
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
                            else {
                                return '-'
                            }

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


            $("#MinesSweeper tbody").on("click", "#id_button", function () {
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
                    <h1><span style={{ marginRight: '6px' }}><i className="fa fa-bomb"></i></span>Mines-Sweeper</h1>
                    <div style={{ opacity: 0.8, color: '#012970', marginTop: '7px' }}>
                        <Link to='/dashboard' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-people"></i></span><span> Users  |  </span></b></Link><b><span>  Games  | Mines-Sweeper</span></b>

                    </div>
                </div>
                {/* MinesSweeper dataTable */}
                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">


                                        <div className="card-body">
                                            <h4 className="card-title">Mines-Sweeper</h4>
                                            <table id="MinesSweeper" className='table table-bordered table-striped tableFont'>
                                                <thead>
                                                    <tr>
                                                        <th>Sr</th>
                                                        <th>UserId</th>
                                                        <th>Amount</th>
                                                        <th>Type</th>
                                                        <th>Win-point</th>
                                                        <th>Status</th>
                                                        <th>Start-Date</th>
                                                        <th>End-Date</th>
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

export default Minesweeper
