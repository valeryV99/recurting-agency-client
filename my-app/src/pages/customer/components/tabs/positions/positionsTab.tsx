import { useRequest } from 'ahooks'
import { getCustomerPositions } from '../../../../../services/customerPositions'
import Spinner from '../../../../../components/spinner'

interface PositionsTabProps {
  customerId: string;
}

const PositionsTab = ({ customerId }: PositionsTabProps) => {
  const { data: positions, loading } = useRequest(() =>
    getCustomerPositions(customerId)
  )
  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      {positions?.map((position) => (
        <div key={position.id}>
          <div>
            <div>Id</div>
            <div>Name</div>
            <div>Photo</div>
            <div>Surname</div>
            <div>Name</div>
            <div>patronymic</div>
          </div>
          <div>
            <div>{position.name}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PositionsTab
