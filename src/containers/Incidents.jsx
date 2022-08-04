import { useState } from "react";
import { IncidentsV } from "../components/Incidents/Incidents";

export const IncidentsC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeCreate, setActiveCreate] = useState(false);
  const [incidents, setIncidents] = useState([]);
  const [skipped, setSkipped] = useState(new Set());
  const [form, setForm] = useState({
    reportante: "",
    cargo: "",
    sede: "",
    lugar: "",
    servicio: "",
    fechaIncidente: "",
    horaIncidente: "",
    fechaReporte: "",
    paciente: "",
    identificacion: "",
    aseguradora: "",
    edad: "",
    sexo: "",
    antecedentes: "",
    descripcion: "",
    acciones: "",
  });

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  console.log(form);
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setActiveCreate(false);
  };

  const handleActiveCreate = () => {
    setActiveCreate(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIncidents([...incidents, form]);
    handleReset();
  };

  return (
    <IncidentsV
      activeCreate={activeCreate}
      handleNext={handleNext}
      activeStep={activeStep}
      handleReset={handleReset}
      handleActiveCreate={handleActiveCreate}
      handleInputs={handleInputs}
      handleSubmit={handleSubmit}
      handleBack={handleBack}
      incidents={incidents}
    />
  );
};
