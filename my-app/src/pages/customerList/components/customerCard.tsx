import React from 'react'
import { Customer } from '../../../services/customersService'

const CustomerCard = ({ id, name, address }: Customer) => (
  <div key={id} className="customer-card">
    <div className="customer-card__labels">
      <div className="customer-card__item">ID:</div>
      <div className="customer-card__item">NAME:</div>
      <div className="customer-card__item">ADDRESS:</div>
    </div>
    <div>
      <div className="customer-card__item">{id}</div>
      <div className="customer-card__item">{name}</div>
      <div className="customer-card__item">{address}</div>
    </div>
  </div>
)

export default CustomerCard
