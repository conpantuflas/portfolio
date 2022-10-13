import styled from "styled-components";

const BotonSlideProyects = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  width: 30px;
  outline: none;
  position: absolute;
  transition: 0.9s ease all;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    path {
      fill: #fff;
    }
  }
  path {
    filter: ${(props) =>
      props.izquierdo
        ? "drop-shadow(2px 0px 0px #fff)"
        : "drop-shadow(-2px 0px 0px #fff)"};
  }
  ${(props) => (props.izquierdo ? "right:166px" : "left:166px")}
`;

export default BotonSlideProyects;
