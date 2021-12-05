import { useHistory } from 'react-router-dom'
import Table from '../../components/table'
import { useMemo } from 'react'
import { useRequest } from 'ahooks'
import { getAllInterviews } from '../../services/InterviewsService'

const Interviews = () => {
  const { data = [] } = useRequest(getAllInterviews)
  const history = useHistory()

  const columns = useMemo(
    () => [
      {
        Header: 'ИД',
        accessor: 'id',
      },
      {
        Header: 'Позиция',
        accessor: 'positionId',
      },
      {
        Header: 'Кандидат',
        accessor: 'candidateId',
      },
      {
        Header: 'Дата проведения интервью',
        accessor: 'interviewDate',
      },
      {
        Header: 'Рейтинг кандидата',
        accessor: 'rating',
      },
      {
        Header: 'Рейтинг общительности кандидата',
        accessor: 'sociability',
      },
      {
        Header: 'Рейтинг командной работы кандидата',
        accessor: 'teamwork',
      },
      {
        Header: 'Рейтинг внимательности кандидата к деталям',
        accessor: 'attentionToDetails',
      },
      {
        Header: 'Рейтинг само мотивации кандидата',
        accessor: 'selfMotivation',
      },
    ],
    []
  )

  return (
    <div>
      <button onClick={() => history.push('/interview/new')}>
        Создать интервью
      </button>
      <Table columns={columns} data={data} />
    </div>
  )
}

export default Interviews
