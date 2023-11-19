import React, { useState } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import ApiCaller from './apicaller.js';
import MyImageComponent from './imagecomp'; // Assuming you have a separate component for rendering images
import '../App.css';

export function Myform() {
  const [formData, setFormData] = useState({
    prompts: ['man in rain','car','girl on moon', 'car','bike','women and child','eggs','golf','yak','people'],
  });

  // Initialize imageUrls state with an empty array
  const [imageUrls, setImageUrls] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the input name is 'prompts[index]', update the corresponding index in the array
    if (name.startsWith('prompts[') && name.endsWith(']')) {
      const index = parseInt(name.match(/\[(\d+)\]/)[1], 10);
      setFormData((prevFormData) => {
        const updatedPrompts = [...prevFormData.prompts];
        updatedPrompts[index] = value;
        return {
          ...prevFormData,
          prompts: updatedPrompts,
        };
      });
    } else {
      // If it's not a prompts[index] input, update the value directly
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleApiSuccess = async (responseBlob) => {
    try {
      // Check if the response is an image
      if (responseBlob.type.startsWith('image/')) {
        // If it's an image, create a URL for the blob and set it in the array
        const imageUrl = URL.createObjectURL(responseBlob);
        setImageUrls((prevImageUrls) => [...prevImageUrls, imageUrl]);
      } else {
        // If it's not an image, handle it accordingly
        console.warn('Received data is not an image.');
      }
    } catch (error) {
      console.error('Error handling image response:', error);
    }
  };

  const handleApiError = (error) => {
    // Handle the API call error
    console.error('Error calling API:', error);
  };

  return (
    <>
   <Container>
  <Row>
    {/* Form Container on the Left */}
    <Col md={6}>
      <div className='prompts'>
        <Form>
          {Array.from({ length: 10 }, (_, index) => (
            <Form.Group key={index} className="row">
              <Form.Label className="col-md-2">{`Prompt ${index + 1}:`}</Form.Label>
              <div className="col-md-10">
                <Form.Control
                  type="text"
                  name={`prompt${index + 1}`}
                  placeholder="Enter the text"
                  value={formData[`prompt${index + 1}`]}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
          ))}
        </Form>
      </div>
    </Col>

    {/* Image Display Component on the Right */}
    <Col md={6}>
      <div className="image-grid">
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`API Response Image ${index + 1}`}
            className="grid-image"
          />
        ))}
      </div>
      <div className='submitButton'>
        <ApiCaller
          data={formData}
          onSuccess={handleApiSuccess}
          onError={handleApiError}
        />
      </div>
    </Col>
  </Row>
</Container>


     
    </>
  );
}
