import React from 'react'
import { useRequest } from 'ahooks'
import { Customer, getCustomers } from '../../services/customersService'
import CustomerCard from './components'
import SkeletonWrapper from '../../components/skeleton'
import Skeleton from './skeleton'

const Customers = () => {
  const { data, loading } = useRequest<Customer[]>(getCustomers, {
    initialData: [],
  })
  return (
    <SkeletonWrapper loading={loading} skeleton={<Skeleton />}>
      <div className="content-header">
        <h1>Companies</h1>
        <button>Add company</button>
      </div>
      <div className="customer-card__list">
        {data?.map((customer) => (
          <CustomerCard {...customer} />
        ))}
      </div>
    </SkeletonWrapper>
  )
}

export default Customers
