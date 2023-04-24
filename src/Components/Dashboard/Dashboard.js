import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom'
import $ from 'jquery';





const Dashboard = () => {

  const naviagte = useNavigate()

  //datatable of userdata
  var TableDatatablesManaged = (function () {
    var initTable1 = function () {
      // var table = $("#dashboard-tbl");
      var table1 = $("#Userdata").DataTable({
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
          url: "admin/userdata",
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
            render: function (data, type, row, meta) {
              if (data.inviterId) {
                return data.inviterId
              }
              else {
                return '-'
              }

            }

          },
          {
            data: null,
            render: function (data) {
              if (data.amount) {
                if (data.amount.$numberDecimal) {
                  return data.amount.$numberDecimal
                }
                else {
                  return data.amount
                }
              } else {
                return '-'
              }
            }

          },
          {
            data: null,
            render: function (data) {
              if (data.walletamount) {
                if (data.walletamount.$numberDecimal) {
                  return data.walletamount.$numberDecimal
                }
                else {
                  return data.walletamount
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
        order: [[1, "desc"]],
        Destroy: true,
      });

      //onclick userId navigate to all user details page
      $("#Userdata tbody").on("click", "#id_button", function () {
        var rowUserID = $(this)[0].innerHTML;
        console.log(rowUserID);
        naviagte('/invitedetails', { state: rowUserID })
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
          <h1><span> <i className="bi bi-people"></i></span> Users</h1>
        </div>
        {/* datatable section */}
        <section className="section dashboard mt-4">
          <div className="row">

            <div className="col-lg-12">
              <div className="row">

                <div className="col-12">
                  <div className="card recent-sales overflow-auto">


                    <div className="card-body">
                      <h4 className="card-title">Users Details</h4>
                      <table id="Userdata" className='table table-bordered table-striped tableFont' >
                        <thead>
                          <tr >
                            <th>Sr</th>
                            <th>UserId</th>
                            <th>inviterId</th>
                            <th>Agent Wallet</th>
                            <th>Main Wallet</th>
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

export default Dashboard
