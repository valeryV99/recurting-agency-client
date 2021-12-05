import React from 'react'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getCustomer } from '../../services/customersService'
import { Customer as ICustomer } from '../../services/customersService'
import Spinner from '../../components/spinner'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import EmployeesTab from './components/tabs/employees'
import PositionsTab from './components/tabs/positions'

const Customer = () => {
  const { id } = useParams<{ id: string }>()
  const { data: customer, loading } = useRequest<ICustomer>(() =>
    getCustomer(id)
  )

  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      <h1>
        <span>Company: </span>
        <span>{customer?.customerName}</span>
      </h1>
      <div className="customer__info__block">
        <h2>Address: </h2>
        <span>{customer?.address}</span>
      </div>
      <Tabs>
        <TabList>
          <Tab>Positions</Tab>
          <Tab>Employees</Tab>
        </TabList>
        <TabPanel>
          <PositionsTab customerId={id} />
        </TabPanel>
        <TabPanel>
          <EmployeesTab customerId={id} />
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Customer
