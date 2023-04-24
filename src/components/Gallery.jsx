import React, { useState } from "react";
import Izpildmerijumi4 from "../assets/izpildmerijumi-4.jpg"
import Topografija from "../assets/topografija1.jpg"
import izpildmerijumi1 from "../assets/izpildmerijumi3.jpg"
import izpildmerijumi2 from "../assets/izpildmerijumi2.jpg"
import izpildmerijumi4 from "../assets/izpildmerijumi4.jpg"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img4 from "../assets/img4.jpg"
const images = [
  { id: 1, url: Izpildmerijumi4 },
  { id: 2, url: Topografija },
  { id: 3, url: izpildmerijumi1 },
  { id: 4, url: izpildmerijumi2},
  { id: 5, url: izpildmerijumi4 },
  { id: 6, url: img1 },
  { id: 7, url: img2},
  { id: 8, url: img4 }
];

export default function Gallery() {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (id) => {
    setExpandedImage(id);
  };

  const handleCloseClick = () => {
    setExpandedImage(null);
  };

  const renderGallery = () => {
    const rows = [];
    let row = [];
    for (let i = 0; i < images.length; i++) {
      row.push(
        <div key={images[i].id} className="gallery-item">
          <img
            src={images[i].url}
            alt={`Gallery item ${images[i].id}`}
            onClick={() => handleImageClick(images[i].id)}
          />
        </div>
      );
      if ((i + 1) % 4 === 0 || i === images.length - 1) {
        rows.push(<div key={i} className="gallery-row">{row}</div>);
        row = [];
      }
    }
    return rows;
  };

  return (
    <div className="gallery-container">
      {renderGallery()}
      {expandedImage && (
        <div className="overlay" onClick={handleCloseClick}>
          <img src={images.find((img) => img.id === expandedImage).url} alt={`Expanded gallery item`} />
        </div>
      )}
    </div>
  );
};

