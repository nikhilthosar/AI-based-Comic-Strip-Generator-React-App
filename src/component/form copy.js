import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../App.css';
 
export function Myform() {
 
  return (
    <>
    <div className='prompts' style={{ display: 'flex', flexDirection: 'column',
     alignItems: 'flex-start', width: '300px', padding: '20px', 
     height: '400px', overflowY: 'auto' }}>

    <Form>
      <Form.Group>
        <Form.Label>Prompt 1:</Form.Label>
        <Form.Control type="text" placeholder="Enter the text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Prompt 2:</Form.Label>
        <Form.Control type="text" placeholder="Enter the text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Prompt 3:</Form.Label>
        <Form.Control type="text" placeholder="Enter the text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Prompt 4:</Form.Label>
        <Form.Control type="text" placeholder="Enter the text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Prompt 5:</Form.Label>
        <Form.Control type="text" placeholder="Enter the text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Prompt 6:</Form.Label>
        <Form.Control type="text" placeholder="Enter the text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Prompt 7:</Form.Label>
        <Form.Control type="text" placeholder="Enter the text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Prompt 8:</Form.Label>
        <Form.Control type="text" placeholder="Enter the text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Prompt 9:</Form.Label>
        <Form.Control type="text" placeholder="Enter the text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Prompt 10:</Form.Label>
        <Form.Control type="text" placeholder="Enter the text" />
      </Form.Group>
    </Form>

    
  </div>
  
  <div className='submitButton'>
  <Button variant="primary" type="submit">
        Click here to submit form
      </Button>
  </div>
  </>
    
  );
}
