import { SelectFormV } from "../../commons/SelectForm/selectForm";
import { InputForm, TitleForm, TextAreaForm } from "./styled";

export const StepTwoV = ({ handleInputs }) => {
  const aseguradora = [
    { text: "Sura", value: "Sura" },
    { text: "Sanitas", value: "Sanitas" },
  ];

  const sexo = [
    { text: "Masculino", value: "Masculino" },
    { text: "Femenino", value: "Femenino" },
  ];
  return (
    <>
      <TitleForm>Información básica</TitleForm>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginBottom: "20px",
          width: "100%",
          height: "auto",
        }}
      >
        <InputForm
          placeholder="Nombre del paciente"
          name={"paciente"}
          onChange={handleInputs}
        />
        <InputForm
          placeholder="Identificacion"
          name={"identificacion"}
          onChange={handleInputs}
          type="number"
        />
        <SelectFormV
          data={aseguradora}
          name={"aseguradora"}
          width={"99%"}
          onChange={handleInputs}
        />
        <InputForm
          placeholder="Edad"
          name={"edad"}
          onChange={handleInputs}
          type="number"
        />
        <SelectFormV data={sexo} name={"sexo"} onChange={handleInputs} />
        <TextAreaForm
          placeholder="Antecedentes patologicos"
          width={"99%"}
          name={"antecedentes"}
          onChange={handleInputs}
        />
      </div>
    </>
  );
};
