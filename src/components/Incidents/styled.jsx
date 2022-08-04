import styled from "styled-components";

export const TableContainer = styled.div`
  width: 90%;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 5%;
  padding-bottom: 5%;
  height: 60%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 1px -1px 62px rgba(152, 156, 168, 0.21);
  border-radius: 18px;
`;

export const ButtonNew = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 175px;
  height: 9%;
  color: white;
  background: #2d4857;
  border: none;
  border-radius: 10px;
`;

export const ButtonNext = styled.button`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin-top: 35px;
  align-self: center;
  width: 175px;
  height: 46px;
  background: #293253;
  border-radius: 7px;
`;

export const TitleForm = styled.h1`
  font-weight: 700;
  font-size: 32px;
  display: flex;
  color: #293253;
`;

export const InputForm = styled.input`
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

export const TextAreaForm = styled.textarea`
  margin-top: 1%;
  width: ${(props) => props.width || "49%"};
  height: 30%;
  left: 0px;
  top: 0px;
  background: #ffffff;
  border: 0.5px solid #6a828f;
  border-radius: 8px;
`;

export const ButtonText = styled.p`
  font-style: normal;
  font-size: 100%;
  color: #ffffff;
`;
