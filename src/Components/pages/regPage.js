import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'

const Register = () => {
  return(
    <div className = "regForm">

        <Form>

        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail2">
          <Form.Label> Confirm Your Email</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>

            <Form.Text>

              <Button variant="light">Submit</Button>

           </Form.Text>

          </Form>

    </div>
  );
}
export default Register;
