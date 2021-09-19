import React from 'react'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getCustomer } from '../../services/customersService'
import { Customer as ICustomer } from '../../services/customersService'
import Spinner from '../../components/spinner'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
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
        <span>{customer?.name}</span>
      </h1>
      <Tabs>
        <TabList>
          <Tab>Positions</Tab>
          <Tab>Employees</Tab>
        </TabList>
        <TabPanel>
          <PositionsTab customerId={id} />
        </TabPanel>
        <TabPanel>
          <span>22</span>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Customer
