import React from "react";
import cv from "../media/cv-judith-carreño.pdf";
import CvButton from "./styled-Components/CvButton";
import ADownload from "./styled-Components/ADownload";

const CvDownload = () => {
  return (
    <CvButton>
      <ADownload href={cv} download>
        Descargar cv
      </ADownload>
    </CvButton>
  );
};

export default CvDownload;
