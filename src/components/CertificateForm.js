import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
const CertificateForm = ({ setResult, setError, setLoading }) => {
  const [domain, setDomain] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/check-certificate', { domain });
      setResult(response.data);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-4">
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
        <h2 className="mb-3">Check SSL Certificate</h2>
        <div className="mb-3">
          <label htmlFor="domain" className="form-label">Enter Domain Name:</label>
          <input
            type="text"
            id="domain"
            className="form-control"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="e.g., example.com"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Check SSL Certificate</button>
      </form>
    </div>
  );
};

export default CertificateForm;
