import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav class=" bg-white shadow-sm py-lg-2 py-4">
<div class="container nav d-block  navbar-expand-lg  ">
  <div class="row align-items-center justify-content-center">
    <div class="col-lg-4 col-5">
<input type='text' className='form-control' /> 
    </div>
    <div class="col-lg-4 d-lg-block d-none">
            <div class="justify-content-center d-lg-flex d-none">
      <a class="navbar-brand  py-2 text-center  m-0" href="index.html">
    
      <img class="m-0" width="181" src="assets/imgs/home/image1.svg" />
    </a>
      </div></div>
    <div class="col-lg-4 col-6">

      <div class="d-flex justify-content-end" id="navbarSupportedContent">

        <form class="d-flex ">

      <div class="px-2 " onclick="document.location='washList.html'" role="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3.66275 13.2136L9.82377 19.7066C11.0068 20.9533 12.9932 20.9534 14.1762 19.7066L20.3372 13.2136C22.5542 10.8771 22.5543 7.08895 20.3373 4.75248C18.1203 2.416 14.5258 2.416 12.3088 4.75248V4.75248C12.1409 4.92938 11.8591 4.92938 11.6912 4.75248V4.75248C9.47421 2.416 5.87975 2.416 3.66275 4.75248C1.44575 7.08895 1.44575 10.8771 3.66275 13.2136Z" stroke="#0C0C0C" stroke-width="1.5"/>
    </svg>
    </div>
          <div class="px-2 "  >
          <a href="shoppingCart.html">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
          <path d="M2.53715 9.47134C2.80212 7.48412 4.49726 6 6.50207 6H13.4979C15.5027 6 17.1979 7.48412 17.4628 9.47135L18.3962 16.4713C18.7159 18.8693 16.8504 21 14.4313 21H5.56873C3.14958 21 1.2841 18.8693 1.60382 16.4713L2.53715 9.47134Z" stroke="#0C0C0C" stroke-width="1.5"/>
          <path d="M14 8V5C14 2.79086 12.2091 1 10 1V1C7.79086 1 6 2.79086 6 5L6 8" stroke="#0C0C0C" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        </a>
          </div>
        </form>
      </div>
    </div>

  </div>






</div>
</nav>
    <nav class="navbar navbar-expand-lg  bg-black ">
    <div class="container nav-container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
      <i class="fa-solid fa-bars text-white"></i>
      </button>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        
        <div class="offcanvas-body header">
          <ul class="navbar-nav  flex-grow-1 m-auto  mb-2 mb-lg-0 ">
            <li class="nav-item">
              <Link class="nav-link " aria-current="page" href="/" >Home</Link>
            </li>
         
          </ul>
          <form class="d-lg-none d-flex align-items-center fs-4" role="search">
            <div class="px-2 search-input-icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="px-2 " onclick="document.location='emptycard.html'">
              <i class="fa-solid fa-bag-shopping"></i>
              </div>
          </form>
        </div>
      </div>
    </div>
    </nav>
    </>
  )
}
