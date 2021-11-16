import { useForm } from 'react-hook-form'
import { createCustomer } from '../../../../services/customersService'

interface CustomerFormFields {
  name: string;
  address: string;
}

const CustomerForm = () => {
  const { watch, register, setValue, handleSubmit } =
    useForm<CustomerFormFields>({
      defaultValues: {
        name: '',
        address: '',
      },
    })
  const { name, address } = watch()

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        console.log(data, 'data')
        const customer = await createCustomer(data)
        console.log(customer, 'customer')
      })}
    >
      <div>
        <label>Customer name</label>
        <input
          {...register('name')}
          type="text"
          value={name}
          onChange={({ target: { value } }) => setValue('name', value)}
        />
      </div>
      <div>
        <label>Customer address</label>
        <input
          {...register('address')}
          type="text"
          value={address}
          onChange={({ target: { value } }) => setValue('address', value)}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  )
}

export default CustomerForm
