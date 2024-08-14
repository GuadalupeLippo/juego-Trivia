import React, { useState } from 'react';
import './creditCardForm.css';

export function CreditCardForm (){
  const [cardType, setCardType] = useState('credit');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cardName, setCardName] = useState('');
  const [dni, setDni] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías manejar la lógica de envío del formulario
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="cardType" className="form-label">Tipo de Tarjeta</label>
        <select
          id="cardType"
          className="form-select"
          value={cardType}
          onChange={(e) => setCardType(e.target.value)}
          required
        >
          <option value="credit">Crédito</option>
          <option value="debit">Débito</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="cardNumber" className="form-label">Número de Tarjeta</label>
        <input
          type="text"
          className="form-control"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cvv" className="form-label">Código en el Reverso (CVV)</label>
        <input
          type="text"
          className="form-control"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />
      </div>
 <div className="mb-3">
<label htmlFor="expiryDate" className="form-label">Fecha de Expiración</label>
<input
  type="text"
  className="form-control"
  id="expiryDate"
  placeholder="MM/AA"
  value={expiryDate}
  onChange={(e) => setExpiryDate(e.target.value)}
  required
/>
</div>
      <div className="mb-3">
        <label htmlFor="cardName" className="form-label">Nombre del Titular</label>
        <input
          type="text"
          className="form-control"
          id="cardName"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dni" className="form-label">DNI del Titular</label>
        <input
          type="text"
          className="form-control"
          id="dni"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          required
        />
      </div>
     
    </form>
  );
};



