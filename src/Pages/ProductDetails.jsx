import React,{useState , useRef , useEffect} from 'react'

import { Container , Row , Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { cartActions } from '../Redux/Slices/CartSlice'
import { toast } from 'react-toastify'

import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/CommonSection'
import ProductsList from '../Components/UI/ProductsList'
import '../Styles/Product-details.css'

import { db } from '../Firebase.config'
import { doc , getDoc } from 'firebase/firestore'

import UseGetData from '../Custom-hooks/UseGetData'

const ProductDetails = () => {

  const [product , setProduct] = useState({})

  const [tab , setTab] = useState('desc')
  const [rating , setRating] = useState(null)

  const reviewUser =useRef('')
  const reviewMsg = useRef('')

  const dispatch = useDispatch()

  const { id } = useParams()

  const {data: products} = UseGetData('products')

  const docRef = doc(db , 'products' , id)

  useEffect(() => {
    const getProduct = async() => {
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()){
        setProduct(docSnap.data())
      } else {
        console.log('No Product')
      }
    }
    getProduct()
  },[])

  const { 
      imgUrl ,
      productName ,
      price , 
      //avgRating , 
      //reviews , 
      description , 
      shortDesc,
      category
      } = product;

  const relatedProducts = products.filter(item => item.category === category)

  const submitHandler = (e) => {
    e.preventDefault()

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    console.log(reviewObj)
    toast.success('Review Submitted')
  };

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image:imgUrl,
      productName,
      price,     
    })
  );

    toast.success('Product Added To Your Cart');
};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>
      <CommonSection title={productName}/>
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt="" />
            </Col>

            <Col lg='6'>
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span >
                      <i class="ri-star-s-fill"></i>
                      </span>
                    <span >
                      <i class="ri-star-s-fill"></i>
                      </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                      </span>
                    <span >
                      <i class="ri-star-s-fill"></i>
                      </span>
                    <span >
                      <i class="ri-star-half-s-fill"></i>
                      </span>
                  </div>

                  <p>
                  {/*  ( <span>{avgRating}</span> Ratings ) */}
                    </p>
                </div>
                
                <div className='d-flex align-items-center gap-5'>
                  <span className='product__price' > {price} TND </span>
                   <span>Category: {category.toUpperCase()} </span>   
                </div>
                <p className='mt-3'> {shortDesc} </p>
               
                <motion.button 
                whileTap={{ scale : 1.2 }}
                className="buy__btn"
                onClick={addToCart}>
                  Add To Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab__wrapper d-flex align-item-center gap-5">
                <h6 className={`${tab ==='desc' ? "active__tab" : "" }`}
                onClick={() => setTab('desc')}>
                  Description
                </h6>
                <h6 className={`${tab ==='rev' ? 'active__tab' : '' }`}
                onClick={() => setTab('rev')}>
                  Review 
                  </h6>
              </div>

            { tab === 'desc' ? 
            (<div className="tab__content mt-5">
              <p> {description} </p>
              </div>
              ) : (
              <div className='product__review mt-5'>
                <div className="review__wrapper">
                  <ul>
                    {/*
                      reviews?.map((item , index) =>(
                        <li key={index} className='mb-4'>
                          <h6>Mohamed Boukthir</h6>
                          <span> {item.rating} (Rating) </span>
                          <p> {item.text} </p>
                        </li>
                      ))*/}
                  </ul>

                  <div className="review__form">
                    <h4>Leave A Message About Your Experience</h4>
                    <form action="" 
                    onSubmit={submitHandler}>
                      <div className="form__group">
                        <input type="text" placeholder='Enter Name' ref={reviewUser} required />
                      </div>
                      <div className="form__group d-flex align-items-center gap-5 rating__group">
                        <motion.span  whileTap={{scale:1.2}}
                         onClick={()=>setRating(1)}>
                          1 <i class="ri-star-s-fill"></i>
                        </motion.span>
                        <motion.span  whileTap={{scale:1.2}}
                        onClick={()=>setRating(2)}>
                          2 <i class="ri-star-s-fill"></i>
                          </motion.span>
                        <motion.span whileTap={{scale:1.2}}
                         onClick={()=>setRating(3)}>
                          3 <i class="ri-star-s-fill"></i>
                          </motion.span>
                        <motion.span whileTap={{scale:1.2}}
                        onClick={()=>setRating(4)}>
                          4 <i class="ri-star-s-fill"></i>
                          </motion.span>
                        <motion.span whileTap={{scale:1.2}}
                         onClick={()=>setRating(5)}>
                          5 <i class="ri-star-s-fill"></i>
                          </motion.span>
                      </div>
                      <div className="form__group">
                        <textarea
                         rows={4}
                         type="text" 
                         placeholder='Review Message ...' 
                         ref={reviewMsg}
                         required />
                      </div>
                      <motion.button
                        whileTap={{scale:1.2}}
                       type='submit' className="buy__btn">
                        Review
                       </motion.button>
                    </form>
                  </div>
                </div>
              </div>
            )}       
            </Col>

            <Col lg='12' className='mt-5'>
              <h2 className="related__title">You Might Also Like</h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
    )
}

export default ProductDetails