import { useForm } from 'react-hook-form'
import { createPosition } from '../../../../services/positionsService'
import { useParams } from 'react-router-dom'

interface PositionFormFields {
  position: string;
  salary: string;
  skills: string;
  status: string;
  requirements: string;
  startDate: string;
  endDate: string;
}

const PositionForm = () => {
  const { id } = useParams<{ id: string }>()
  const { register, handleSubmit, watch, setValue } =
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

  return (
    <form
      className="position-form"
      onSubmit={handleSubmit(async (data) => {
        const response = await createPosition({
          ...data,
          salary: +data.salary,
          customerId: id,
        })
        console.log(response, 'response')
      })}
    >
      <div className="form-field">
        <label>Position name</label>
        <input
          type="text"
          {...register('position')}
          value={position}
          onChange={({ target: { value } }) => setValue('position', value)}
        />
      </div>

      <div className="form-field">
        <label>Salary</label>
        <input
          type="number"
          {...register('salary')}
          value={salary}
          onChange={({ target: { value } }) => setValue('salary', value)}
        />
      </div>

      <div className="form-field">
        <label>Status</label>
        <input
          type="string"
          {...register('status')}
          value={status}
          onChange={({ target: { value } }) => setValue('status', value)}
        />
      </div>

      <div className="form-field">
        <label>Skills</label>
        <input
          type="string"
          {...register('skills')}
          value={skills}
          onChange={({ target: { value } }) => setValue('skills', value)}
        />
      </div>

      <div className="form-field">
        <label>Requirements</label>
        <input
          type="string"
          {...register('requirements')}
          value={requirements}
          onChange={({ target: { value } }) => setValue('requirements', value)}
        />
      </div>

      <div className="form-field">
        <label>Start date</label>
        <input
          type="date"
          {...register('startDate')}
          value={startDate}
          onChange={({ target: { value } }) => setValue('startDate', value)}
        />
      </div>

      <div className="form-field">
        <label>End date</label>
        <input
          type="date"
          {...register('endDate')}
          value={endDate}
          onChange={({ target: { value } }) => setValue('endDate', value)}
        />
      </div>

      <button type="submit">Create position</button>
    </form>
  )
}

export default PositionForm
