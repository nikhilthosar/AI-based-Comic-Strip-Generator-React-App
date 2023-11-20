import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


/*========================================================
  Function:: query
  Use:: This function consist API key and details 
  ==========================================================*/




  
async function query(data) {
  const response = await fetch(
    "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
    {
      headers: {
        "Accept": "image/png",
        "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.blob();
  return result;
}
query({ "inputs": "Astronaut riding a horse" }).then((response) => {
  // Use image
});

/*=========================================================
  Function:: ApiCaller
  Use:: This function requests the API in loop for 10 times and returns the response back.
  ==========================================================*/

export default function ApiCaller({ data, onSuccess, onError, clear }) {

  const handleApiCall = async () => {
    try {
      clear();
      // Ensure 'prompts' property is present in 'data'
      if (data && data.prompts) {
        // Iterate over each prompt and make a separate API call
        for (const prompt of data.prompts) {
          console.log(prompt);
          const result = await query({ inputs: prompt });
          console.log(result.size);
          if (result.size == 842) {
            alert('API responded with blank image.');
          }
          console.log(result);
          onSuccess(result);
        }
      } else {
        console.error('Missing prompts property in data.');
      }
    } catch (error) {
      onError(error);
    }
  };

  return (
    <>

      <Button
        variant="outline-light"
        type="button"
        className="custom-button"
        style={{
          display: 'block',
          width: '70%',
          margin: 'auto',
        }}
        onClick={handleApiCall}
      >
        Generate It
      </Button>
    </>
  );
}