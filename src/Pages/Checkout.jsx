import React from 'react'

import { Container , Row , Col , Form , FormGroup } from 'reactstrap'
import { useSelector } from 'react-redux'

import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/CommonSection'

import '../Styles/Checkout.css'

const Checkout = () => {

  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)


  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout'/>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold' >Billing Information</h6>
              <Form className='billing__form'>

                <FormGroup className='form__group' >
                  <input type="text" placeholder='Your Name' />
                </FormGroup>

                <FormGroup className='form__group' >
                  <input type="email" placeholder='Your Email' />
                </FormGroup>

                <FormGroup className='form__group' >
                  <input type="number" placeholder='Your Phone Number' />
                </FormGroup>

                <FormGroup className='form__group' >
                  <input type="text" placeholder='Streer Address' />
                </FormGroup>

                <FormGroup className='form__group' >
                  <input type="text" placeholder='City' />
                </FormGroup>

                <FormGroup className='form__group' >
                  <input type="text" placeholder='Postal Code' />
                </FormGroup>

                <FormGroup className='form__group' >
                  <input type="text" placeholder='Country' />
                </FormGroup>

              </Form>
            </Col>

            <Col lg='4'>
              <div className="checkout__cart">
                <h6>Total Qty: <span> {totalQty} items </span></h6>
                <h6>Total: <span>TND {totalAmount} </span></h6>
                <h6> 
                  <span>
                    Shipping: <br /> 
                    Free Shipping
                  </span>
                   <span>TND 0</span>
                </h6>
                <h4>Total Cost: <span>TND {totalAmount} </span></h4>
                <button className="buy__btn auth__btn w-100 ">
                Place An Order
              </button>
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet> 
  )
}

export default Checkout