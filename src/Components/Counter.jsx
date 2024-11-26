import React, { useState } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from '../Redux/counterSlice';


function Counter() {

const [amount,setAmount]=useState(0)

const dispatch=useDispatch()

const {count}= useSelector((state)=>state.counterReducer)

const handleIncrementByAmount=()=>{
  if (amount){

        dispatch(incrementByAmount(Number(amount)))
  }
  else{
    alert("please Enter The Amount")
  }
}

  return (
    <>
         <Container className="counter-app">
      {/* Header Section */}
      <Row className="justify-content-center mt-5">
        <Col xs="auto">
          <h1 className="display-4 text-primary">Counter App</h1>
        </Col>
      </Row>
      
      {/* Counter Display Section */}
      <Row className="justify-content-center mt-4">
        <Col xs="auto">
          <h2 className="counter-value">{count}</h2> {/* This will display the count */}
        </Col>
      </Row>
      
      {/* Buttons Section */}
      <Row className="justify-content-center mt-4">
        <Col xs="auto">
          <Button onClick={()=>dispatch(decrement())} variant="danger" className="m-2 btn-lg">
            Decrement
          </Button>
          <Button onClick={()=>dispatch(reset())} variant="secondary" className="m-2 btn-lg">
            Reset
          </Button>
          <Button onClick={()=>dispatch(increment())} variant="success" className="m-2 btn-lg">
            Increment
          </Button>
        </Col>
      </Row>
      
      {/* Reset Value Input Section with Increment by Amount Button */}
      <Row className="justify-content-center mt-4">
        <Col xs="auto" sm={6} md={4}>
          <Form.Group className="d-flex">
            <Form.Control onChange={(e)=>setAmount(e.target.value)}
              type="number"
              placeholder="Enter the value for reset"
              className="form-control-lg no-spinner"
            />
            <Button onClick={handleIncrementByAmount} variant="primary" className="btn-lg ml-2">
              Incremented by Amount
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Counter