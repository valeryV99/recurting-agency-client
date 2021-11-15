import React, { useEffect } from 'react'
import { useRequest } from 'ahooks'
import { Customer, getCustomers } from '../../services/customersService'
import CustomerCard from './components'
import Spinner from '../../components/spinner'
import { useStore } from '../../hooks.context'
import { useHistory } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

const Customers = () => {
  const history = useHistory()
  const { customerListStore } = useStore()
  const { data, loading } = useRequest<Customer[]>(getCustomers, {
    initialData: [],
  })

  useEffect(() => {
    if (data) {
      console.log(data)
      customerListStore.setCustomerList(data)
    }
  }, [loading, data])

  if (loading) {
    return <Spinner />
  }

  const handleGoToCustomer = (id: string) => history.push(`/customers/${id}`)
  return (
    <>
      <div className="content-header">
        <h1>Companies</h1>
        <button onClick={() => history.push(`/customers/new/`)}>
          Add company
        </button>
      </div>
      <div className="customer-card__list">
        {customerListStore.customerList.map((customer) => (
          <CustomerCard
            key={customer.id}
            onGoToCustomer={handleGoToCustomer}
            {...customer}
          />
        ))}
      </div>
    </>
  )
}

export default observer(Customers)
