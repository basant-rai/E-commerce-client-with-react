import React from 'react'
import Caraousel from '../Caraousel'
import Footer from '../layout/Footer'
import Nav from '../layout/NavBar'
import Product from '../Product'

const Home = () => {
  return (
    <div>
        <Nav/>
        <Caraousel/>      
        {/* <Product /> */}
        <Footer/>
       
    </div>
  )
}

export default Home