import React from 'react'
import '../../styles/estilos.css';

export default function UserFoto(props) {
  return (
    <div className="text-center">
      <img
        style={{borderRadius: 100}}
        src={props.src}
        width={100}
        height={100}
        className="rounded-circle"
      />
    </div>
  );
}
