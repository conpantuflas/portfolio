import React from "react";
import TextAboutMe from "./styled-Components/TextAboutMe.js";
import Title from "./styled-Components/Title.js";

const AboutMe = () => {
  return (
    <div>
      <Title>Sobre mi</Title>
      <TextAboutMe>
        Hola mi nombre es Judith, me considero una persona creativa y
        detallista, disfruto de pasar tiempo en familia y realizar mis hobbies,
        mis actuales hobbies se resume en entender las plantas,relizar actividad
        fisica, aprender de desarrollo web.
      </TextAboutMe>
      <TextAboutMe>
        Estuve en el Bootcamp 4geeks Academy, el cual me permitio reforzar los
        conocimientos que previamente forme como autodidacta en el desarrollo
        web. En el aprendí y reforce tecnologias como JavaScript, React,
        Bootstrap, Flux , Python, Sql, SqlAlchemy, Flask, Jwt y Jest.
        Habilidades como el trabajo grupal con git
      </TextAboutMe>
    </div>
  );
};

export default AboutMe;
