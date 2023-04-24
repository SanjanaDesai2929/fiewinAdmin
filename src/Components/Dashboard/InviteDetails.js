import React from 'react'
import $ from "jquery"
import Header from '../Header'
import Footer from '../Footer'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const InviteDetails = () => {

    const location = useLocation()
    const dataId = location.state
    const navigate = useNavigate()

    //all datatables of one user
    var TableDatatablesManaged = (function () {
        //Referral Details tabledata
        var initTable1 = function () {
            // var table = $("#dashboard-tbl");
            var table1 = $("#ReferralDetails").DataTable({
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
                    url: `admin/invitepeoples?dataId=${dataId}`,
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
                            if (data.InviteUserId) {
                                return '<span class="pointer-awe text-lightgreen "  id="idTable1" style="color:blue;cursor: pointer;">' + data.InviteUserId + '</span>'
                            }
                            else {
                                return '-'
                            }
                        }

                    },
                    {
                        data: 'leval',
                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.Type === 1) {
                                return '<span class="badge badge-success" style="font-size:15px">' + 'Register' + '</span> '
                            } else {
                                return '<span class="badge badge-danger" style="font-size:15px">' + 'Not Register' + '</span> '

                            }
                        }
                    },
                    {
                        data: 'date',
                    },
                ],

                // select: {
                //   // style: "multi",
                //   selector: "td:first-child",
                // },
                // order: [[1, "desc"]],
                Destroy: true,
            });


            $("#ReferralDetails tbody").on("click", "#idTable1", function () {
                var rowUserID = $(this)[0].innerHTML;
                console.log(rowUserID);
                navigate('/invitedetails', { state: rowUserID })
            });



        };
        //Invite Income Details tabledata
        var initTable2 = function () {
            // var table = $("#dashboard-tbl");
            var table1 = $("#InviteIncomeDetails").DataTable({
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
                    url: `admin/InviteIncomeDetails?dataId=${dataId}`,
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
                            if (data.participantUserId) {
                                return '<span class="pointer-awe text-lightgreen"  id="id_button2" style="color:blue;cursor: pointer;">' + data.participantUserId + '</span>'
                            }
                            else {
                                return '-'
                            }
                        }

                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.tradeType === '7') { return '<span>' + "Withdraw" + '</span>' }
                            if (data.tradeType === '11') { return '<span>' + "All Income types" + '</span>' }
                            if (data.tradeType === '50') { return '<span>' + "Order commission" + '</span>' }
                            if (data.tradeType === '53') { return '<span>' + "Ranking rewards" + '</span>' }
                            if (data.tradeType === '54') { return '<span>' + "Effective user reward" + '</span>' }
                            if (data.tradeType === '55') { return '<span>' + "Invite cash back" + '</span>' }
                            if (data.tradeType === '56') { return '<span>' + "other reward" + '</span>' }
                            else { return '-' }
                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.points) {
                                if (data.points.$numberDecimal) {
                                    return data.points.$numberDecimal
                                }
                                else {
                                    return data.points
                                }
                            } else {
                                return '-'
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
                // order: [[1, "desc"]],
                Destroy: true,
            });


            $("#InviteIncomeDetails  tbody").on("click", "#id_button2", function () {
                var rowUserID = $(this)[0].innerHTML;
                console.log(rowUserID);
                navigate('/invitedetails', { state: rowUserID })
            });



        };
        //Check in Bonus tabledata
        var initTable3 = function () {
            // var table = $("#dashboard-tbl");
            var table1 = $("#CheckInBonus").DataTable({
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
                    url: `admin/CheckInBonus?dataId=${dataId}`,
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
                            if (data.checkInDate) {
                                return data.checkInDate
                            }
                            else {
                                return '-'
                            }
                        }

                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.index) {
                                return data.index
                            } else {
                                return '-'
                            }
                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.todayCheckIn) {
                                if (data.todayCheckIn === 'true') {
                                    return '<span class="badge badge-success" style="font-size:15px">' + 'Yes' + '</span> '
                                } else {

                                    return '<span class="badge badge-danger" style="font-size:15px">' + 'No  ' + '</span> '
                                }
                            } else {
                                return '-'
                            }
                        }

                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.coin) {
                                return data.coin
                            } else {
                                return '-'
                            }

                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.checkInBonus) {
                                if (data.index === '7') {
                                    return data.checkInBonus.coin
                                } else {
                                    return '-'
                                }
                            } else {
                                return '-'
                            }

                        }
                    },
                ],

                // select: {
                //   // style: "multi",
                //   selector: "td:first-child",
                // },
                // order: [[1, "desc"]],
                Destroy: true,
            });


            $("#CheckInBonus  tbody").on("click", "#id_button2", function () {
                var rowUserID = $(this)[0].innerHTML;
                console.log(rowUserID);
                navigate('/invitedetails', { state: rowUserID })
            });



        };
        //Rewards tabledata
        var initTable4 = function () {
            var table1 = $("#Rewards").DataTable({
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
                    url: `admin/RewordDetails?dataId=${dataId}`,
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
                        data: null,
                        render: function (data) {
                            if (data.status === '0') { return '<span class="badge badge-primary" style="font-size:15px">' + 'Start' + '</span> ' }
                            if (data.status === '1') { return '<span class="badge badge-info" style="font-size:15px">' + 'Processing' + '</span> ' }
                            if (data.status === '2') { return '<span class="badge badge-success" style="font-size:15px">' + 'Completed' + '</span> ' }
                            else { return '-' }
                        }
                    },
                    {
                        data: 'range',
                    },
                    {
                        data: 'order',
                    },
                    {
                        data: 'type',
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
                // order: [[1, "desc"]],
                Destroy: true,
            });


            $("#Rewards  tbody").on("click", "#id_button2", function () {
                var rowUserID = $(this)[0].innerHTML;
                console.log(rowUserID);
                navigate('/invitedetails', { state: rowUserID })
            });



        };
        //Bank Account Details table data
        var initTable5 = function () {
            var table1 = $("#BankAccountDetails").DataTable({
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
                    url: `admin/BankAccountDetail?dataId=${dataId}`,
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
                        data: 'name',
                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.mode === '0') { return '<span class="badge badge-info" style="font-size:15px">' + 'Upi' + '</span> ' }
                            if (data.mode === '1') { return '<span class="badge badge-primary" style="font-size:15px">' + 'Bank' + '</span> ' }
                            else { return '-' }
                        }

                    },
                    {
                        data: 'ifsc_code',
                    },
                    {
                        data: 'account_number',
                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.upi_address === '') { return '-' }
                            else { return data.upi_address }
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
                // order: [[1, "desc"]],
                Destroy: true,
            });


            $("#Rewards  tbody").on("click", "#id_button2", function () {
                var rowUserID = $(this)[0].innerHTML;
                console.log(rowUserID);
                navigate('/invitedetails', { state: rowUserID })
            });



        };
        //Agent Cash Growth Plan table data
        var initTable6 = function () {
            var table1 = $("#AgentCashGrowthPlan").DataTable({
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
                    url: `admin/AgentCashGrowthPlan?dataId=${dataId}`,
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
                            if (data.leval === '1') { return '<span class="badge badge-secondary" style="font-size:15px">' + 'Iron' + '</span> ' }
                            if (data.leval === '2') { return '<span class="badge badge-secondary" style="font-size:15px">' + 'Bronze' + '</span> ' }
                            if (data.leval === '3') { return '<span class="badge badge-secondary" style="font-size:15px">' + 'Sliver' + '</span> ' }
                            if (data.leval === '4') { return '<span class="badge badge-warning" style="font-size:15px">' + 'Gold' + '</span> ' }
                            if (data.leval === '5') { return '<span class="badge badge-light" style="font-size:15px">' + 'Platinum' + '</span> ' }
                            if (data.leval === '6') { return '<span class="badge badge-light" style="font-size:15px">' + 'Diamond' + '</span> ' }
                            if (data.leval === '7') { return '<span class="badge badge-success" style="font-size:15px">' + 'Master' + '</span> ' }
                        }
                    },
                    {
                        data: null,
                        render: function (data) {
                            if (data.status === '0') { return '<span class="badge badge-info" style="font-size:15px">' + 'Open' + '</span> ' }
                            if (data.status === '1') { return '<span class="badge badge-primary" style="font-size:15px">' + 'Eligible' + '</span> ' }
                            if (data.status === '2') { return '<span class="badge badge-success" style="font-size:15px">' + 'Completed' + '</span> ' }
                        }
                    },
                    {
                        data: 'point',
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
                // order: [[1, "desc"]],
                Destroy: true,
            });


            $("#Rewards  tbody").on("click", "#id_button2", function () {
                var rowUserID = $(this)[0].innerHTML;
                console.log(rowUserID);
                navigate('/invitedetails', { state: rowUserID })
            });



        };





        return {
            init: function () {
                if (!$().dataTable) {
                    return;
                }
                initTable1();
                initTable2();
                initTable3();
                initTable4();
                initTable5();
                initTable6();
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
                    <h1><span><i className="bi bi-send-check-fill"></i></span> Invite    Detail</h1>
                    <div style={{ opacity: 0.8, color: '#012970', marginTop: '7px' }}>
                        <Link to='/dashboard' style={{ opacity: 0.8, color: '#012970' }} > <b><span><i className="bi bi-people"></i></span><span> Users  |  </span></b></Link><b><span> Invite Detail</span></b>

                    </div>
                    <hr></hr>
                </div>
                <div >
                    <h4 style={{ color: '#012970' }}>{`User Id : ${dataId}`}</h4>
                </div>
                {/* Referral Details table */}
                <section className="section dashboard mt-4">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">


                                        <div className="card-body">
                                            <h4 className="card-title">Referral Details</h4>
                                            <table id="ReferralDetails" className='table table-bordered table-striped tableFont'>
                                                <thead>
                                                    <tr>
                                                        <th>Sr</th>
                                                        <th>To MemberId</th>
                                                        <th>level</th>
                                                        <th>Type</th>
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
                {/* Invite Income Details table */}
                <section className="section dashboard mt-4">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">


                                        <div className="card-body">
                                            <h4 className="card-title">Invite Income Details</h4>
                                            <table id="InviteIncomeDetails" className='table table-bordered table-striped tableFont'>
                                                <thead>
                                                    <tr>
                                                        <th>Sr</th>
                                                        <th>ParticipantUserId</th>
                                                        <th>Income Type</th>
                                                        <th>Points</th>
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
                {/* Check in Bonus  table */}
                <section className="section dashboard mt-4">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">


                                        <div className="card-body">
                                            <h4 className="card-title">Check in Bonus</h4>
                                            <table id="CheckInBonus" className='table table-bordered table-striped tableFont'>
                                                <thead>
                                                    <tr>
                                                        <th>Sr</th>
                                                        <th>CheckInDate</th>
                                                        <th>Index</th>
                                                        <th>TodayCheckIn</th>
                                                        <th>Coin</th>
                                                        <th>CheckInBonus</th>

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
                {/* Rewards table */}
                <section className="section dashboard mt-4">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">


                                        <div className="card-body">
                                            <h4 className="card-title">Rewards</h4>
                                            <table id="Rewards" className='table table-bordered table-striped tableFont'>
                                                <thead>
                                                    <tr>
                                                        <th>Sr</th>
                                                        <th>Task</th>
                                                        <th>Description</th>
                                                        <th>Points</th>
                                                        <th>Status</th>
                                                        <th>Range</th>
                                                        <th>Order</th>
                                                        <th>Type</th>
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
                {/* Bank Account details table*/}
                <section className="section dashboard mt-4">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">


                                        <div className="card-body">
                                            <h4 className="card-title">Bank Account Details</h4>
                                            <table id="BankAccountDetails" className='table table-bordered table-striped tableFont'>
                                                <thead>
                                                    <tr>
                                                        <th>Sr</th>
                                                        <th>Name</th>
                                                        <th>Mode</th>
                                                        <th>Ifsc Code</th>
                                                        <th>AccountNumber</th>
                                                        <th>Upi Address</th>
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
                {/* Agent cash Growth plan Details table */}
                <section className="section dashboard mt-4">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row">

                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">


                                        <div className="card-body">
                                            <h4 className="card-title">Agent Cash Growth Plan</h4>
                                            <table id="AgentCashGrowthPlan" className='table table-bordered table-striped tableFont'>
                                                <thead>
                                                    <tr>
                                                        <th>Sr</th>
                                                        <th>Level</th>
                                                        <th>Status</th>
                                                        <th>Point</th>
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
                <Footer />

            </main>
        </>
    )
}

export default InviteDetails
