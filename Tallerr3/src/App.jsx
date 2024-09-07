import React, { useState } from 'react';
import './App.css'; 
import FormularioTemperatura from './components/FormularioTemperatura';
import ResultadoTemperatura from './components/ResultadoTemperatura';

const App = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [resultado, setResultado] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();

    // Lógica para determinar el estado del agua
    const tempCelsius = parseFloat(celsius);
    const tempFahrenheit = parseFloat(fahrenheit);

    let resultadoTemp = '';
    if (tempCelsius >= 30 || tempFahrenheit >= 86) {
      resultadoTemp = 'Agua caliente';
    } else if (tempCelsius >= 10 || tempFahrenheit >= 50) {
      resultadoTemp = 'Agua tibia';
    } else {
      resultadoTemp = 'Agua fría';
    }

    setResultado(resultadoTemp);
  };

  return (
    <div className="contenedor">
      <h1>Calculador de Temperatura</h1>
      <FormularioTemperatura
        celsius={celsius}
        setCelsius={setCelsius}
        fahrenheit={fahrenheit}
        setFahrenheit={setFahrenheit}
        manejarEnvio={manejarEnvio}
      />
      <ResultadoTemperatura resultado={resultado} />
    </div>
  );
};

export default App;
