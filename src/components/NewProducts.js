import React from 'react'
import ProductForm from './ProductForm';
import './NewProduct.css'
const NewProducts = (props) => {
  return (
      <div className='new-product'>
          <ProductForm />
    </div>
  )
}

export default NewProducts;