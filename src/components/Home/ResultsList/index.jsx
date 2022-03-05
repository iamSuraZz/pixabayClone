import React from "react";
import "./styles.css";

const ResultsList = ({ images }) => (
  <div className="resultList-container">
    {images.map((image) => (
      <img key={image.id} src={image.largeImageURL} alt="img" />
    ))}
  </div>
);
export default ResultsList;
