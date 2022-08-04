import { InputForm, TitleForm } from "./styled";
import { SelectFormV } from "../../commons/SelectForm/selectForm";
export const StepOneV = ({ handleInputs }) => {
  const sede = [
    { text: "Norte", value: "Norte" },
    { text: "Sur", value: "Sur" },
  ];

  const lugar = [
    { text: "Oficina", value: "Oficina" },
    { text: "Casa", value: "Casa" },
  ];

  const servicio = [
    { text: "Medico", value: "Medico" },
    { text: "Educativo", value: "Educativo" },
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
        }}
      >
        <InputForm
          placeholder="Nombre del reportante"
          onChange={handleInputs}
          name={"reportante"}
        />
        <InputForm placeholder="Cargo" onChange={handleInputs} name={"cargo"} />
        <SelectFormV data={sede} name={"sede"} onChange={handleInputs} />
        <SelectFormV data={lugar} name={"lugar"} onChange={handleInputs} />
        <SelectFormV
          data={servicio}
          name={"servicio"}
          onChange={handleInputs}
        />
        <InputForm
          placeholder="Fecha del incidente"
          name={"fechaIncidente"}
          onChange={handleInputs}
          type="date"
        />
        <InputForm
          placeholder="Hora del incidente"
          name={"horaIncidente"}
          type="time"
          onChange={handleInputs}
        />
        <InputForm
          placeholder="Fecha del reporte"
          name={"fechaReporte"}
          type="date"
          onChange={handleInputs}
        />
      </div>
    </>
  );
};
