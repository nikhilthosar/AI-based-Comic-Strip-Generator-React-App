import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import ApiCaller from './apicaller.js';
import '../App.css';




export function Myform() {

  // In your component that handles the API response
  const [imageSrc, setImageSrc] = useState(null);

  const [formData, setFormData] = useState({
    prompts: ['', '', '', '', '', '', '', '', '', ''],
  });
  
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
        // If it's an image, create a URL for the blob and set it as the image source
        const imageUrl = URL.createObjectURL(responseBlob);
  
        // Log the image URL
        console.log('Image URL:', imageUrl);
        setImageSrc(imageUrl);
        // You can update the state or perform any other actions with the image URL
        // setSomeState(imageUrl);
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
      <div
        className='prompts'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '300px',
          padding: '20px',
          height: '400px',
          overflowY: 'auto',
        }}
      >
        <Form>
          {Array.from({ length: 10 }, (_, index) => (
            <Form.Group key={index}>
              <Form.Label>{`Prompt ${index + 1}:`}</Form.Label>
              <Form.Control
                type="text"
                name={`prompt${index + 1}`}
                placeholder="Enter the text"
                value={formData[`prompt${index + 1}`]}
                onChange={handleChange}
              />
            </Form.Group>
          ))}
        </Form>
      </div>

      <div className='submitButton'>
        <ApiCaller
          data={formData}
          onSuccess={handleApiSuccess}
          onError={handleApiError}
        />
      </div>
    </>
  );
}
