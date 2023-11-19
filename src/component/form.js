import React, { useState } from 'react';
import { Form, Container, Row, Col, Card, Button } from 'react-bootstrap';
import ApiCaller from './apicaller.js';
import '../App.css';

export function Myform() {
  const [formData, setFormData] = useState({
    prompts: [],
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
      <div class="main-form-container">
        <Row><h4 style={{ marginLeft: '20px' }} class='prompt-title'>Describe your Comic Sequence</h4></Row>
        <Row >
          {/* Form Container on the Left */}
          <Col className="prompt-col" md={3}>
            <Form>
              <Form.Group controlId="prompt1" className="form-inline">
                <Row className="mb-2">
                  <Col>
                    <Form.Control
                      required
                      type="text"
                      name="prompts[0]"
                      value={formData.prompts[0]}
                      placeholder='Prompt 1'
                      onChange={handleChange}
                      style={{ display: 'stretch' }}
                    />
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Form.Control
                      required
                      type="text"
                      name="prompts[1]"
                      value={formData.prompts[1]}
                      placeholder='Prompt 2'
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Form.Control
                      required
                      type="text"
                      name="prompts[2]"
                      value={formData.prompts[2]}
                      placeholder='Prompt 3'
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Form.Control
                      required
                      type="text"
                      name="prompts[3]"
                      value={formData.prompts[3]}
                      placeholder='Prompt 4'
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Form.Control
                      required
                      type="text"
                      name="prompts[4]"
                      value={formData.prompts[4]}
                      placeholder='Prompt 5'
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Form.Control
                      required
                      type="text"
                      name="prompts[5]"
                      value={formData.prompts[5]}
                      placeholder='Prompt 6'
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Form.Control
                      required
                      type="text"
                      name="prompts[6]"
                      value={formData.prompts[6]}
                      placeholder='Prompt 7'
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Form.Control
                      required
                      type="text"
                      name="prompts[7]"
                      value={formData.prompts[7]}
                      placeholder='Prompt 8'
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Form.Control
                      required
                      type="text"
                      name="prompts[8]"
                      value={formData.prompts[8]}
                      placeholder='Prompt 9'
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Form.Control
                      required
                      type="text"
                      name="prompts[9]"
                      value={formData.prompts[9]}
                      placeholder='Prompt 10'
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row className='submitButton'>
                  <ApiCaller
                    data={formData}
                    onSuccess={handleApiSuccess}
                    onError={handleApiError}
                  />
                </Row>
              </Form.Group>
            </Form>
          </Col>

          {/* Image Display Component on the Right */}
          <Col className="images-col" md={9}>
            <Container style={{ border: "2px solid purple", minWidth: "400px", minHeight: "400px" }}>
              <div className="image-grid">
                {imageUrls.map((imageUrl, index) => (
                  <div key={index} className="image-container">
                    <img
                      src={imageUrl}
                      alt={`API Response Image ${index + 1}`}
                      className="grid-image"
                    />
                    <p className="image-label">Prompt: {index + 1}</p>
                    {console.log(formData.prompts)}
                  </div>
                ))}
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
}
