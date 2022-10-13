import React, { useRef } from "react";
import { ReactComponent as ArrowLeft } from "../media/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../media/ArrowRight.svg";
import img1 from "../media/sliderImage.webp";
import img2 from "../media/styledComponentLogo.png";
import PrincipalContentSliderProyects from "./styled-Components/PrincipalContentSliderProyects";
import ContentSlideShowProyects from "./styled-Components/ContentSlideShowProyects";
import BotonSlideProyects from "./styled-Components/BotonSlideProyects";
import SlideProyects from "./styled-Components/SlideProyects";
import ControlsSlideProyects from "./styled-Components/ControlsSlideProyects";

const SliderProyects = () => {
  const slideshow = useRef(null);

  const siguiente = () => {
    if (slideshow.current.children.length > 0) {
      const primerElemento = slideshow.current.children[0];
      slideshow.current.style.transition = `300ms ease-out all`;
      const tamañoSlider = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlider}px)`;

      const transicion = () => {
        slideshow.current.style.transition = `none`;
        slideshow.current.style.transform = `translateX(0)`;
        slideshow.current.appendChild(primerElemento);

        slideshow.current.removeEventListener("transitionend", transicion);
      };

      slideshow.current.addEventListener("transitionend", transicion);
    }
  };

  const anterior = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = `none`;
      const tamañoSlider = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlider}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `300ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  return (
    <PrincipalContentSliderProyects>
      <ContentSlideShowProyects ref={slideshow}>
        <SlideProyects>
          <a href="https://www.google.com">
            <img src={img1} alt="" />
          </a>
        </SlideProyects>

        <SlideProyects>
          <a href="https://www.google.com">
            <img src={img2} alt="" />
          </a>
        </SlideProyects>
      </ContentSlideShowProyects>

      {/* controles */}
      <ControlsSlideProyects>
        <BotonSlideProyects izquierdo onClick={anterior}>
          <ArrowLeft />
        </BotonSlideProyects>
        <BotonSlideProyects onClick={siguiente}>
          <ArrowRight />
        </BotonSlideProyects>
      </ControlsSlideProyects>
    </PrincipalContentSliderProyects>
  );
};

export default SliderProyects;
