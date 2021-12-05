import { useForm } from 'react-hook-form'
import Select from 'react-select'
import { useEffect } from 'react'
import { useRequest } from 'ahooks'
import { getCandidates } from '../../../../services/candidates'
import { getAllPositions } from '../../../../services/positionsService'
import { createInterview } from '../../../../services/InterviewsService'

interface InterviewFormFields {
  candidateId: string;
  positionId: string;
  interviewDate: string;
  rating: number;
  sociability: number;
  teamwork: number;
  attentionToDetails: number;
  selfMotivation: number;
}

const InterviewForm = () => {
  const { data: candidates = [] } = useRequest(getCandidates)
  const { data: positions = [] } = useRequest(getAllPositions)

  const { register, handleSubmit, watch, setValue, reset } =
    useForm<InterviewFormFields>({
      defaultValues: {
        candidateId: '',
        positionId: '',
        interviewDate: '',
        rating: 0,
        sociability: 0,
        teamwork: 0,
        attentionToDetails: 0,
        selfMotivation: 0,
      },
    })

  const {
    interviewDate,
    rating,
    sociability,
    teamwork,
    attentionToDetails,
    selfMotivation,
  } = watch()

  useEffect(() => {
    register('candidateId')
    register('positionId')
  }, [])
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        const response = await createInterview(data)
        console.log(response, 'response')
      })}
    >
      <div className="form-field">
        <label>Кандидат</label>
        <Select
          // @ts-ignore
          options={Array.from(candidates, ({ id, name, surname }) => ({
            value: id,
            label: `${surname} ${name}`,
          }))}
          // @ts-ignore
          onChange={({ value }: { value: string }) =>
            setValue('candidateId', value)
          }
        />
      </div>
      <div className="form-field">
        <label>Позиция</label>
        <Select
          // @ts-ignore
          options={Array.from(positions, ({ id, position }) => ({
            value: id,
            label: position,
          }))}
          // @ts-ignore
          onChange={({ value }: { value: string }) =>
            setValue('positionId', value)
          }
        />
      </div>
      <div className="form-field">
        <label>Дата проведения интервью</label>
        <input
          {...register('interviewDate')}
          type="date"
          value={interviewDate}
          onChange={({ target: { value } }) => setValue('interviewDate', value)}
        />
      </div>
      <div className="form-field">
        <label>Рейтинг кандидата</label>
        <input
          {...register('rating')}
          type="number"
          onChange={({ target: { value } }) => setValue('rating', +value)}
          value={rating}
          max={5}
          min={0}
        />
      </div>
      <div className="form-field">
        <label>Рейтинг общительности кандидата</label>
        <input
          {...register('sociability')}
          type="number"
          onChange={({ target: { value } }) => setValue('sociability', +value)}
          value={sociability}
          max={5}
          min={0}
        />
      </div>
      <div className="form-field">
        <label>Рейтинг командной работы кандидата</label>
        <input
          {...register('teamwork')}
          type="number"
          onChange={({ target: { value } }) => setValue('teamwork', +value)}
          value={teamwork}
          max={5}
          min={0}
        />
      </div>
      <div className="form-field">
        <label>Рейтинг внимательности кандидата к деталям</label>
        <input
          {...register('attentionToDetails')}
          type="number"
          onChange={({ target: { value } }) =>
            setValue('attentionToDetails', +value)
          }
          value={attentionToDetails}
          max={5}
          min={0}
        />
      </div>
      <div className="form-field">
        <label>Рейтинг само мотивации кандидата</label>
        <input
          {...register('selfMotivation')}
          type="number"
          onChange={({ target: { value } }) =>
            setValue('selfMotivation', +value)
          }
          value={selfMotivation}
          max={5}
          min={0}
        />
      </div>
      <button type="submit">Создать интервью</button>
    </form>
  )
}

export default InterviewForm
