import React,{useState} from 'react'

import '../Styles/Shop.css'
import products from '../assets/data/products'

import { Container , Row , Col } from 'reactstrap'

import CommonSection from '../Components/UI/CommonSection'
import Helmet from '../Components/Helmet/Helmet'
import ProductList from '../Components/UI/ProductsList'


const Shop = () => {

  const [productsData , setProductsData] = useState(products)

  const handleFilter = e => {
    const filterValue = e.target.value;

    if(filterValue === 'hoodie') {
      const filtredProducts = products.filter(
        (item) => item.category === 'hoodie'
      );
      setProductsData(filtredProducts)
    }

    if(filterValue === 'watch') {
      const filtredProducts = products.filter(
        (item) => item.category === 'watch'
      );
      setProductsData(filtredProducts)
    }

    if(filterValue === 'cap') {
      const filtredProducts = products.filter(
        (item) => item.category === 'cap'
      );
      setProductsData(filtredProducts)
    }

    if(filterValue === 'T-Shirt') {
      const filtredProducts = products.filter(
        (item) => item.category === 'T-Shirt'
      );
      setProductsData(filtredProducts)
    }

    if(filterValue === 'shoes') {
      const filtredProducts = products.filter(
        (item) => item.category === 'shoes'
      );
      setProductsData(filtredProducts)
    }

  };

  return (
    <Helmet title='Shop'>
      <CommonSection title='Products'/>

      <section>
        <Container>
          <Row>
            <Col lg='3' md='3' >
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="hoodie">Hoodie</option>
                  <option value="shoes">Shoes</option>
                  <option value="t-shirt">T-Shirt</option>
                  <option value="cap">Cap</option>
                  <option value="watch">Watch</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='3' >
            <div className="filter__widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='6' >
              <div className="search__box">
                <input type="text" placeholder='Search..'/>
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            {
              productsData.length === 0? <h1>No Products Are Found</h1>
              : <ProductList data={productsData} /> 
            }
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Shop