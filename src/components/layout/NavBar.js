import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, signOut } from '../../Api/userApi'
import "./nav.css"

const Nav = () => {
  let data = isAuthenticated();
  let user = data.user
  // console.log(user)
  let navigate = useNavigate()
  const signOutClick =(e)=>{
    e.preventDefault()
    signOut()
    navigate('/')
    
  }
  return (
    <>
      <div className='fixed-to'>
        <div className='row mx-auto bg-dark' style={{ borderBottom: "0.5px solid white", textAlign: 'center' }}>
          <div className='col-md-4 ' >
            <Link className=" Brand navbar-brand fs-2" to="/" style={{ color: "beige" }}>foot<span className='fw-bold wear' style={{ color: "yellowgreen" }}>Wear</span></Link>
          </div>
          <div className='col-md-4 my-auto'>
            <form className="d-flex">
              <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-light" type="submit">Search</button>
            </form>
          </div>
          {/* <div className='col-md-4'>
              <Link to="/register"><i className="bi bi-person-plus fs-3  me-5" style={{ color: "yellowgreen" }} ></i></Link>
              <Link to="/signin"><i className="bi bi-box-arrow-right fs-3 me-5" style={{ color: "yellowgreen" }}></i></Link>
              <Link to="/cart"><i className="bi bi-minecart-loaded fs-3 " style={{ color: "yellowgreen" }}></i></Link>

            </div> */}
          <div className='col-md-4'>


            {
              !user &&
              <>
              <Link to="/register"><i className="bi bi-person-plus fs-3  me-5" style={{ color: "yellowgreen" }} ></i></Link>
              <Link to="/cart"><i className="bi bi-minecart-loaded fs-3  me-5" style={{ color: "yellowgreen" }}></i></Link>
              <Link to="/signin"><i className="bi bi-box-arrow-right fs-3" style={{ color: "yellowgreen" }}></i></Link>
              </>
            }
            {
              user && user.role === 0 &&
              <>
                <Link to="/user/profile" className='bi bi-person-circle fs-3 me-5' style={{ color: "yellowgreen" }}></Link>
                <Link to="/cart"><i className="bi bi-minecart-loaded fs-3 me-5" style={{ color: "yellowgreen" }}></i></Link>
              </>
            }
            {
              user && user.role === 1 &&
              <>
                <Link to="/admin/dashboard"><i class="bi bi-speedometer2 fs-3 me-5" style={{ color: "yellowgreen" }}></i></Link>
              </>
            }
            {
              user &&
              <>
                <Link to='#' onClick={signOutClick} className='bi bi-box-arrow-left fs-3 me-5' style={{ color: "yellowgreen" }}></Link>
              </>
            }
          </div>
        </div>



        <nav className="navbar navbar-expand-lg " >
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0  mx-auto" >
                <li className="nav-item">
                  <Link className="nav-link  " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  " to="/deals">Product</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/blogs">Blogs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Nav