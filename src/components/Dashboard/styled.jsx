import styled from "styled-components";

export const Background = styled.div`
  background-color: #e3ebf3;
  width: 100%;
  min-height: 100vh;
  height: 0;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const Margin = styled.div`
  width: 85%;
  height: auto;
`;

export const CardContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ChartContainer = styled.div`
  flex-wrap: wrap;
  padding-top: 3%;
  position: relative;
  width: auto;
  display: flex;
  flex-direction: row;
  height: 20%;
  justify-content: space-between;
`;

export const Container = styled.div`
  position: absolute;
  width: 96%;
  left: 4%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const ValueCard = styled.div`
  width: 80px;
  margin-bottom: 25px;
  height: 37px;
  font-style: normal;
  float: right;
  display: flex;
  font-weight: 700;
  font-size: 40px;
  line-height: 55px;
  color: #86878b;
`;

export const ChartCard = styled.div`
  width: 49%;
  height: 330px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  border-radius: 15px;
`;

export const TitleCard = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 100%;
  line-height: 16px;
  color: #f97b92;
`;

export const DescriptionCard = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 80%;
  line-height: 16px;
  color: #808191;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 80%;
  height: 40px;
  background: #ffffff;
  border: 1px solid #beccff;
  border-radius: 10px;
  margin-left: 10%;
  float: left;
`;

export const Card = styled.div`
  margin-top: 1%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 24px 22px;
  gap: 10px;
  width: 300px;
  flex-wrap: wrap;
  height: 120px;
  background: #ffffff;
  border: ${(props) => (props.border ? "2px solid #f97b92" : "none")};
  box-shadow: 2px 2px 12px 2px rgba(0, 63, 128, 0.08),
    2px 4px 8px 2px rgba(0, 63, 128, 0.04);
  border-radius: 15px;
`;

export const TitleDashBoard = styled.h1`
  width: 183px;
  height: 52px;
  left: 183px;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
  color: #293253;
`;
