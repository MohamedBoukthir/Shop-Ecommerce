import React , { useState , useEffect } from 'react'

import { Container , Row , Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Helmet from '../Components/Helmet/Helmet'
import products from '../assets/data/products'
import '../Styles/Home.css'

import heroImg from '../assets/images/hero-img.png'

import Services from '../Services/Services'
import ProductsList from '../Components/UI/ProductsList'

const Home = () => {

  const [data , setData] = useState(products)
  const year = new Date().getFullYear()

  useEffect (() => {
    const filteredProducts = products.filter(
      (item) => item.category === "chair"
    );

    setData(filteredProducts)
  }, []);



  return (
    <Helmet title={"Home"}>

    { /* Hero section */ }
      <section className="hero__section">
       <Container>
        <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">Trending Product In {year} </p>
                <h2>Make Your Interior Minimalistic & Modern</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eveniet aperiam asperiores dolore perspiciatis! Quos rerum quod obcaecati suscipit dignissimos!</p>
                <motion.button 
                  whileTap={ {scale: 1.2} } 
                  className="buy__btn">
                    <Link to='/shop'>
                      Shop Now
                    </Link> 
                </motion.button>
              </div>
            </Col>
            <Col>
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
       </Container>
      </section>

    { /* Services Section */  }
      <Services/>

    { /* Trending Product Section */ }
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='12' className="text-center" >
              <h2 className="section__title" >Trending Products</h2>
            </Col>
            <ProductsList data={data} />
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Home