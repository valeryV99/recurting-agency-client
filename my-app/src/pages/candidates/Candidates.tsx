import { useHistory } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getCandidates } from '../../services/candidates'

const Candidates = () => {
  const { data, loading } = useRequest(getCandidates)
  console.log(data, 'data')
  const history = useHistory()
  return (
    <div>
      Candidates
      <button onClick={() => history.push('candidates/new')}>
        Create candidate
      </button>
    </div>
  )
}

export default Candidates
