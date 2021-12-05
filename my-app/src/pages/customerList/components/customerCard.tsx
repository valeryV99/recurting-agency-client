import React from 'react'
import { Customer } from '../../../services/customersService'
import { observer } from 'mobx-react'

interface CustomerCardProps extends Customer {
  onGoToCustomer: (id: string) => void;
}

const CustomerCard = ({
  id,
  customerName,
  address,
  onGoToCustomer,
}: CustomerCardProps) => (
  <div onClick={() => onGoToCustomer(id)} className="customer-card">
    <div className="customer-card__labels">
      <div className="customer-card__item">ID:</div>
      <div className="customer-card__item">NAME:</div>
      <div className="customer-card__item">ADDRESS:</div>
    </div>
    <div className="customer-card__values">
      <div className="customer-card__item">{id}</div>
      <div className="customer-card__item">{customerName}</div>
      <div className="customer-card__item">{address}</div>
    </div>
  </div>
)

export default observer(CustomerCard)
