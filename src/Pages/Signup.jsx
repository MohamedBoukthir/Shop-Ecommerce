import React,{useState} from 'react'

import { Container , Row , Col , Form , FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'

import Helmet from '../Components/Helmet/Helmet'
import '../Styles/Login.css'

const Signup = () => {

  const [username , setUsername] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [file , setFile] = useState(null)

  return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center' >
              <h3 className='fw-bold mb-4' >Signup</h3>

              <Form className='auth__form'>
              <FormGroup className='form__group' >
                  <input type="text" placeholder='Username' 
                  value={username} onChange={e => setUsername(e.target.value)} />
                </FormGroup>
                <FormGroup className='form__group' >
                  <input type="email" placeholder='Enter Your Email' 
                  value={email} onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup className='form__group' >
                  <input type="password" placeholder='Enter Your Password' 
                  value={password} onChange={e => setPassword(e.target.value)}/>
                </FormGroup>
                <FormGroup className='form__group' >
                  <input type="file" 
                   onChange={e => setFile(e.target.files[0])}/>
                </FormGroup>

                <button type='submit' className="buy__btn auth__btn">Create An Account</button>
                <p>Already Have An Account ? <Link to='/login'>Login Here</Link></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Signup