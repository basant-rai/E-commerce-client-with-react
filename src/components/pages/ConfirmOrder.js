import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography} from '@mui/material';
import Nav from '../layout/NavBar';
import { useSelector } from 'react-redux';
import { IMAGE } from '../../config';
import CheckoutProgress from '../CheckoutProgress';
import { Link } from 'react-router-dom';


const ConfirmOrder = () => {
    
    const cart_items = useSelector(state => state.cart.cart_items)
    console.log(cart_items)

    const no_of_items_in_cart = cart_items.map(i => i.quantity)
    const total_items = no_of_items_in_cart.reduce((acc, cur) => {
        return acc + cur
    })
    // console.log(totaacc,curl_items)4
    const individual_total = cart_items.map(i => i.quantity * i.price)
    const total_price = individual_total.reduce((acc, cur) => acc + cur)

    sessionStorage.setItem('order_total',total_price)

   
   

    return (
        <>
            <Nav />
            <CheckoutProgress/>
            <div className='row m-5 p-5'>
                {
                    cart_items.length > 0 ?
                        <>
                            <div className='d-flex'>
                                <TableContainer className=" mt-3 mx-auto text-center" sx={{ width: "70%", padding: "0px 20px", border: "5px solid grey", borderRadius: "20px" }}>
                                    <h3 className='text-center'>Cart Item</h3>
                                    <Table>
                                        <TableHead className="text-center">
                                            <TableRow >
                                                <TableCell size="small">SN</TableCell>
                                                <TableCell size='small'>Product Image</TableCell>
                                                <TableCell className='text-center'>Product Name</TableCell>
                                                <TableCell className='text-center'>Unit price</TableCell>
                                                <TableCell className='text-center'>Quantity</TableCell>
                                                <TableCell className='text-center'>Total price</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody >
                                            {
                                                cart_items.map((item, i) => {
                                                    return <>
                                                        <TableRow key={i}>
                                                            <TableCell>
                                                                {i + 1}
                                                            </TableCell>
                                                            <TableCell size='small'>
                                                                <img src={`${IMAGE}/${item.image}`} height={"200px"} alt="" />
                                                            </TableCell>
                                                            <TableCell className='text-center'>
                                                                <Typography >{item.name}</Typography>
                                                            </TableCell>
                                                            <TableCell className='text-center'>
                                                                <Typography >Rs. {item.price}</Typography>
                                                            </TableCell>
                                                            <TableCell className=' text-center'>
                                                                <Typography >{item.quantity}</Typography>                                                                 
                                                            </TableCell>
                                                            <TableCell className='text-center'>
                                                                <Typography >Rs. {item.price * item.quantity}</Typography>
                                                            </TableCell>
                                                            
                                                        </TableRow>
                                                    </>
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <div className='p-5 m-5 shadow-lg border' syle={{ height: '50px', width: "30%" }}>
                                    <h4 className='underlined my-2'>Order Summary</h4>
                                    <hr />
                                    <h6 className='underlined my-2'>Total Items:{total_items}</h6>
                                    <h6 className='underlined my-2'>Total Price:{total_price}</h6>
                                    <hr />
                                    <Link to='/shipping'className='btn btn-warning mt-3 text-center'>proceed to shipping</Link>
                                </div>
                            </div>
                        </> :

                        <div className='alert alert-danger'>No items in cart</div>
                }
            </div>

        </>
    )
}

export default ConfirmOrder;