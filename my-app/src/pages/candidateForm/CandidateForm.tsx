import { useForm } from 'react-hook-form'
import Select, { GroupBase } from 'react-select'
import { createCandidate } from '../../services/candidates'
import { useEffect } from 'react'
import { useRequest } from 'ahooks'
import { getAllRecruiters } from '../../services/recruiterService'
import { getAllPositions } from '../../services/positionsService'

const options = [
  { value: 'cfdf3ea5-25c8-49e7-8fdd-7bb372bfb9a4', label: 'Chocolate' },
  { value: 'cfdf3ea5-25c8-49e7-8fdd-7bb372bfb9a4', label: 'Strawberry' },
  { value: 'cfdf3ea5-25c8-49e7-8fdd-7bb372bfb9a4', label: 'Vanilla' },
]

export interface CandidateFormFields {
  name: string;
  surname: string;
  patronymic: string;
  photo: string;
  birth: string;
  residenceAddress: string;
  possiblePosition: string;
  skills: string;
  education: string;
  desiredSalary: number;
  status: string;
  recruiterId: string;
}

const CandidateForm = () => {
  const { data: recruiters = [] } = useRequest(getAllRecruiters)
  const { data: positions = [] } = useRequest(getAllPositions)
  const { register, watch, setValue, handleSubmit } =
    useForm<CandidateFormFields>({
      defaultValues: {
        recruiterId: '',
        photo: '',
        surname: '',
        name: '',
        patronymic: '',
        birth: '',
        residenceAddress: '',
        education: '',
        possiblePosition: '',
        status: '',
        skills: '',
        desiredSalary: 0,
      },
    })

  const {
    name,
    surname,
    recruiterId,
    patronymic,
    photo,
    birth,
    residenceAddress,
    possiblePosition,
    skills,
    education,
    desiredSalary,
    status,
  } = watch()

  useEffect(() => {
    register('recruiterId')
    register('possiblePosition')
  }, [])

  console.log(recruiterId, 'recruiterId')
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        console.log(data, 'data')
        const response = await createCandidate(data)
        console.log(response, 'response')
      })}
    >
      <div className="form-field">
        <label htmlFor="">Candidate name</label>
        <input
          {...register('name')}
          type="text"
          value={name}
          onChange={({ target: { value } }) => setValue('name', value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="">Candidate surname</label>
        <input
          {...register('surname')}
          type="text"
          value={surname}
          onChange={({ target: { value } }) => setValue('surname', value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="">Candidate patronymic</label>
        <input
          {...register('patronymic')}
          type="text"
          value={patronymic}
          onChange={({ target: { value } }) => setValue('patronymic', value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="">Candidate photo</label>
        <input
          {...register('photo')}
          type="text"
          value={photo}
          onChange={({ target: { value } }) => setValue('photo', value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="">Candidate birth</label>
        <input
          {...register('birth')}
          type="text"
          value={birth}
          onChange={({ target: { value } }) => setValue('birth', value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="">Candidate residence address</label>
        <input
          {...register('residenceAddress')}
          type="text"
          value={residenceAddress}
          onChange={({ target: { value } }) =>
            setValue('residenceAddress', value)
          }
        />
      </div>
      <div className="form-field">
        <label htmlFor="">Candidate skills</label>
        <input
          {...register('skills')}
          type="text"
          value={skills}
          onChange={({ target: { value } }) => setValue('skills', value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="">Candidate education</label>
        <input
          {...register('education')}
          type="text"
          value={education}
          onChange={({ target: { value } }) => setValue('education', value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="">Candidate Desired salary</label>
        <input
          {...register('desiredSalary')}
          type="number"
          value={desiredSalary}
          onChange={({ target: { value } }) =>
            setValue('desiredSalary', +value)
          }
        />
      </div>
      <div className="form-field">
        <label htmlFor="">Status of Candidate</label>
        <input
          {...register('status')}
          type="text"
          value={status}
          onChange={({ target: { value } }) => setValue('status', value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="">Candidate possible position</label>
        <Select
          // @ts-ignore
          options={Array.from(positions, ({ position, id }) => ({
            value: id,
            label: position,
          }))}
          // @ts-ignore
          onChange={({ value }: { value: string }) => {
            console.log(value, 'value')
            setValue('possiblePosition', value)
          }}
        />
      </div>
      <div className="form-field">
        <label htmlFor="">Assigned recruiter</label>
        <Select
          // @ts-ignore
          options={Array.from(recruiters, ({ name, id }) => ({
            value: id,
            label: name,
          }))}
          // @ts-ignore
          onChange={({ value }: { value: string }) => {
            console.log(value, 'value')
            setValue('recruiterId', value)
          }}
        />
      </div>
      <button type="submit">Create candidate</button>
    </form>
  )
}
export default CandidateForm
