import React, { useRef } from "react";
import { ReactComponent as ArrowLeft } from "../media/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../media/ArrowRight.svg";
import Title from "./styled-Components/Title";
import PrincipalContentSkills from "./styled-Components/PrincipalContentSkills";
import ControlsSkills from "./styled-Components/ControlsSkills";
import ContentSlideShowSkills from "./styled-Components/ContentSlideShowSkills";
import SlideSkills from "./styled-Components/SlideSkills";
import BotonSkills from "./styled-Components/BotonSkills";
import bootstrap from "../media/bootstrap.png";
import css from "../media/css.png";
import figma from "../media/figma.png";
import flask from "../media/flask.png";
import flux from "../media/flux.png";
import git from "../media/git.png";
import github from "../media/github.png";
import html from "../media/html.png";
import js from "../media/js.png";
import postgreSql from "../media/postgreSql.png";
import python from "../media/python.png";
import react from "../media/react.png";
import sqlAlchemy from "../media/sqlAlchemy.png";
import styledComponents from "../media/styledComponentLogo.png";

const Skills = () => {
  const slideshow = useRef(null);

  const next = () => {
    if (slideshow.current.children.length > 0) {
      const primerElemento = slideshow.current.children[0];
      slideshow.current.style.transition = `200ms ease-out all`;
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

  const previous = () => {
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
        slideshow.current.style.transition = `200ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  return (
    <>
      <Title>Skills</Title>
      <PrincipalContentSkills>
        <ContentSlideShowSkills ref={slideshow}>
          <SlideSkills>
            <img src={bootstrap} alt="bootstrap" />
            <p>Bootstrap</p>
          </SlideSkills>
          <SlideSkills>
            <img src={css} alt="css" />
            <p>Css</p>
          </SlideSkills>
          <SlideSkills>
            <img src={figma} alt="figma" />
            <p>Figma</p>
          </SlideSkills>
          <SlideSkills>
            <img src={flask} alt="flask" />
            <p>Flask</p>
          </SlideSkills>
          <SlideSkills radius="100%">
            <img src={flux} alt="flux" />
            <p>Flux</p>
          </SlideSkills>
          <SlideSkills>
            <img src={git} alt="git" />
            <p>Git</p>
          </SlideSkills>
          <SlideSkills>
            <img src={github} alt="github" />
            <p>Github</p>
          </SlideSkills>
          <SlideSkills>
            <img src={html} alt="html" />
            <p>Html</p>
          </SlideSkills>
          <SlideSkills>
            <img src={js} alt="js" />
            <p>JavaScript</p>
          </SlideSkills>
          <SlideSkills>
            <img src={postgreSql} alt="posgreSql" />
            <p>PostgreSql</p>
          </SlideSkills>
          <SlideSkills>
            <img src={python} alt="python" />
            <p>Python</p>
          </SlideSkills>
          <SlideSkills>
            <img src={react} alt="react" />
            <p>React</p>
          </SlideSkills>
          <SlideSkills>
            <img src={sqlAlchemy} alt="sqlAlchemy" />
            <p>sqlAlchemy</p>
          </SlideSkills>
          <SlideSkills>
            <img src={styledComponents} alt="styledComponents" />
            <p>Styled Components</p>
          </SlideSkills>
        </ContentSlideShowSkills>

        {/* controls */}
        <ControlsSkills>
          <BotonSkills izquierdo onClick={previous}>
            <ArrowLeft />
          </BotonSkills>
          <BotonSkills onClick={next}>
            <ArrowRight />
          </BotonSkills>
        </ControlsSkills>
      </PrincipalContentSkills>
    </>
  );
};

export default Skills;
