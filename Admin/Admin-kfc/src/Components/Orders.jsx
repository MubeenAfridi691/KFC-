import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

function Orders() {
  return (
    <div>
      <Header/>
      <div class="container-fluid">
    <div class="row">
      <div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
        <div class="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
            <ul class="nav flex-column">
              <li class="nav-item">
                <Link class="nav-link d-flex align-items-center gap-2 active" aria-current="page" to="/home">
                  <svg class="bi"><use xlink:href="#house-fill"/></svg>
                  Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link d-flex align-items-center gap-2" to="/order">
                  <svg class="bi"><use xlink:href="#file-earmark"/></svg>
                  Orders
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link d-flex align-items-center gap-2" to="/product">
                  <svg class="bi"><use xlink:href="#cart"/></svg>
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                  <svg class="bi"><use xlink:href="#people"/></svg>
                  Customers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                  <svg class="bi"><use xlink:href="#graph-up"/></svg>
                  Reports
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                  <svg class="bi"><use xlink:href="#puzzle"/></svg>
                  Integrations
                </a>
              </li>
            </ul>
  
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
              <span>Saved reports</span>
              <a class="link-secondary" href="#" aria-label="Add a new report">
                <svg class="bi"><use xlink:href="#plus-circle"/></svg>
              </a>
            </h6>
            <ul class="nav flex-column mb-auto">
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                  <svg class="bi"><use xlink:href="#file-earmark-text"/></svg>
                  Current month
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                  <svg class="bi"><use xlink:href="#file-earmark-text"/></svg>
                  Last quarter
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                  <svg class="bi"><use xlink:href="#file-earmark-text"/></svg>
                  Social engagement
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                  <svg class="bi"><use xlink:href="#file-earmark-text"/></svg>
                  Year-end sale
                </a>
              </li>
            </ul>
  
            <hr class="my-3"/>
  
            <ul class="nav flex-column mb-auto">
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                  <svg class="bi"><use xlink:href="#gear-wide-connected"/></svg>
                  Settings
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-flex align-items-center gap-2" href="#">
                  <svg class="bi"><use xlink:href="#door-closed"/></svg>
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Dashboard</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
              <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
            </div>
            <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
              <svg class="bi"><use xlink:href="#calendar3"/></svg>
              This week
            </button>
          </div>
        </div>
  
  
        <h2>Section title</h2>
        <div class="table-responsive small">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>random</td>
                <td>data</td>
                <td>placeholder</td>
                <td>text</td>
              </tr>
              <tr>
                <td>1,002</td>
                <td>placeholder</td>
                <td>irrelevant</td>
                <td>visual</td>
                <td>layout</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>data</td>
                <td>rich</td>
                <td>dashboard</td>
                <td>tabular</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>information</td>
                <td>placeholder</td>
                <td>illustrative</td>
                <td>data</td>
              </tr>
              <tr>
                <td>1,004</td>
                <td>text</td>
                <td>random</td>
                <td>layout</td>
                <td>dashboard</td>
              </tr>
              <tr>
                <td>1,005</td>
                <td>dashboard</td>
                <td>irrelevant</td>
                <td>text</td>
                <td>placeholder</td>
              </tr>
              <tr>
                <td>1,006</td>
                <td>dashboard</td>
                <td>illustrative</td>
                <td>rich</td>
                <td>data</td>
              </tr>
              <tr>
                <td>1,007</td>
                <td>placeholder</td>
                <td>tabular</td>
                <td>information</td>
                <td>irrelevant</td>
              </tr>
             
               
              
              
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
      
    </div>
  )
}

export default Orders
