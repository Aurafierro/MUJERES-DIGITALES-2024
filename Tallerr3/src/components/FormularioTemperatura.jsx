import React from 'react';

const FormularioTemperatura = ({ celsius, setCelsius, fahrenheit, setFahrenheit, manejarEnvio }) => {
  return (
    <form onSubmit={manejarEnvio}>
      <div>
        <label>Ingrese la temperatura en Celsius:</label>
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
        />
      </div>
      <div>
        <label>Ingrese la temperatura en Fahrenheit:</label>
        <input
          type="number"
          value={fahrenheit}
          onChange={(e) => setFahrenheit(e.target.value)}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioTemperatura;
