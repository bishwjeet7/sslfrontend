import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
const CertificateResult = ({ result }) => {
  return (
    <div className="container my-4">
      <div className="result bg-light p-4 rounded shadow">
        <h2 className="mb-3">Certificate Information</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Validity Status:</strong> {result.validityStatus ? 'Valid' : 'Invalid'}
          </li>
          <li className="list-group-item">
            <strong>Expiration Date:</strong> {new Date(result.expirationDate).toLocaleString()}
          </li>
          <li className="list-group-item">
            <strong>Issuer Details:</strong> {result.issuerDetails}
          </li>
          <li className="list-group-item">
            <strong>Subject Details:</strong> {result.subjectDetails}
          </li>
          <li className="list-group-item">
            <strong>Valid for Domain:</strong> {result.validForDomain ? 'Yes' : 'No'}
          </li>
          <li className="list-group-item">
            <strong>CA is Valid:</strong> {result.caIsValid ? 'Yes' : 'No'}
          </li>
          <li className="list-group-item">
            <strong>Not Self Signed:</strong> {result.notSelfSigned ? 'Yes' : 'No'}
          </li>
          <li className="list-group-item">
            <strong>CRL/OCSP Status:</strong> {result.crlOcspStatus}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CertificateResult;
