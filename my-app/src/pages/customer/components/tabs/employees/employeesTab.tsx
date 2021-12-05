import { useRequest } from 'ahooks'
import {
  getEmployees,
  IEmployees,
} from '../../../../../services/customerEmployes'
import Spinner from '../../../../../components/spinner'
import { useHistory, useParams } from 'react-router-dom'
import Table from '../../../../../components/table'
import { useMemo } from 'react'

interface PositionsTabProps {
  customerId: string;
}

const EmployeesTab = ({ customerId }: PositionsTabProps) => {
  const { data: employees = [], loading } = useRequest<IEmployees[]>(() =>
    getEmployees(customerId)
  )
  const history = useHistory()
  const { id } = useParams<{ id: string }>()

  const columns = useMemo(
    () => [
      {
        Header: 'ИД',
        accessor: 'id',
      },
      {
        Header: 'Фото',
        accessor: 'photo',
      },
      {
        Header: 'Имя',
        accessor: 'name',
      },
      {
        Header: 'Фамилия',
        accessor: 'surname',
      },
      {
        Header: 'Отчество',
        accessor: 'patronymic',
      },
      {
        Header: 'Дата рождения',
        accessor: 'birth',
      },
      {
        Header: 'Адрес проживания',
        accessor: 'residenceAddress ',
      },
      {
        Header: 'Образование',
        accessor: 'education',
      },
      {
        Header: 'Позиция',
        accessor: 'position',
      },
      {
        Header: 'ЗП',
        accessor: 'salary',
      },
      {
        Header: 'Статус',
        accessor: 'status',
      },
      {
        Header: 'Начало работы',
        accessor: 'startDate',
      },
      {
        Header: 'Дата увольнения',
        accessor: 'endDate',
      },
      {
        Header: 'Причина увольнения',
        accessor: 'leavingReason',
      },
    ],
    []
  )

  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      <button onClick={() => history.push(`/customers/${id}/employee/new`)}>
        Добавить работника
      </button>
      <Table columns={columns} data={employees} />
    </div>
  )
}

export default EmployeesTab
