import React from 'react'
import { useState } from 'react';
const ProductForm = (props) => {

  // // with an object
  // const [fullProduct, setfullProduct] = useState({
  //   title: '',
  //   date:'',
  // });

  // function setFullProduct(prev) {
    
  // }

  const [title, settitle] = useState('');
  const [date, setdate] = useState('');


  function titleChangeHandler(event) {
    settitle(event.target.value);
    console.log(event.target.value);  // event default parameter hai 
  }
 

  function dateChangeHandler(event) {
    setdate(event.target.value);
    console.log(date);
  }
  
  
  function submitHandler(event) {
    event.preventDefault();
    // const ProdutData=()=> {
    //   title: title,
    //     date: date;
    // }

    console.log(event);
    props.pranay();

  }
  
   


  return (
      <form onSubmit={submitHandler}>
          <div new-product>
              <label htmlFor="">Title</label>
              <input type="text" onChange={titleChangeHandler} name="" id="" />
          </div>
          <div new-product>
              <label htmlFor="">date</label>
              <input type="date" onChange={dateChangeHandler}  max='2025-01-01' min='01-01-2023' name="" id="" />
          </div>
          <button >Submit Now</button>
    </form>
  )
}

export default ProductForm