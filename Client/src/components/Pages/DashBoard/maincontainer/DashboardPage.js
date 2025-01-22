import React from "react";
import MainHeader from "./MainHeader";
const DashboardPage = () => {
  return (
    <>
      <MainHeader />
      <section class="section dashboard">
        <div class="container-fluid ">
          {/* <!-- Left side columns --> */}

          <div class="row ">
            {/* <!-- Sales Card --> */}
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card sales-card">
                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown">
                    <i class="bi bi-three-dots"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <a class="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">
                    Sales <span>| Today</span>
                  </h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-cart"></i>
                    </div>
                    <div class="ps-3">
                      <h6>145</h6>
                      <span class="text-success small pt-1 fw-bold">
                        12%
                      </span>{" "}
                      <span class="text-muted small pt-2 ps-1">increase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Sales Card -->

            <!-- Revenue Card --> */}
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card revenue-card">
                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown">
                    <i class="bi bi-three-dots"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <a class="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">
                    Revenue <span>| This Month</span>
                  </h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-currency-dollar"></i>
                    </div>
                    <div class="ps-3">
                      <h6>$3,264</h6>
                      <span class="text-success small pt-1 fw-bold">
                        8%
                      </span>{" "}
                      <span class="text-muted small pt-2 ps-1">increase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* !-- End Revenue Card -->

            <!-- Customers Card --> */}
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card customers-card">
                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown">
                    <i class="bi bi-three-dots"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <a class="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">
                    Customers <span>| This Year</span>
                  </h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-people"></i>
                    </div>
                    <div class="ps-3">
                      <h6>1244</h6>
                      <span class="text-danger small pt-1 fw-bold">
                        12%
                      </span>{" "}
                      <span class="text-muted small pt-2 ps-1">decrease</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Customers Card -->

            <!-- Reports -->
            <!-- End Reports -->

            <!-- Recent Sales --> */}
          <div class="row">
            <div class="col-12 ">
              <div class=" bg-light shadow recent-sales overflow-auto ">
                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown">
                    <i class="bi bi-three-dots"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li>
                      <a class="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">
                    Recent Sales <span>| Today</span>
                  </h5>

                  <div class="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
                    <div class="datatable-top d-flex gap-5">
                      <div class="datatable-dropdown">
                        <label>
                          <select class="datatable-selector form-select" name="per-page">
                            <option value="5">5</option>
                            <option value="10" selected="">
                              10
                            </option>
                            <option value="15">15</option>
                            <option value="-1">All</option>
                          </select>{" "}
                          entries per page
                        </label>
                      </div>
                      <div class="datatable-search">
                        <input
                          class="datatable-input form-control"
                          placeholder="Search..."
                          type="search"
                          name="search"
                          title="Search within table"
                        />
                      </div>
                    </div>
                    <div class="datatable-container">
                      <table className="table table-striped table-hover">
                        <thead style={{backgroundColor:"lightgray"}}>
                          <tr>
                            <th
                              scope="col"
                             
                            >
                           #
                            </th>
                            <th
                              scope="col"
                              data-sortable="true"
                              style={{ width: "23.613963039014372%" }}
                            >
                           Customer
                            </th>
                            <th
                              scope="col"
                              data-sortable="true"
                              style={{ width: "39.630390143737166%" }}
                            >
                           Product
                            </th>
                            <th
                              scope="col"
                              data-sortable="true"
                              style={{ width: "11.088295687885012%" }}
                            >
                          Price
                            </th>
                            <th
                              scope="col"
                              data-sortable="true"
                              class="red"
                              style={{ width: "14.887063655030802%" }}
                            >
                           Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-index="0">
                            <td scope="row">
                              <a href="#">#2457</a>
                            </td>
                            <td>Brandon Jacob</td>
                            <td>
                              <a href="#" class="text-primary">
                                At praesentium minu
                              </a>
                            </td>
                            <td>$64</td>
                            <td class="green">
                              <span class="badge bg-success">Approved</span>
                            </td>
                          </tr>
                          <tr data-index="1">
                            <td scope="row">
                              <a href="#">#2147</a>
                            </td>
                            <td>Bridie Kessler</td>
                            <td>
                              <a href="#" class="text-primary">
                                Blanditiis dolor omnis similique
                              </a>
                            </td>
                            <td>$47</td>
                            <td class="green">
                              <span class="badge bg-warning">Pending</span>
                            </td>
                          </tr>
                          <tr data-index="2">
                            <td scope="row">
                              <a href="#">#2049</a>
                            </td>
                            <td>Ashleigh Langosh</td>
                            <td>
                              <a href="#" class="text-primary">
                                At recusandae consectetur
                              </a>
                            </td>
                            <td>$147</td>
                            <td class="green">
                              <span class="badge bg-success">Approved</span>
                            </td>
                          </tr>
                          <tr data-index="3">
                            <td scope="row">
                              <a href="#">#2644</a>
                            </td>
                            <td>Angus Grady</td>
                            <td>
                              <a href="#" class="text-primar">
                                Ut voluptatem id earum et
                              </a>
                            </td>
                            <td>$67</td>
                            <td class="green">
                              <span class="badge bg-danger">Rejected</span>
                            </td>
                          </tr>
                          <tr data-index="4">
                            <td scope="row">
                              <a href="#">#2644</a>
                            </td>
                            <td>Raheem Lehner</td>
                            <td>
                              <a href="#" class="text-primary">
                                Sunt similique distinctio
                              </a>
                            </td>
                            <td>$165</td>
                            <td class="green">
                              <span class="badge bg-success">Approved</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="datatable-bottom">
                      <div class="datatable-info">
                      <strong>  Showing 1 to 5</strong>
                      </div>
                      <nav class="datatable-pagination">
                        <ul class="datatable-pagination-list"></ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Recent Sales --> */}

            {/* <!-- Top Selling --> */}
         
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
