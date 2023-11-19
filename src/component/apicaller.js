import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

async function query(data) {
  // const [prompt, setPropmt] = useState();

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

export default function ApiCaller({ data, onSuccess, onError }) {
  const handleApiCall = async () => {
    try {
      // Ensure 'prompts' property is present in 'data'
      if (data && data.prompts) {
        // Iterate over each prompt and make a separate API call
        for (const prompt of data.prompts) {
          console.log(prompt);
          const result = await query({ inputs: prompt });
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
        variant="primary"
        type="button"
        style={{
          display: 'block', // Ensures the button takes up full width
          backgroundColor: 'black',
          width: '100%'
        }}
        onClick={handleApiCall}>
        Generate
      </Button>
    </>
  );
}