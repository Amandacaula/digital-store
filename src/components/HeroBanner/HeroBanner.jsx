import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeroBanner.css";

//Tempo para trocar de slide automaticamente em milissegundo
const AUTOPLAY_TIME = 5000;

function HeroBanner({ slides }) {

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_TIME);

    return () => clearInterval(timer);
  }, [activeIndex, slides.length]);



  return (
    <section className="hero-banner" aria-roledescription="carrosel">
      {/* A "trilha" anda para o lado de acordo com o slide ativo */}
      <div className="hero-banner__track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {slides.map((slide, index) => (
            <div
            key={slide.title}
            className= "hero-banner__slide"
            aria-hidden={index !== activeIndex}
            >
            <div className="container hero-banner__content">
              <div className="hero-banner__text">
                <span className="hero-banner__subtitle">{slide.subtitle}</span>
                <h2 className="hero-banner__title">{slide.title}</h2>
                <p className="hero-banner__description">{slide.description}</p>
                
                <Link
                to={slide.link}
                className="button hero-banner__button"
                tabIndex={index === activeIndex ? 0 : -1} >
                    Ver Ofertas
                </Link>
                </div>
                <div className="hero-banner__image">
                <img src={slide.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="hero-banner__dots">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            className={`hero-banner__dot ${index === activeIndex ? "is-active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}


export default HeroBanner;
