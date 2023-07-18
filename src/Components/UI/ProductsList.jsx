import React from 'react'

import ProductCart from './ProductCart'

const ProductsList = ({data}) => {
  return (
    <>
      {
        data?.map((item , index) => (
          <ProductCart item={item} key={index} />   
        ))
      }
    </>
  )
}

export default ProductsList