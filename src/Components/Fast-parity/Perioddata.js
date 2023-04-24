import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import $ from 'jquery'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'




const Perioddata = () => {
    const location = useLocation()
    console.log('location', location.state);
    const dataId = location.state

    const navigate = useNavigate()



    //period datatable  
    var TableDatatablesManaged = (function () {
        var initTable1 = function () {
            var table1 = $("#PeriodData").DataTable({
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
                    url: `admin/periodData?dataId=${dataId}`,
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
                                return '<span className="pointer-awe text-lightgreen " style="color:blue;cursor: pointer;" id="period" >' + data.user + '</span>'
                            }
                        }
                    },
                    {
                        data: 'point',

                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.select_number === 'G') { return '<span class="circleG" >' + '<h5 class="number">' + 'G' + '</h5>' + '</span> ' }
                            if (data.select_number === 'R') { return '<span class="circleR" >' + '<h5 class="number">' + 'R' + '</h5>' + '</span> ' }
                            if (data.select_number === 'V') { return '<span class="circleV" >' + '<h5 class="number">' + 'V' + '</h5>' + '</span> ' }
                            if (data.select_number === '0') { return '<span class="circleN" >' + '<h5 class="number">' + '0' + '</h5>' + '</span> ' }
                            if (data.select_number === '1') { return '<span class="circleN" >' + '<h5 class="number">' + '1' + '</h5>' + '</span> ' }
                            if (data.select_number === '2') { return '<span class="circleN" >' + '<h5 class="number">' + '2' + '</h5>' + '</span> ' }
                            if (data.select_number === '3') { return '<span class="circleN" >' + '<h5 class="number">' + '3' + '</h5>' + '</span> ' }
                            if (data.select_number === '4') { return '<span class="circleN" >' + '<h5 class="number">' + '4' + '</h5>' + '</span> ' }
                            if (data.select_number === '5') { return '<span class="circleN" >' + '<h5 class="number">' + '5' + '</h5>' + '</span> ' }
                            if (data.select_number === '6') { return '<span class="circleN" >' + '<h5 class="number">' + '6' + '</h5>' + '</span> ' }
                            if (data.select_number === '7') { return '<span class="circleN" >' + '<h5 class="number">' + '7' + '</h5>' + '</span> ' }
                            if (data.select_number === '8') { return '<span class="circleN" >' + '<h5 class="number">' + '8' + '</h5>' + '</span> ' }
                            if (data.select_number === '9') { return '<span class="circleN" >' + '<h5 class="number">' + '9 ' + '</h5>' + '</span> ' }
                            else { return '-' }
                        }

                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.status.totalPrice === '') { return '<span className="badge badge-danger" style="font-size:smaller">' + 'Lose' + '</span> ' }
                            else { return '<span className="badge badge-success" style="font-size:smaller">' + 'Profit' + '</span> ' }
                        }

                    },
                    {
                        data: null,
                        render: function (data) {
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


            $("#PeriodData tbody").on("click", "#period", function () {
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
                    <h1><span><i className="bi bi-hourglass-bottom"></i></span> Period Data</h1>
                    <div style={{ opacity: 0.8, color: '#012970', marginTop: '4px' }}>

                        <Link to='/dashboard' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-people"></i></span><span> Users  |  </span></b> </Link>
                        <b><Link style={{ opacity: 0.8, color: '#012970' }} to='/fastparity'><span>  Games  | Fast-parity</span></Link></b>
                    </div>
                </div>
                {/* period dataTable  */}
                <section className="section dashboard mt-4">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">


                                        <div className="card-body">
                                            <h4 className="card-title">{`Period : ${dataId}`}</h4>
                                            <table id="PeriodData">
                                                <thead>
                                                    <tr>
                                                        <th>Sr</th>
                                                        <th>userId</th>
                                                        <th>Point</th>
                                                        <th>Selected Color</th>
                                                        <th>Status</th>
                                                        <th>Date</th>
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

export default Perioddata
