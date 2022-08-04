import { Container, Margin, TitleDashBoard } from "../Dashboard/styled";
import { NavbarV } from "../Navbar/Nabvar";
import { VirtualizedList } from "wvl-virtualized-list";
import { useState } from "react";
import { ButtonNew, ButtonText, TableContainer, ButtonNext } from "./styled";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { StepOneV } from "./stepOne";
import { StepTwoV } from "./stepTwo";
import { StepThreeV } from "./stepThree";

const steps = [
  "Información básica",
  "Información captura",
  "Descripción del incidente",
];

export const IncidentsV = ({
  activeCreate,
  handleNext,
  activeStep,
  handleBack,
  handleActiveCreate,
  handleInputs,
  handleSubmit,
  incidents,
}) => {
  const [columns] = useState([
    {
      width: 18,
      filter: true,
      orderable: true,
      name: "Nombre reportante",
      accessor: "reportante",
    },
    {
      width: 10,
      filter: true,
      orderable: true,
      name: "Cargo",
      accessor: "cargo",
    },
    {
      width: 18,
      filter: true,
      orderable: true,
      name: "Sede",
      accessor: "sede",
    },
    {
      width: 18,
      filter: true,
      orderable: true,
      name: "Paciente",
      accessor: "paciente",
    },
    {
      width: 18,
      filter: true,
      orderable: true,
      name: "Fecha Incidente",
      accessor: "fechaIncidente",
    },
    {
      width: 18,
      filter: true,
      orderable: true,
      name: "Descripción incidente",
      accessor: "descripcionIncidente",
    },
  ]);
  return (
    <>
      <NavbarV />
      <Container>
        <Margin>
          <TitleDashBoard>Incidentes</TitleDashBoard>
          <TableContainer>
            {activeCreate ? (
              <Box sx={{ width: "100%", height: "100%" }}>
                <div style={{ height: "40px" }}>
                  <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </div>

                {activeStep === steps.length ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      height: "100%",
                      alignItems: "center",
                      paddingTop: "5%",
                    }}
                  >
                    <Alert severity="success">
                      <AlertTitle>Completado</AlertTitle>
                      Incidente registrado — <strong>exitosamente!</strong>
                    </Alert>
                    <ButtonNew
                      style={{ marginTop: "5%" }}
                      onClick={handleSubmit}
                    >
                      <ButtonText>Volver</ButtonText>
                    </ButtonNew>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "90%",
                    }}
                  >
                    {activeStep === 0 && (
                      <StepOneV handleInputs={handleInputs} />
                    )}
                    {activeStep === 1 && (
                      <StepTwoV handleInputs={handleInputs} />
                    )}
                    {activeStep === 2 && (
                      <StepThreeV handleInputs={handleInputs} />
                    )}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "40%",
                        justifyContent: "space-between",
                      }}
                    >
                      <ButtonNext
                        style={{ color: "inherit" }}
                        disabled={activeStep === 0}
                        onClick={handleBack}
                      >
                        <ButtonText>Back</ButtonText>
                      </ButtonNext>
                      <ButtonNext onClick={handleNext}>
                        {activeStep === steps.length - 1 ? (
                          <ButtonText>Finalizar</ButtonText>
                        ) : (
                          <ButtonText>Continuar</ButtonText>
                        )}
                      </ButtonNext>
                    </div>
                  </div>
                )}
              </Box>
            ) : (
              <>
                <ButtonNew onClick={handleActiveCreate}>
                  <ButtonText>Nuevo Incidente</ButtonText>
                </ButtonNew>
                <VirtualizedList
                  header
                  orderable
                  filterable
                  pagination
                  requestAmount={40}
                  showEntries="25"
                  data={incidents || []}
                  search="debouncing"
                  onPagination={() => 25}
                  columns={columns || []}
                />
              </>
            )}
          </TableContainer>
        </Margin>
      </Container>
    </>
  );
};
