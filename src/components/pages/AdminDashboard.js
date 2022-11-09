import React from 'react'
import AdminSidebar from '../layout/AdminSidebar'
// import Nav from '../layout/NavBar'
import Footer from '../layout/Footer'

const AdminDashboard = () => {
    return (
        <>
            {/* <Nav/> */}
            <div className='container-fliud'>
                <div className='row '>
                    <div className='col-2 ps-0' >
                        <AdminSidebar />
                    </div>
                    <div className='col-10  mt-2'>
                        <div className='d-flex justify-content-between'>
                            <h1>Welcome to Dashboard</h1>
                            <input className="form-control w-25 rounded-5 border-2 " type="text" placeholder="Search" aria-label="Search" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default AdminDashboard