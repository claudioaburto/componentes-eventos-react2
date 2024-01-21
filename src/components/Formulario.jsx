import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Formulario.css";
import Form from "react-bootstrap/Form";
import Alert from "./Alert";

const Formulario = ({ error, setError, color, setColor }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [contraseña2, setContraseña2] = useState("");

  function validarEmail(email) {
    const expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return expresionRegular.test(email);
  }

  const validarInput = (e) => {
    e.preventDefault();
    if (
      !nombre == "" &&
      !email == "" &&
      !contraseña == "" &&
      !contraseña2 == ""
    ) {
      if (validarEmail(email)) {
        if (contraseña == contraseña2) {
          setError("El registro ha sido exitoso");
          setColor("green");
          setNombre("");
          setEmail("");
          setContraseña("");
          setContraseña2("");
        } else {
          setError("Las contraseñas no coinciden");
          setColor("red");
        }
      } else {
        setError("El formato del Email es incorrecto");
        setColor("red");
      }
    } else {
      setError("Debe llenar todos los campos");
      setColor("red");
    }
  };

  return (
    <Form onSubmit={validarInput}>
      <div className="form-group">
        <input
          className="form-control mb-3"
          placeholder="Nombre"
          name="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="form-group">
        <input
          className="form-control mb-3"
          placeholder="Email"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Ingrese contraseña"
          name="contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
      </div>

      <div className="form-group">
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Confirme contraseña"
          name="contraseña2"
          value={contraseña2}
          onChange={(e) => setContraseña2(e.target.value)}
        />
      </div>

      <button className="btn btn-dark mt-3 w-100 bg-primary" type="submit">
        Regístrate
      </button>
      <Alert error={error} color={color} />
    </Form>
  );
};

export default Formulario;
