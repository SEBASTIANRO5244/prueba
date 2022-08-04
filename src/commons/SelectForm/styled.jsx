import styled from "styled-components";

export const Select = styled.select`
  box-sizing: border-box;
  margin-top: 1%;
  width: ${(props) => props.width || "49%"};
  height: 43px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  border: 0.5px solid #6a828f;
  border-radius: 8px;
`;
