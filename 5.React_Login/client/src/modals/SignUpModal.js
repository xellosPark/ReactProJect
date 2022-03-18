import React from 'react'
import { Button, Container, Form, Modal } from 'react-bootstrap'
import { GoogleLogin } from 'react-google-login';
import HorizonLine from '../components/HorizonLine';

const SignUpModal = ( { show, onHide }) => {
  return (
    <Modal
      //{...props}
      show={ show }
      onHide= { onHide }
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container> 
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicConfirm Password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

        <div className="d-grid"  >
          <Button className="my-3" size="lg"  variant="info" type='button'>
            Sign UP
          </Button>
        </div>

      <HorizonLine text={"OR"} />
      <GoogleLogin
        render={ (renderProps) => {
          return (
          <div className="d-grid"  >
          <Button className='my-3'
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            style={{
              backgroundColor: "#176BEF",
              borderColor: "#176BEF",
            }}
          >
            <i className='fab fa-google'></i>Sign Up with Google
          </Button>
          </div>
          );
        }}
      />
      
      {/* <Modal.Footer>
        <Button variant="primary" type="button">
          Submit
        </Button>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer> */}   
        </Form>
      </Modal.Body> 
    </Container>
    </Modal>
  )
}

export default SignUpModal