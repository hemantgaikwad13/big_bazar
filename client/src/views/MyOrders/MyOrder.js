import React, { useEffect, useState } from 'react';
import axios from "axios"
import "./MyOrder.css"


function MyOrder() {
  const [orders, setOrder] = useState([]);

  const fetchOrders = async () => {
    const user = JSON.parse(localStorage.getItem("user")) || null;

    const respose = await axios.get(`/orders/id?=${user._id}`)

    setOrder(respose?.data?.data);
  }

  useEffect(() => {
    fetchOrders();
  }, [[]]);
  return (
    <div>
      <h1 className='text-center'>My Orders</h1>

       {
        orders?.map((order, index)=>{
          const {product, quantity, shippingAdress} = order;
          return(<div key={index} className='order-card'>
            <h2>{product.name} </h2>
            <p>Quantity: {quantity}</p>
            <p>Price: {product.price}</p>
            <p>Total Amouunt:{product.price * quantity}</p>
            <p>Shipping Address:{shippingAdress}</p>
          </div>)
        })
       }
          </div>
          )
        }

export default MyOrder
