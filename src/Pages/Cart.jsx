import React from 'react'

import { Container , Row , Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { cartActions } from '../Redux/Slices/CartSlice'
import { useSelector , useDispatch } from 'react-redux'

import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/CommonSection'
import '../Styles/Cart.css'

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)

  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Cart' />
        <section>
          <Container>
            <Row>
              <Col lg='9'>
              {


                cartItems.length === 0 ? ( 
                  <h2 className='fs-4 text-center' >No Item Added To The Cart</h2>
                 ) : (
                <table className='table bordered'>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>
                      Delete
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {
                    cartItems.map((item , index) => (
                      <Tr item={item} key={index} />
                    ))
                  }

                </tbody>
              </table>


              )}
              </Col>

              <Col lg='3'></Col>

            </Row>
          </Container>
        </section>
    </Helmet>
    )
}

const Tr = (item) => {

  const dispatch = useDispatch()
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }

  return <tr>
     <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>{item.price} TND</td>
      <td>{item.quantity}px</td>
      <td>
        <motion.i 
        onClick={deleteProduct}
        whileTap={{ scale: 1.2 }}
        class="ri-delete-bin-line">
        </motion.i>
      </td>
    </tr>
}

export default Cart