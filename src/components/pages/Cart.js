import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography, ButtonGroup, Button } from '@mui/material';
import Nav from '../layout/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { IMAGE } from '../../config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addItemToCart, removeItemFromCart } from '../../Redux/Action/cartAction';
import { Link } from 'react-router-dom';


const Cart = () => {
    // const cart_items = [{
    //     Product_name: "Fila",
    //     Product_description: "Samsung galaxy Ultra ",
    //     Product_image: "./images/p6.jpeg",
    //     Product_price: "30000"
    // },
    // {
    //     Product_name: "Adidas",
    //     Product_description: "iphone 12 pro",
    //     Product_image: "./images/p7.jpg",
    //     Product_price: "30000"
    // },
    // {
    //     Product_name: "Converse",
    //     Product_description: "Mi note 11pro",
    //     Product_image: "./images/p3.jpg",
    //     Product_price: "30000"
    // },
    // {
    //     Product_name: "DC",
    //     Product_description: "Mi note 11pro",
    //     Product_image: "./images/p4.jpg",
    //     Product_price: "30000"
    // }
    // ]
    const cart_items = useSelector(state => state.cart.cart_items)
    console.log(cart_items)

    const no_of_items_in_cart = cart_items.map(i => i.quantity)
    const total_items = no_of_items_in_cart.reduce((acc, cur) => {
        return acc + cur
    })
    // console.log(totaacc,curl_items)4
    const individual_total = cart_items.map(i => i.quantity * i.price)
    const total_price = individual_total.reduce((acc, cur) => acc + cur)

    const dispatch = useDispatch()
    const increaseItem = (item) => e => {
        e.preventDefault();
        let quantity = item.quantity
        let stock = item.stock
        quantity++
        if (quantity > stock) {
            toast.error(item.name + "Out of stock")
        } else {
            dispatch(addItemToCart(item.product, quantity))
            toast.success(item.name + "Count increased in cart")
        }
    }

    const decreaseItem = (item) => e => {
        e.preventDefault();
        let quantity = item.quantity
        // let stock = item.stock
        quantity--
        if (quantity == 0) {
            dispatch(removeItemFromCart(item.product))
            toast.error(item.name + "Item has been removed succesfully")
        } else {
            dispatch(addItemToCart(item.product, quantity))
            toast.warning(item.name + "Count decreased in cart")
        }
    }
    const removeItem = (item) => e => {
        e.preventDefault();
        dispatch(removeItemFromCart(item.product))
        toast.warning(item.name + "Item removed from cart")
    }

    return (
        <>
            <ToastContainer theme='colored' position='top-right' />
            <Nav />
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
                                                <TableCell className='text-center'>Action</TableCell>
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
                                                            <TableCell className='w-25 mx-auto'>
                                                                <ButtonGroup className='mx-auto'>
                                                                    <Button variant="contained" color="success" onClick={decreaseItem(item)}>-</Button>
                                                                    <input type={'text'} className='w-25 text-center' readOnly value={item.quantity} />
                                                                    <Button variant="contained" color="error" onClick={increaseItem(item)}>+</Button>
                                                                </ButtonGroup>
                                                            </TableCell>
                                                            <TableCell className='text-center'>
                                                                <Typography >Rs. {item.price * item.quantity}</Typography>
                                                            </TableCell>
                                                            <TableCell className='text-center'>
                                                                <ButtonGroup>
                                                                    <Button variant="contained" color="error"><i className='bi bi-trash fs-3' onClick={removeItem(item)} /></Button>
                                                                </ButtonGroup>
                                                            </TableCell>
                                                        </TableRow>
                                                    </>
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <div className='p-5 m-5 shadow-lg ' syle={{ height: '50px', width: "30%" }}>
                                    <h4 className='underlined my-2'>Order Summary</h4>
                                    <hr />
                                    <h6 className='underlined my-2'>Total Items:{total_items}</h6>
                                    <h6 className='underlined my-2'>Total Price:{total_price}</h6>
                                    <hr />
                                    <Link to='/confirmorder' className='btn btn-warning mt-3 text-center'>proceed to checkout</Link>
                                </div>
                            </div>
                        </> :

                        <div className='alert alert-danger'>No items in cart</div>
                }
            </div>

        </>
    )
}

export default Cart