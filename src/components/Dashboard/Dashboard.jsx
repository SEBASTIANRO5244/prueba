import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { NavbarV } from "../Navbar/Nabvar";
import {
  Container,
  TitleDashBoard,
  Card,
  Margin,
  CardContainer,
  ChartContainer,
  ChartCard,
  TitleCard,
  DescriptionCard,
  ValueCard,
} from "./styled";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  resposive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart",
    },
  },
};

const labels = ["Operacional", "Actuarial", "Financiero", "En salud"];

export const data = {
  labels,

  datasets: [
    {
      label: "Dataset 1",
      stack: "Stack 1",
      data: [234234, 324234, 243234, 234234],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const DashboardV = ({}) => {
  return (
    <>
      <NavbarV />
      <Container>
        <Margin>
          <TitleDashBoard>Dashboard</TitleDashBoard>
          <CardContainer>
            <Card border={true}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <TitleCard>Operacional</TitleCard>
                <DescriptionCard>Riesgos identificados</DescriptionCard>
              </div>
              <ValueCard>35</ValueCard>
            </Card>
            <Card>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <TitleCard>Operacional</TitleCard>
                <DescriptionCard>Riesgos identificados</DescriptionCard>
              </div>
              <ValueCard>55</ValueCard>
            </Card>
            <Card>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <TitleCard>Operacional</TitleCard>
                <DescriptionCard>Riesgos identificados</DescriptionCard>
              </div>
              <ValueCard>10</ValueCard>
            </Card>
            <Card>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <TitleCard>Operacional</TitleCard>
                <DescriptionCard>Riesgos identificados</DescriptionCard>
              </div>
              <ValueCard>15</ValueCard>
            </Card>
          </CardContainer>
          <ChartContainer>
            <ChartCard>
              {/* <Bar width={"45px"} height={"15px"} data={data}></Bar> */}
            </ChartCard>
            <ChartCard></ChartCard>
          </ChartContainer>
        </Margin>
      </Container>
    </>
  );
};
