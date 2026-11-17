import { useState } from "react";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
import "./Gallery.css";


function Gallery({ images, width, height, radius = "0px", showThumbs = false, className = "" }) {
  // Índice da imagem que está aparecendo
  const [currentIndex, setCurrentIndex] = useState(0);


  const isFirstImage = currentIndex === 0;
  const isLastImage = currentIndex === images.length - 1;


  // parseInt transforma "700px" em 700
  const slideWidth = parseInt(width);
  const slideHeight = parseInt(height);


  return (
    <div className={`gallery ${className}`} style={{ maxWidth: slideWidth }}>
      <div
        className="gallery__slide"
        style={{ aspectRatio: `${slideWidth} / ${slideHeight}`, borderRadius: radius }}
      >
        {/* A "trilha" com todas as imagens anda para o lado */}
        <div className="gallery__track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={`Imagem ${index + 1} de ${images.length}`}
              className="gallery__image"
            />
          ))}
        </div>


        <button
          className="gallery__arrow gallery__arrow--left"
          onClick={() => setCurrentIndex(currentIndex - 1)}
          disabled={isFirstImage}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" />
        </button>


        <button
          className="gallery__arrow gallery__arrow--right"
          onClick={() => setCurrentIndex(currentIndex + 1)}
          disabled={isLastImage}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>

       {showThumbs && (
        <div className="gallery__thumbs">
          {images.map((image, index) => (
            <button
              key={image.src}
              className={`gallery__thumb ${index === currentIndex ? "is-selected" : ""}`}
              style={{ borderRadius: radius }}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ver imagem ${index + 1}`}
            >
              <img src={image.src} alt="" style={{ borderRadius: radius }} />
            </button>
          ))}
        </div>
      )}

    </div>
  );
}


export default Gallery;
