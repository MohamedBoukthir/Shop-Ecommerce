import React from 'react'

import ProductCart from './ProductCart'

const ProductsList = ({data}) => {
  return (
    <>
      {
        data?.map(item => (
          <ProductCart item={item} />   
        ))
      }
    </>
  )
}

export default ProductsList