import React from "react";
import SliderProyects from "./SliderProyects";
import Title from "./styled-Components/Title";
import ContentSliderProyects from "./styled-Components/ContentSliderProyects";
import ContentSliderAndDescription from "./styled-Components/ContentSliderAndProyects";
import DescriptionProyect from "./styled-Components/DescriptionProyect";

const Proyects = () => {
  return (
    <div>
      <Title>Proyects</Title>
      <ContentSliderAndDescription>
        <ContentSliderProyects>
          <SliderProyects />
        </ContentSliderProyects>
        <div>
          <Title>title</Title>
          <DescriptionProyect>
            Enim adipisicing et ad in duis magna mollit proident reprehenderit
            laboris duis. Magna veniam nulla tempor sunt exercitation commodo
            magna consequat incididunt labore laboris sit ut. Sit duis tempor
            fugiat laboris laboris cillum aute voluptate laboris sint dolore
            ullamco. Ipsum nisi duis quis culpa laborum minim. Exercitation
            nostrud deserunt minim aute voluptate officia enim. Velit eu sit
            ipsum irure ex laborum sunt aute qui exercitation proident. Aliqua
            ut irure veniam deserunt ea consectetur sint id aliqua reprehenderit
            culpa ullamco. Eu laboris exercitation do aliqua adipisicing anim
            in. Enim proident reprehenderit eu ut nostrud duis irure sit
            reprehenderit incididunt sit duis. Adipisicing do et aliquip
            voluptate. Sint eu reprehenderit sit velit laboris ex amet nulla
            aliquip culpa enim nostrud elit. Ea minim tempor consequat magna in
            voluptate nostrud ex. Eiusmod et cupidatat duis magna sunt et veniam
            culpa. Duis incididunt magna dolore
          </DescriptionProyect>
        </div>
      </ContentSliderAndDescription>
    </div>
  );
};

export default Proyects;
