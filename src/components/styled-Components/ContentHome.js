import styled from "styled-components";

const ContentHome = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-around;
  backdrop-filter: blur(20px);
  padding: 1rem;
  border-radius: 15px;
  margin: 1rem auto;
  &:hover {
    box-shadow: 2px 2px 2px #1d012f;
  }
`;

export default ContentHome;
