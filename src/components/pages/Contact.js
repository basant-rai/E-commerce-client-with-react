import React from 'react'
import { Box, Container, Typography, TextField, Button } from "@mui/material"
import Nav from '../layout/NavBar'
import { Link } from 'react-router-dom'
const Contact = () => {
    return (
        <>
            <Nav />
            <div className='bg_image'>
                <div className='row ' >
                    <div className="inner mt-5 ">
                        <div className="container mx-auto text-start mt-5 ">
                            <div className="inner_box mx-5 py-5 ">
                                <h4 className="text-white mt-3">Contact</h4>
                                <ul className="nav" style={{ display: "inline-flex", listStyleType: "none" }}>
                                    <li className="nav-item"><Link className="fw-bold fs-6 text-white" style={{ textDecoration: "none" }}
                                        to="/">Home</Link></li>
                                    <li className="nav-item active text-white fs-6 ps-2 ">
                                        <i className="fa-solid fa-angle-right"></i>
                                        Contact
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Container className="mx-auto mt-5" sx={{ boxShadow: "5px 3px 10px", p: "30px", borderRadius: "50px", backgroundColor: "bl" }}>
                    <Box className="contact" sx={{ p: "50px", boxShadow: "1px 2px 10px", backgroundColor: "burlywood" }} display={"flex"}>
                        <Box className="address" width={'50%'} borderRight={'2px solid black'}>
                            <Typography variant='h4' >Our store</Typography>
                            <Typography variant='h6' >Kathmandu, Nepal</Typography>
                            <Typography  >123456789</Typography>
                            <Typography variant='body1'>@info@store.com </Typography>
                        </Box>
                        <Box className="contact-form ms-5" width={'50%'}>
                            <Typography variant="h5" className="fw-bold">Contact Us</Typography>
                            <TextField id="outlined-basic" label="Email" variant="outlined" size="small" fullWidth className='mb-2' />
                            <TextField id="outlined-basic" label="Subject" variant="outlined" size="small" fullWidth className='mb-2' />
                            <TextField id="outlined-basic" label="Body" variant="outlined" size="small" fullWidth className='mb-2' />
                            <Button variant="contained">Submit</Button>
                        </Box>


                    </Box>
                    <Box className="map">
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27689223729!2d85.29111335911601!3d27.709031933219393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1654165735057!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    </Box>

                </Container>
            </div>
        </>
    )
}

export default Contact