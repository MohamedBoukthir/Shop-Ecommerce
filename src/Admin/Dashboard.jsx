import React from 'react'
import { Container , Row , Col } from 'reactstrap'

import UseGetData from '../Custom-hooks/UseGetData'

import '../Styles/Dashboard.css'

const Dashboard = () => {

  const {data: products} = UseGetData('products')
  const {data: users} = UseGetData('users')

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col className="lg-3">
              <div className="revenue__box">
                <h5>Total Sales</h5>
                <span>2000 TND</span>
              </div>
            </Col>
            <Col className="lg-3">
            <div className="orders__box">
                <h5>Orders</h5>
                <span>200</span>
              </div>
            </Col>
            <Col className="lg-3">
            <div className="products__box">
                <h5>Total Products</h5>
                <span> {products.length} </span>
              </div>
            </Col>
            <Col className="lg-3">
            <div className="users__box">
                <h5>Total Users</h5>
                <span> {users.length} </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Dashboard