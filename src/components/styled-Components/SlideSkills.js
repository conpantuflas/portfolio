import styled from "styled-components";

const SlideSkills = styled.div`
  width: 15rem;
  transition: 0.3s ease all;
  z-index: 9;
  margin-bottom: 3rem;
  img {
    width: 10rem;
    margin: 1rem;
    border-radius: ${(props) => props.radius || "none"};
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default SlideSkills;
