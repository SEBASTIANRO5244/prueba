import { useState } from "react";
import { LoginV } from "../components/Login/Login";
import { useNavigate } from "react-router-dom";

export const LoginC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ identification: "", password: "" });

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form?.identification || !form?.password)
      return alert("Debe rellenar todos los campos");

    if (form?.identification === "admin" && form?.password === "1234") {
      navigate(`/dashboard`);
    } else {
      return alert("Contraseña o usuario incorrecto");
    }
  };
  return <LoginV handleInputs={handleInputs} handleSubmit={handleSubmit} />;
};
