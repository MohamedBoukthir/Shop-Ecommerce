import React,{useState} from 'react'
import { Container , Row , Col , Form , FormGroup } from 'reactstrap'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { db , storage } from '../Firebase.config'
import { ref , uploadBytesResumable , getDownloadURL } from 'firebase/storage'
import { collection , addDoc } from 'firebase/firestore'

const AddProducts = () => {

  const [enterTitle, setEnterTitle] = useState('')
  const [enterShortDesc, setEnterShortDesc] = useState('')
  const [enterDescription, setEnterDescription] = useState('')
  const [enterCategory, setEnterCategory] = useState('')
  const [enterPrice, setEnterPrice] = useState('')
  const [enterProductImg, setEnterProductImg] = useState(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const addProduct = async(e) => {
    e.preventDefault()
    setLoading(true)

    //add product to the database
    try {
      const docRef = await collection(db, 'products')
      const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`)
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg)

      uploadTask.on(() => {
        toast.error('Images Not Uploaded')
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          await addDoc(docRef , {
            productName: enterTitle,
            shortDesc: enterShortDesc,
            description: enterDescription,
            category: enterCategory,
            price: enterPrice,
            imgUrl: downloadURL,
          });
        });
      }
    );
      setLoading(false)
      toast.success('Product Successfully Added')
      navigate('/dashboard/all-products')
    } catch (err) {
      setLoading(false)
      toast.error('Product Not Added')  
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            {loading ? (<h4 className='py-5'>Loading...</h4>
            ) : ( 
             <>
            <h4 className='mb-5'>Add Product</h4>
            <Form onSubmit={addProduct}>
              <FormGroup className='form__group'>
                <span>Product Name</span>
                <input type="text" placeholder='Enter Product Name' 
                value={enterTitle} onChange={e => setEnterTitle(e.target.value)} 
                required/>
              </FormGroup>
              <FormGroup className='form__group'>
                <span>Short Description</span>
                <input type="text" placeholder='Enter Short Description'
                value={enterShortDesc} onChange={e => setEnterShortDesc(e.target.value)} required />
              </FormGroup>
              <FormGroup className='form__group'>
                <span>Description</span>
                <input type="text" placeholder='Enter Description' 
                value={enterDescription} onChange={e => setEnterDescription(e.target.value)} required />
              </FormGroup>
              <div className='d-flex align-items-center justify-content-between gap-5'>
                  <FormGroup className='form__group w-50'>
                    <span>Product Price</span>
                    <input type="number" placeholder='Enter Product Price' 
                    value={enterPrice} onChange={e => setEnterPrice(e.target.value)} required />
                  </FormGroup>
                  <FormGroup className='form__group w-50'>
                    <span>Category</span>
                    <select className='w-100 p-2'
                    value={enterCategory} onChange={e => setEnterCategory(e.target.value)} >
                      <option>Select Category</option>
                      <option value="hoodie">Hoodie</option>
                      <option value="shoes">Shoes</option>
                      <option value="T-Shirt">T-Shirt</option>
                      <option value="cap">Cap</option>
                      <option value="watch">Watch</option>
                    </select>
                  </FormGroup>
              </div>
              <div>
                  <FormGroup className='form__group'>
                    <span>Product Image</span>
                    <input type="file" onChange={e => setEnterProductImg(e.target.files[0])} required/>
                  </FormGroup>
              </div>
              <button className="buy__btn" type='submit'>Add Product</button>
            </Form>
            </>
             )
            }
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddProducts