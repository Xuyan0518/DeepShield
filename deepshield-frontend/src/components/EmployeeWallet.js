import React, { useState } from 'react';

const EmployeeWallet = ({ did, vc }) => {
  return (
    <div>
      <h2>Employee Digital Wallet</h2>
      <p><strong>DID:</strong> {did}</p>
      <p><strong>Verifiable Credentials:</strong> {vc}</p>
    </div>
  );
};

export default EmployeeWallet;
