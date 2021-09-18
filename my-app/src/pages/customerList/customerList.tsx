import React from 'react'
import { useRequest } from 'ahooks'
import { Customer, getCustomers } from '../../services/customersService'
import CustomerCard from './components'
import Spinner from '../../components/spinner'

const Customers = () => {
  const { data, loading } = useRequest<Customer[]>(getCustomers, {
    initialData: [],
  })

  return (
    <>
      {loading && <Spinner />}
      <div className="content-header">
        <h1>Companies</h1>
        <button>Add company</button>
      </div>
      <div className="customer-card__list">
        {data?.map((customer) => (
          <CustomerCard {...customer} />
        ))}
      </div>
    </>
  )
}

export default Customers
