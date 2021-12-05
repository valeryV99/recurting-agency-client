import { useHistory } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getCandidates } from '../../services/candidates'
import Table from '../../components/table'
import { useMemo } from 'react'

const Candidates = () => {
  const { data = [], loading } = useRequest(getCandidates)
  console.log(data, 'data')
  console.log(data, 'data')

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
        Header: 'Образование',
        accessor: 'education',
      },
      {
        Header: 'Дата рождения',
        accessor: 'birth',
      },
      {
        Header: 'Прикрепленный рекрутер',
        accessor: 'recruiterId',
      },
      {
        Header: 'Адрес',
        accessor: 'residenceAddress',
      },
      {
        Header: 'Умения',
        accessor: 'skills',
      },
      {
        Header: 'Статус кандидата',
        accessor: 'status',
      },
    ],
    []
  )

  const history = useHistory()
  return (
    <div>
      <button onClick={() => history.push('candidates/new')}>
        Создать позицию
      </button>
      <Table data={data} columns={columns} />
    </div>
  )
}

export default Candidates
