import React, { useState }  from 'react';
import { useNavigate  } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styling/main.scss';

function MainRight() {

  const [number, setNumber] = useState("");
  const [password,setPassword]= useState("");
  const [confirmpass,setConfirmpass]=useState("");
  const [validated, setValidated] = useState(false);
  let navigate  = useNavigate ();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      navigate('/newApp/bar');
    }
    setValidated(true);
  };

  return (
    <div className='mainRight'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="mainRight__header"><p>Create an account</p></div>

  <Form.Group className="mb-3 text-secondary">
    <Form.Label>Your email address</Form.Label>
    <Form.Control type="email" required pattern=".+@gmail\.com"/>
    <Form.Control.Feedback type="invalid">Please provide a valid gmail.</Form.Control.Feedback>
    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
  </Form.Group>

  <Form.Group className="mb-3 text-secondary">
    <Form.Label>Your password</Form.Label>
    <Form.Control type="password"  value={password} onChange={event => setPassword(event.target.value)} required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/>
    <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
  </Form.Group>

  <Form.Group className="mb-3 text-secondary">
    <Form.Label>Confirm your password</Form.Label>
    <Form.Control type="password" value={confirmpass} onChange={event => setConfirmpass(event.target.value)}
      isInvalid={password!==confirmpass} />
      <Form.Control.Feedback type="invalid"> Password does not match.</Form.Control.Feedback>
  </Form.Group>

  <Form.Group className="mb-3 text-secondary">
    <Form.Label>Your full name</Form.Label>
    <Form.Control type="text" required/>
    <Form.Control.Feedback type="invalid">This field cannot be empty.</Form.Control.Feedback>
  </Form.Group>

  <Form.Group className="mb-3 text-secondary">
    <Form.Label>Your phone number</Form.Label>
    <Form.Control  type="tel" value={number} onChange={event => setNumber(event.target.value)} required 
      maxLength={10} minLength={10}/>
    <Form.Control.Feedback type="invalid">Please provide a valid Phone Number. </Form.Control.Feedback>
  </Form.Group>

  <Form.Check
        className='fw-bold'
        inline
        label="I read and agree Terms and Conditions"
      />
    <div className="button">
        <Button type="submit" variant="primary col-6 mx-auto">Create account</Button>
    </div>
  </Form>
</div>
  )
}

export default MainRight