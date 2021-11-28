import { useForm } from 'react-hook-form'
import {
  createPosition,
  editPositionById,
  getPositionById,
} from '../../../../services/positionsService'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export interface PositionFormFields {
  position: string;
  salary: string | number;
  skills: string;
  status: string;
  requirements: string;
  startDate: string;
  endDate: string;
}

const PositionForm = () => {
  const { id, positionId } = useParams<{ id: string, positionId: string }>()

  const { register, handleSubmit, watch, setValue, reset } =
    useForm<PositionFormFields>({
      defaultValues: {
        position: '',
        salary: '',
        skills: '',
        status: '',
        requirements: '',
        startDate: '',
        endDate: '',
      },
    })

  const { position, salary, skills, status, requirements, startDate, endDate } =
    watch()

  useEffect(() => {
    if (positionId) {
      const getPositionData = async () => {
        const response = await getPositionById(positionId)
        console.log(response, 'response')
        reset(response)
      }
      getPositionData()
    }
  }, [positionId])

  return (
    <form
      className="position-form"
      onSubmit={handleSubmit(async (data) => {
        // const response = await createPosition({
        //   ...data,
        //   salary: +data.salary,
        //   customerId: id,
        // })
        // console.log(response, 'response')
        if (positionId) {
          const responce = await editPositionById(positionId, {
            ...data,
            salary: Number(data.salary),
          })
          console.log(responce, 'responce')
        }
      })}
    >
      <div className="form-field">
        <label>Название вакансии</label>
        <input
          type="text"
          {...register('position')}
          value={position}
          onChange={({ target: { value } }) => setValue('position', value)}
        />
      </div>

      <div className="form-field">
        <label>Заработная плата</label>
        <input
          type="number"
          {...register('salary')}
          value={salary}
          onChange={({ target: { value } }) => setValue('salary', value)}
        />
      </div>

      <div className="form-field">
        <label>Стутус вакансии(открытая/закрытая)</label>
        <input
          type="string"
          {...register('status')}
          value={status}
          onChange={({ target: { value } }) => setValue('status', value)}
        />
      </div>

      <div className="form-field">
        <label>Умения</label>
        <input
          type="string"
          {...register('skills')}
          value={skills}
          onChange={({ target: { value } }) => setValue('skills', value)}
        />
      </div>

      <div className="form-field">
        <label>Требования</label>
        <input
          type="string"
          {...register('requirements')}
          value={requirements}
          onChange={({ target: { value } }) => setValue('requirements', value)}
        />
      </div>

      <div className="form-field">
        <label>Дата открытия вакансии</label>
        <input
          type="date"
          {...register('startDate')}
          value={startDate}
          onChange={({ target: { value } }) => setValue('startDate', value)}
        />
      </div>

      <div className="form-field">
        <label>Дата закрытия вакансии</label>
        <input
          type="date"
          {...register('endDate')}
          value={endDate}
          onChange={({ target: { value } }) => setValue('endDate', value)}
        />
      </div>

      <button type="submit">Создать вакансию</button>
    </form>
  )
}

export default PositionForm
