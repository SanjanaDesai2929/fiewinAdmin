import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import { Link, useNavigate } from 'react-router-dom'
import $ from 'jquery'




const Crash = () => {

    const navigate = useNavigate()

    //crash game dataTable
    var TableDatatablesManaged = (function () {
        var initTable1 = function () {
            // var table = $("#dashboard-tbl");
            var table1 = $("#Crash").DataTable({
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
                    url: "https://fiewin-0083s-projects.vercel.app/admin/crashResult",
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
                            if (data.round_number) {
                                return '<span className="pointer-awe text-lightgreen " style="color:blue;cursor: pointer;" id="id_button" >' + data.round_number + '</span>'
                            }
                        }

                    },
                    {
                        data: 'Crash',

                    },
                    {
                        data: 'createdAt'

                    },
                    {
                        data: 'updatedAt'

                    },
                ],

                // select: {
                //   // style: "multi",
                //   selector: "td:first-child",
                // },
                order: [[1, "desc"]],
                Destroy: true,
            });

            //onClick round navigate rounddata
            $("#Crash tbody").on("click", "#id_button", function () {
                var rowUserID = $(this)[0].innerHTML;
                // console.log(rowUserID);
                navigate('/rounddata', { state: rowUserID })
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
                    <h1><span><i className="bi bi-airplane-engines" style={{ marginRight: '5px' }}></i></span>Crash</h1>
                    <div style={{ opacity: 0.8, color: '#012970', marginTop: '4px' }}>

                        <Link to='/dashboard' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-people"></i></span><span> Users  |  </span></b></Link><b><span>  Games  | <span><i className="bi bi-airplane-engines"></i></span> Crash </span></b>
                    </div>
                </div>
                {/* crash game table */}
                <section className="section dashboard mt-4">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">


                                        <div className="card-body">
                                            <h4 className="card-title">Crash</h4>
                                            <table id="Crash" className='table table-bordered table-striped tableFont'>
                                                <thead>
                                                    <tr>
                                                        <th>Sr</th>
                                                        <th>Round Number</th>
                                                        <th>Crash</th>
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

export default Crash
