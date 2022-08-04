import { TitleForm, TextAreaForm } from "./styled";

export const StepThreeV = ({ handleInputs }) => {
  return (
    <>
      <TitleForm>Descripción del incidente</TitleForm>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginBottom: "20px",
          width: "100%",
          height: "100%",
        }}
      >
        <TextAreaForm
          placeholder="Descripción de lo ocurrido"
          width={"99%"}
          name={"descripcion"}
          onChange={handleInputs}
        />
        <TextAreaForm
          placeholder="Acciones inseguras"
          width={"99%"}
          name={"acciones"}
          onChange={handleInputs}
        />
      </div>
    </>
  );
};
