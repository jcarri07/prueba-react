import React from 'react'

export default function ListData(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span>Sexo: {props.genero === "male" ? "Masculino" : "Femenino"}</span>
      <span>Email: {props.email}</span>
      <span>Telefono: {props.tlf}</span>
      <span>Direccion: {props.direccion}</span>
    </div>
  );
}
