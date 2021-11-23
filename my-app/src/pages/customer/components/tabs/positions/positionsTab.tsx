import { useRequest } from 'ahooks'
import { useHistory, Link } from 'react-router-dom'
import Spinner from '../../../../../components/spinner'
import {
  getCustomerPositions,
  ICustomerPositions,
} from '../../../../../services/customerPositions'
import { useMemo } from 'react'
import Table from '../../../../../components/table'

interface PositionsTabProps {
  customerId: string;
}
const PositionsTab = ({ customerId }: PositionsTabProps) => {
  const { push } = useHistory()
  const { data: positions = [], loading } = useRequest<ICustomerPositions[]>(
    () => getCustomerPositions(customerId)
  )

  const columns = useMemo(
    () => [
      {
        Header: 'ИД',
        accessor: 'id',
      },
      {
        Header: 'Вакансия',
        accessor: 'position',
      },
      {
        Header: 'ЗП',
        accessor: 'salary',
      },
      {
        Header: 'Умения',
        accessor: 'skills',
      },
      {
        Header: 'Статус вакансии',
        accessor: 'status',
      },
      {
        Header: 'Требования',
        accessor: 'requirements',
      },
      {
        Header: 'Дата открытия',
        accessor: 'startDate',
      },
      {
        Header: 'Дата закрытия',
        accessor: 'endDate',
      },
    ],
    []
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
      <Table data={positions} columns={columns} />
    </>
  )
}

export default PositionsTab
