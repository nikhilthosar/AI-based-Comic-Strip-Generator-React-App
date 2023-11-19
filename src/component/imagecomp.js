import React from 'react';
import Form from './form.js';

export function MyImageComponent({ imageUrls }) {
  return (
    <div>
      {imageUrls.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`API Response Image ${index + 1}`} />
      ))}
    </div>
  );
}

export default MyImageComponent;
