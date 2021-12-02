import { useHistory } from 'react-router-dom'
import { Tab } from 'react-tabs'
import Table from '../../components/table'
import { useMemo } from 'react'
import { useRequest } from 'ahooks'
import { getAllInterviews } from '../../services/InterviewsService'

const Interviews = () => {
  const { data } = useRequest(getAllInterviews)
  console.log(data, 'data')
  const history = useHistory()

  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: 'ИД',
  //       accessor: 'id',
  //     },
  //     {
  //       Header: 'Фото',
  //       accessor: 'photo',
  //     },
  //     {
  //       Header: 'Имя',
  //       accessor: 'name',
  //     },
  //     {
  //       Header: 'Фамилия',
  //       accessor: 'surname',
  //     },
  //     {
  //       Header: 'Отчество',
  //       accessor: 'patronymic',
  //     },
  //     {
  //       Header: 'Образование',
  //       accessor: 'education',
  //     },
  //     {
  //       Header: 'Дата рождения',
  //       accessor: 'birth',
  //     },
  //     {
  //       Header: 'Возможная позиция',
  //       accessor: 'possiblePosition',
  //     },
  //     {
  //       Header: 'Прикрепленный рекрутер',
  //       accessor: 'recruiterId',
  //     },
  //     {
  //       Header: 'Адрес',
  //       accessor: 'residenceAddress',
  //     },
  //     {
  //       Header: 'Умения',
  //       accessor: 'skills',
  //     },
  //     {
  //       Header: 'Статус кандидата',
  //       accessor: 'status',
  //     },
  //   ],
  //   []
  // )

  return (
    <div>
      <button onClick={() => history.push('/interview/new')}>
        Create interview
      </button>
      {/*<Table columns={} data={} />*/}
    </div>
  )
}

export default Interviews
