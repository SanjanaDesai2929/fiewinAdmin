import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import $ from 'jquery'


const Taskreword = () => {

    const navigate = useNavigate()
    //click-event on Add button 
    const handleAddClick = () => {
        navigate('/addtask')
    }




    //delete task data
    const deleteFun = async (data) => {
        // console.log(data);
        console.log(data);
        const _id = data

        try {
            const res = await fetch('https://fiewin-0083s-projects.vercel.app/admin/taskdelete', {
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
                toast.error('Task Reword Delete Successfully', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 1000,
                });
                // navigate('/upidetail')
                TableDatatablesManaged.init()
            }
        } catch (e) {
            console.log(e);
        }
    }


    //datatable
    var TableDatatablesManaged = (function () {
        var initTable1 = function () {
            // var table = $("#dashboard-tbl");
            var table1 = $("#TaskRewordDetails").DataTable({
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
                    url: "https://fiewin-0083s-projects.vercel.app/admin/taskreword",
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
                        data: 'task',
                    },
                    {
                        data: 'description',
                    },
                    {
                        data: 'points',
                    },
                    {
                        data: 'order',
                    },
                    {
                        data: 'type',
                    },
                    {
                        data: 'range',
                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.status === '0') { return '<span class="badge badge-primary" style="font-size:unset">' + 'Start' + '</span> ' }
                            if (data.status === '1') { return '<span class="badge badge-info" style="font-size:unset">' + 'Processing' + '</span> ' }
                            if (data.status === '2') { return '<span class="badge badge-success" style="font-size:unset">' + 'Complete' + '</span> ' }
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
                    {
                        data: null,
                        sorting:false,
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


            $("#TaskRewordDetails tbody").on("click", "#edit", function () {
                var row = window.$(this).parents("tr")[0];
                const id = table1.row(row).data() && table1.row(row).data()
                console.log(id);
                console.log("rowUserID", id && id._id);
                navigate('/editreword', { state: id && id._id })
            });
            $("#TaskRewordDetails tbody").on("click", "#delete", function () {

                var rowUserID = $(this)[0].innerHTML;
                console.log("rowUserID", rowUserID);
                var row = window.$(this).parents("tr")[0];
                const id = table1.row(row).data() && table1.row(row).data()
                var rowUserId = id && id._id
                if (rowUserId) {
                    deleteFun(rowUserId)
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

                <div className='row'>

                    <div className='col-6'>
                        <div className="pagetitle">
                            <h1><span style={{ marginRight: '-2px' }}> <i className="bi bi-trophy"></i></span> Task Reword</h1>
                            <div style={{ opacity: 0.8, color: '#012970', marginTop: '7px' }}>
                                <Link to='/dashboard' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-people"></i></span><span> Users  |  </span></b></Link><b><span>  <i className="bi bi-trophy"></i> Task Reword</span></b>

                            </div>
                        </div>
                    </div>
                    <div className='col-6 text-end'>
                        <div>
                            <button className='btn btn-primary' onClick={handleAddClick}> Add </button>
                        </div>

                    </div>
                </div>
                {/* task reword datatable */}
                <section className="section dashboard mt-4">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">


                                        <div className="card-body">
                                            <h4 className="card-title">Task Reword</h4>
                                            <table id="TaskRewordDetails" className='table table-bordered table-striped tableFont' >
                                                <thead>
                                                    <tr >
                                                        <th>Sr</th>
                                                        <th>Task</th>
                                                        <th>Description</th>
                                                        <th>Points</th>
                                                        <th>Order</th>
                                                        <th>Type</th>
                                                        <th>Range</th>
                                                        <th>Status</th>
                                                        <th>Date</th>
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
            </main>
            <Footer />
        </>
    )
}

export default Taskreword
