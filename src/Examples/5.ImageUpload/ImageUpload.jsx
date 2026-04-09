import React, { useState } from "react";
import "./ImageUploader.css"; // Import CSS file for styling

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const [numImages, setNumImages] = useState(1); // Default number of images

  const handleNumImagesChange = (e) => {
    setNumImages(parseInt(e.target.value, 10));
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    let tempImages = [...images];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.size >= 5 * 1024 * 1024 && file.size <= 6 * 1024 * 1024) {
        tempImages.push(file);
      } else {
        alert(`Image ${file.name} size should be between 5MB and 6MB`);
      }
    }

    setImages(tempImages.slice(0, numImages)); // Limit to numImages
  };

  const handleSubmit = () => {
    const imageStrings = images.map((image) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(image);
      });
    });

    Promise.all(imageStrings)
      .then((base64Images) => {
        console.log(base64Images.join("\n")); // Log base64 images as strings
        // You can perform further processing here, such as sending images to a server
      })
      .catch((error) => console.error("Error reading images:", error));
  };

  return (
    <div className="image-uploader-container">
      <label htmlFor="numImagesInput">Number of Images:</label>
      <input
        id="numImagesInput"
        type="number"
        min="1"
        value={numImages}
        onChange={handleNumImagesChange}
      />
      <input type="file" multiple onChange={handleImageChange} />
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ImageUploader;
