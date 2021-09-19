import { Customer } from '../../services/customersService'
import { makeAutoObservable } from 'mobx'

export class CustomerListStore {
  customerList: Customer[] = []

  constructor() {
    makeAutoObservable(this)
  }

  setCustomerList = (data: Customer[]) => {
    console.log(data, ' 777')
    this.customerList = data
    console.log(this.customerList, 'customerList')
  }

  getCustomer = (customerId: Customer['id']) =>
    this.customerList.find(({ id }) => id === customerId)

  get getCustomerList() {
    return this.customerList
  }
}
