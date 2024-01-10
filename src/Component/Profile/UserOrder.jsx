import React, { useContext, useState, useEffect } from 'react'
import { UserOrderContext } from '../Context/OrderContext'

export default function UserOrder() {

  const { GetOrderContext } = useContext(UserOrderContext);

  const [data, setData] = useState(null);

  const GetOrder = async () => {
    const data = await GetOrderContext()
    setData(data)
  }
  useEffect(() => {
    GetOrder()
  }, []);


  return (
    <div className='container my-5 py-2 bg-body-tertiary rounded-5 h-100 w-100'>
      <div className='container row my-5 py-5 w-100'>
              <table className="table table-striped w-100">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th>Order Date</th> 
                    <th>Product Name</th>
                    <th>Order Status</th>
                    <th>Order Address</th>
                  </tr>
                </thead>
                <tbody>
        {
          data?.orders ? data.orders.map((order, index) =>
           
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td className='w-25'>{order.createdAt}</td>
                    <td >{order.products[0].productId.name}</td>
                    <td>{order.status}</td>
                    <td>{order.address}</td>
                  </tr>
            
          )
          : <></>
        }
        </tbody>
        </table>
      </div>
    </div>
  )
}
