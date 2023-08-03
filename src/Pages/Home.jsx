import React , { useState , useEffect } from 'react'

import { Container , Row , Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Helmet from '../Components/Helmet/Helmet'
import '../Styles/Home.css'

import heroImg from '../assets/images/hero-img.png'
import counterImg from '../assets/images/counter-timer-img.png'

import Services from '../Services/Services'
import ProductsList from '../Components/UI/ProductsList'
import Clock from '../Components/UI/Clock'

import UseGetData from '../Custom-hooks/UseGetData'

const Home = () => {

  const {data: products, loading} = UseGetData('products')

  const [trendingProducts , setTrendingProducts] = useState([]);
  const [bestSalesProducts , setBestSalesProducts] = useState([]);
  const [shoesProducts , setShoesProducts] = useState([]);
  const [capProducts , setCapProducts] = useState([]);
  const [popularProducts , setPopularProducts] = useState([]);

  const year = new Date().getFullYear()

  useEffect (() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "T-Shirt"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "hoodie"
    );

    const filteredShoesProducts = products.filter(
      (item) => item.category === "shoes"
    );

    const filteredCapProducts = products.filter(
      (item) => item.category === "cap"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );  

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setShoesProducts(filteredShoesProducts);
    setCapProducts(filteredCapProducts);
    setPopularProducts(filteredPopularProducts);
  }, [products]);



  return (
    <Helmet title={"Home"}>

    { /* Hero section */ }
      <section className="hero__section">
       <Container>
        <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">Trending Product In {year} </p>
                <h2>Embrace Urban Edge: Unleash Streetwear Style</h2>
                <p>Discover an extraordinary online shopping experience. 
                  Unleash your desires with an expansive collection, unbeatable deals,
                  and seamless navigation. Elevate your style, fulfill your needs, and
                  embrace effortless shopping today!</p>
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
            {
              loading ? <h5 className='fw-bold'>Loading...</h5> : 
              <ProductsList data={trendingProducts} />
            }
          </Row>
        </Container>
      </section>


    { /* Best Sales Section */ }
    <section className="best__sales">
      <Container>
        <Row>
           <Col lg='12' className="text-center" >
              <h2 className="section__title" >Best Sales</h2>
          </Col>
          {
              loading ? <h5 className='fw-bold'>Loading...</h5> : 
              <ProductsList data={bestSalesProducts} />
            }
        </Row> 
      </Container>
    </section>


    { /* Timer Count Section  */ }
    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='12' className='count__down-col' >
            <div className="clock__top-content">
              <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
              <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
            </div>
            <Clock/>
            <motion.button 
            whileTap={ {scale: 1.2} }
            className="buy__btn store__btn">
              <Link to='/shop'>
                Visit Store
              </Link>
            </motion.button>
          </Col>
          <Col lg='6' md='12' className='text-end counter__img'>
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>

    { /* New Arrivals Section */ }
    <section className="new__arrivals">
      <Container>
        <Row>
        <Col lg='12' className="text-center mb-5" >
              <h2 className="section__title" >New Arrivals</h2>
          </Col>

          {
              loading ? <h5 className='fw-bold'>Loading...</h5> : 
              <ProductsList data={shoesProducts} />
            }

          {
              loading ? <h5 className='fw-bold'>Loading...</h5> : 
              <ProductsList data={capProducts} />
            }
        </Row>
      </Container>
    </section>


    { /* Popular Category Section */ }
    <section className="popular__category">
      <Container>
        <Row>
        <Col lg='12' className="text-center mb-5" >
              <h2 className="section__title" >Popular In Category</h2>
          </Col>
          {
              loading ? <h5 className='fw-bold'>Loading...</h5> : 
              <ProductsList data={popularProducts} />
            }
        </Row>
      </Container>
    </section>


    </Helmet>
  )
}

export default Home