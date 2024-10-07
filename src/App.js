import React, { useState } from 'react';
import CertificateForm from './components/CertificateForm';
import CertificateResult from './components/CertificateResult';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <CertificateForm setResult={setResult} setError={setError} setLoading={setLoading} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {result && <CertificateResult result={result} />}
    </div>
  );
}

export default App;
