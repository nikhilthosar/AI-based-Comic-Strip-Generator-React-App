import React from 'react';
import {Card, Button}  from 'react-bootstrap';
import itemData from './itemData'; // Import your image data

export function Mygallery() {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', display: 'flex',
   width: '300px', padding: '20px', 
    height: '400px' }}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://source.unsplash.com/100x180/?placeholder" alt="Placeholder Image" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
  
  );
};

export default Mygallery;
