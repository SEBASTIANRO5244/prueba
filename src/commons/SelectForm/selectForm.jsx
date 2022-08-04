import { Select } from "./styled";

export const SelectFormV = ({ name, data, width, onChange }) => {
  return (
    <Select name={name} width={width} onChange={onChange}>
      {data.map((option, index) => (
        <option key={index} value={option.value}>
          {option.text}
        </option>
      ))}
    </Select>
  );
};
