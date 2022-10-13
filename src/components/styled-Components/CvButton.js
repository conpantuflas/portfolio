import styled from "styled-components";

const CvButton = styled.div`
  background: #baadc1;
  width: 10rem;
  padding: 1rem;
  border-radius: 25px;
  margin: 1rem auto;
  &:hover {
    box-shadow: 2px 2px 2px #1d012f;
    transform: scale(1.1);
  }
`;

export default CvButton;
