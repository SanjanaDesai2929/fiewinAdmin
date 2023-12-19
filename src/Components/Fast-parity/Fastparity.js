import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import $ from 'jquery'
import { Link, useNavigate } from 'react-router-dom'





const Fastparity = () => {



    const navigate = useNavigate()

    //win number data   
    const WinNumber = (data) => {
        console.log(data);
        // render: function (data) {

        // ChangeData(data)


        if (!data.win_number.color[0] && data.win_number.number[0] === '0') { return '<span class="circleN" >' + '<h5 class="number">' + '0' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'G' && data.win_number.number[0] === '0') { return '<span class="circleGV" >' + '<h5 class="number">' + '0' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '0') { return '<span class="circleGV" >' + '<h5 class="number">' + '0' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '0') { return '<span class="circleRV" >' + '<h5 class="number">' + '0' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'R' && data.win_number.number[0] === '0') { return '<span class="circleRV" >' + '<h5 class="number">' + '0' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[0] === '0') { return '<span class="circle" >' + '<h5 class="number">' + '0' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[0] === '0') { return '<span class="circleV" >' + '<h5 class="number">' + '0' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[0] === '0') { return '<span class="circleG" >' + '<h5 class="number">' + '0' + '</h5>' + '</span> ' }


        if (!data.win_number.color[0] && data.win_number.number[0] === '1') { return '<span class="circleN" >' + '<h5 class="number">' + '1' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'G' && data.win_number.number[0] === '1') { return '<span class="circleGV" >' + '<h5 class="number">' + '1' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '1') { return '<span class="circleGV" >' + '<h5 class="number">' + '1' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '1') { return '<span class="circleRV" >' + '<h5 class="number">' + '1' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'R' && data.win_number.number[0] === '1') { return '<span class="circleRV" >' + '<h5 class="number">' + '1' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[0] === '1') { return '<span class="circle" >' + '<h5 class="number">' + '1' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[0] === '1') { return '<span class="circleV" >' + '<h5 class="number">' + '1' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[0] === '1') { return '<span class="circleG" >' + '<h5 class="number">' + '1' + '</h5>' + '</span> ' }


        if (!data.win_number.color[0] && data.win_number.number[0] === '2') { return '<span class="circleN" >' + '<h5 class="number">' + '2' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'G' && data.win_number.number[0] === '2') { return '<span class="circleGV" >' + '<h5 class="number">' + '2' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '2') { return '<span class="circleGV" >' + '<h5 class="number">' + '2' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '2') { return '<span class="circleRV" >' + '<h5 class="number">' + '2' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'R' && data.win_number.number[0] === '2') { return '<span class="circleRV" >' + '<h5 class="number">' + '2' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[0] === '2') { return '<span class="circle" >' + '<h5 class="number">' + '2' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[0] === '2') { return '<span class="circleV" >' + '<h5 class="number">' + '2' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[0] === '2') { return '<span class="circleG" >' + '<h5 class="number">' + '2' + '</h5>' + '</span> ' }


        if (!data.win_number.color[0] && data.win_number.number[0] === '3') { return '<span class="circleN" >' + '<h5 class="number">' + '3' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'G' && data.win_number.number[0] === '3') { return '<span class="circleGV" >' + '<h5 class="number">' + '3' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '3') { return '<span class="circleGV" >' + '<h5 class="number">' + '3' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '3') { return '<span class="circleRV" >' + '<h5 class="number">' + '3' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'R' && data.win_number.number[0] === '3') { return '<span class="circleRV" >' + '<h5 class="number">' + '3' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[0] === '3') { return '<span class="circle" >' + '<h5 class="number">' + '3' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[0] === '3') { return '<span class="circleV" >' + '<h5 class="number">' + '3' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[0] === '3') { return '<span class="circleG" >' + '<h5 class="number">' + '3' + '</h5>' + '</span> ' }


        if (!data.win_number.color[0] && data.win_number.number[0] === '4') { return '<span class="circleN" >' + '<h5 class="number">' + '4' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'G' && data.win_number.number[0] === '4') { return '<span class="circleGV" >' + '<h5 class="number">' + '4' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '4') { return '<span class="circleGV" >' + '<h5 class="number">' + '4' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '4') { return '<span class="circleRV" >' + '<h5 class="number">' + '4' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'R' && data.win_number.number[0] === '4') { return '<span class="circleRV" >' + '<h5 class="number">' + '4' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[0] === '4') { return '<span class="circle" >' + '<h5 class="number">' + '4' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[0] === '4') { return '<span class="circleV" >' + '<h5 class="number">' + '4' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[0] === '4') { return '<span class="circleG" >' + '<h5 class="number">' + '4' + '</h5>' + '</span> ' }


        if (!data.win_number.color[0] && data.win_number.number[0] === '5') { return '<span class="circleN" >' + '<h5 class="number">' + '5' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'G' && data.win_number.number[0] === '5') { return '<span class="circleGV" >' + '<h5 class="number">' + '5' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '5') { return '<span class="circleGV" >' + '<h5 class="number">' + '5' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '5') { return '<span class="circleRV" >' + '<h5 class="number">' + '5' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'R' && data.win_number.number[0] === '5') { return '<span class="circleRV" >' + '<h5 class="number">' + '5' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[0] === '5') { return '<span class="circle" >' + '<h5 class="number">' + '5' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[0] === '5') { return '<span class="circleV" >' + '<h5 class="number">' + '5' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[0] === '5') { return '<span class="circleG" >' + '<h5 class="number">' + '5' + '</h5>' + '</span> ' }


        if (!data.win_number.color[0] && data.win_number.number[0] === '6') { return '<span class="circleN" >' + '<h5 class="number">' + '6' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'G' && data.win_number.number[0] === '6') { return '<span class="circleGV" >' + '<h5 class="number">' + '6' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '6') { return '<span class="circleGV" >' + '<h5 class="number">' + '6' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '6') { return '<span class="circleRV" >' + '<h5 class="number">' + '6' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'R' && data.win_number.number[0] === '6') { return '<span class="circleRV" >' + '<h5 class="number">' + '6' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[0] === '6') { return '<span class="circle" >' + '<h5 class="number">' + '6' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[0] === '6') { return '<span class="circleV" >' + '<h5 class="number">' + '6' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[0] === '6') { return '<span class="circleG" >' + '<h5 class="number">' + '6' + '</h5>' + '</span> ' }


        if (!data.win_number.color[0] && data.win_number.number[0] === '7') { return '<span class="circleN" >' + '<h5 class="number">' + '7' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'G' && data.win_number.number[0] === '7') { return '<span class="circleGV" >' + '<h5 class="number">' + '7' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '7') { return '<span class="circleGV" >' + '<h5 class="number">' + '7' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '7') { return '<span class="circleRV" >' + '<h5 class="number">' + '7' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'R' && data.win_number.number[0] === '7') { return '<span class="circleRV" >' + '<h5 class="number">' + '7' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[0] === '7') { return '<span class="circle" >' + '<h5 class="number">' + '7' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[0] === '7') { return '<span class="circleV" >' + '<h5 class="number">' + '7' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[0] === '7') { return '<span class="circleG" >' + '<h5 class="number">' + '7' + '</h5>' + '</span> ' }


        if (!data.win_number.color[0] && data.win_number.number[0] === '8') { return '<span class="circleN" >' + '<h5 class="number">' + '8' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'G' && data.win_number.number[0] === '8') { return '<span class="circleGV" >' + '<h5 class="number">' + '8' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '8') { return '<span class="circleGV" >' + '<h5 class="number">' + '8' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '8') { return '<span class="circleRV" >' + '<h5 class="number">' + '8' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'R' && data.win_number.number[0] === '8') { return '<span class="circleRV" >' + '<h5 class="number">' + '8' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[0] === '8') { return '<span class="circle" >' + '<h5 class="number">' + '8' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[0] === '8') { return '<span class="circleV" >' + '<h5 class="number">' + '8' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[0] === '8') { return '<span class="circleG" >' + '<h5 class="number">' + '8' + '</h5>' + '</span> ' }


        if (!data.win_number.color[0] && data.win_number.number[0] === '9') { return '<span class="circleN" >' + '<h5 class="number">' + '9' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'G' && data.win_number.number[0] === '9') { return '<span class="circleGV" >' + '<h5 class="number">' + '9' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '9') { return '<span class="circleGV" >' + '<h5 class="number">' + '9' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[1] === 'V' && data.win_number.number[0] === '9') { return '<span class="circleRV" >' + '<h5 class="number">' + '9' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[1] === 'R' && data.win_number.number[0] === '9') { return '<span class="circleRV" >' + '<h5 class="number">' + '9' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'R' && data.win_number.number[0] === '9') { return '<span class="circle" >' + '<h5 class="number">' + '9' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'V' && data.win_number.number[0] === '9') { return '<span class="circleV" >' + '<h5 class="number">' + '9' + '</h5>' + '</span> ' }
        if (data.win_number.color[0] === 'G' && data.win_number.number[0] === '9') { return '<span class="circleG" >' + '<h5 class="number">' + '9' + '</h5>' + '</span> ' }



        else { return '-' }



        // }
    }



    //datatable
    var TableDatatablesManaged = (function () {
        var initTable1 = function () {
            // var table = $("#dashboard-tbl");
            var table1 = $("#Fastparity").DataTable({
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
                    url: "https://fiewin-0083s-projects.vercel.app/admin/FastParity",
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
                            console.log(data);
                            if (data.period) { return '<span className="pointer-awe text-lightgreen " style="color:blue;cursor: pointer;" id="period" >' + data.period + '</span>' }
                            else { return '-' }
                        }

                    },
                    {
                        data: null,
                        render: function (data) {

                            return WinNumber(data)
                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.totalPrice) {
                                console.log(data.totalPrice);
                                return data.totalPrice
                            } else {
                                return '-'
                            }
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

            //onClick useId navigate details page
            $("#Fastparity tbody").on("click", "#period", function () {
                var rowUserID = $(this)[0].innerHTML;
                // console.log(rowUserID);
                navigate('/perioddata', { state: rowUserID })
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
                    <h1><span><i className="bi bi-fast-forward-circle" style={{ marginRight: '5px' }}></i></span>Fast-parity</h1>
                    <div style={{ opacity: 0.8, color: '#012970', marginTop: '4px' }}>

                        <Link to='/dashboard' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-people"></i></span><span> Users  |  </span></b></Link><b><span>  Games  | Fast-parity</span></b>
                    </div>
                </div>
                {/* table of fastparityresults */}
                <section className="section dashboard">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">


                                        <div className="card-body">
                                            <h4 className="card-title">Fast-parity</h4>
                                            <table id="Fastparity" className='table table-bordered table-striped tableFont' >
                                                <thead>
                                                    <tr>
                                                        <th>Sr</th>
                                                        <th>Period</th>
                                                        <th>Win Number</th>
                                                        <th>Win Price</th>
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

export default Fastparity
