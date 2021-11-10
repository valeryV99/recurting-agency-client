import { useRequest } from 'ahooks'
import { useHistory, Link } from 'react-router-dom'
import Spinner from '../../../../../components/spinner'
import {
  getCustomerPositions,
  ICustomerPositions,
} from '../../../../../services/customerPositions'

interface PositionsTabProps {
  customerId: string;
}
const PositionsTab = ({ customerId }: PositionsTabProps) => {
  const { push } = useHistory()
  const { data: positions = [], loading } = useRequest<ICustomerPositions[]>(
    () => getCustomerPositions(customerId)
  )

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <Link
        to={(location) => ({
          ...location,
          pathname: `/customers/${customerId}/positions/new`,
        })}
      >
        <button>+ Add position</button>
      </Link>
      <div className="table">
        <div>
          <div className="table__header">
            <div className="table__header__item">Id</div>
            <div className="table__header__item">Position</div>
            <div className="table__header__item">Salary</div>
            <div className="table__header__item">Skills</div>
            <div className="table__header__item">Status</div>
            <div className="table__header__item">Requirements</div>
            <div className="table__header__item">StartDate</div>
            <div className="table__header__item">EndDate</div>
          </div>
          {positions.map(
            ({
              id,
              position,
              salary,
              skills,
              status,
              requirements,
              startDate,
              endDate,
            }) => (
              <div key={id} className="table__row">
                <div className="table__content__item">{id}</div>
                <div className="table__content__item">{position}</div>
                <div className="table__content__item">{salary}</div>
                <div className="table__content__item">{skills}</div>
                <div className="table__content__item">{status}</div>
                <div className="table__content__item">{requirements}</div>
                <div className="table__content__item">{startDate}</div>
                <div className="table__content__item">{endDate}</div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default PositionsTab
