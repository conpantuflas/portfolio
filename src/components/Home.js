import React from "react";
import svgImage from "../media/svgImage.svg";
import styled from "styled-components";
import CvDownload from "./CvDownload";

const Home = () => {
  return (
    <div>
      <Title>Judith Carreño</Title>
      <Paragraph>Desarrolladora Full-Stack</Paragraph>
      <Img src={svgImage} alt="x" />
      <CvDownload />
    </div>
  );
};

const Img = styled.img`
  width: 40%;
`;

const Paragraph = styled.p`
  margin: 0 0 1rem 0;
  color: #fff;
  text-shadow: 1px 1px 1px black;
`;

<style>
  @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
</style>;

const Title = styled.h1`
  margin: 0;
  color: #fff;
  font-family: "Satisfy", cursive;
  text-shadow: 3px 3px 3px black;
  font-size: 3rem;
`;

export default Home;
