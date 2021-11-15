import { useForm } from 'react-hook-form'

interface CustomerFormFields {
  customerName: string;
  customerAddress: string;
}

const CustomerForm = () => {
  const { watch, register, setValue, handleSubmit } =
    useForm<CustomerFormFields>({
      defaultValues: {
        customerName: '',
        customerAddress: '',
      },
    })
  const { customerName, customerAddress } = watch()

  return (
    <form onSubmit={handleSubmit((data) => console.log(data, 'data'))}>
      <div>
        <label>Customer name</label>
        <input type="text" value={customerName} />
      </div>
      <div>
        <label>Customer address</label>
        <input type="text" value={customerAddress} />
      </div>
    </form>
  )
}

export default CustomerForm
