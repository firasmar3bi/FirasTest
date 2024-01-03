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
    <div className='container my-5 bg-body-tertiary rounded-5 h-100'>
      <div className='container row my-5 py-5'>
        {
          data?.orders
            ?
            <>
              <div className='col-6'>
                {/* <div className='cardImag w-75 d-flex justify-content-center align-items-center h'>
                  <img src={data.orders} alt="" className='w-75 rounded-5' />
                </div> */}
              </div>
              <div className='col-6'>
                {/* <div className='d-flex flex-column justify-content-between h-100'>
                  <div>
                    <h2>Name :</h2>
                    <p>{data.orders}</p>
                  </div>
                  <div>
                    <h2>Email :</h2>
                    <p>{data.orders}</p>
                  </div>
                  <div>
                    <h2>Role :</h2>
                    <p>{data.orders}</p>
                  </div>
                </div> */}
              </div>
            </>
            : <></>
        }
      </div>
    </div>
  )
}
