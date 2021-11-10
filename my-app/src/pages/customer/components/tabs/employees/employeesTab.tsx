import { useRequest } from 'ahooks'
import {
  getEmployees,
  IEmployees,
} from '../../../../../services/customerEmployes'
import Spinner from '../../../../../components/spinner'
import ImgMe from './me.jpg'

interface PositionsTabProps {
  customerId: string;
}

const EmployeesTab = ({ customerId }: PositionsTabProps) => {
  const { data: employees = [], loading } = useRequest<IEmployees[]>(() =>
    getEmployees(customerId)
  )
  console.log(employees, 'employees')
  if (loading) {
    return <Spinner />
  }

  return (
    <div className="table">
      <div>
        <div className="table__header">
          <div className="table__header__item">Id</div>
          <div className="table__header__item">Photo</div>
          <div className="table__header__item">Surname</div>
          <div className="table__header__item">Name</div>
          <div className="table__header__item">Patronymic</div>
          <div className="table__header__item">Birth</div>
          <div className="table__header__item">Address</div>
          <div className="table__header__item">Education</div>
          <div className="table__header__item">Position</div>
          <div className="table__header__item">Status</div>
          <div className="table__header__item">StartDate</div>
          <div className="table__header__item">EndDate</div>
          <div className="table__header__item">Leaving reason</div>
        </div>
        {employees.map(
          ({
            id,
            name,
            photo,
            surname,
            patronymic,
            birth,
            residenceAddress,
            education,
            position,
            status,
            startDate,
            endDate,
            reasonForLeaving,
          }) => (
            <div key={id} className="table__row">
              <div className="table__content__item">{id}</div>
              <div className="table__content__item">
                <img src={ImgMe} alt="photo" />
              </div>
              <div className="table__content__item">{surname}</div>
              <div className="table__content__item">{name}</div>
              <div className="table__content__item">{patronymic}</div>
              <div className="table__content__item">{birth}</div>
              <div className="table__content__item">{residenceAddress}</div>
              <div className="table__content__item">{education}</div>
              <div className="table__content__item">{position}</div>
              <div className="table__content__item">{status}</div>
              <div className="table__content__item">{startDate}</div>
              <div className="table__content__item">{endDate}</div>
              <div className="table__content__item">{reasonForLeaving}</div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default EmployeesTab
