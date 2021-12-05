import { useForm } from 'react-hook-form'
import Select from 'react-select'
import { createCandidate } from '../../services/candidates'
import { useEffect } from 'react'
import { useRequest } from 'ahooks'
import { getAllRecruiters } from '../../services/recruiterService'

export interface CandidateFormFields {
  name: string;
  surname: string;
  patronymic: string;
  photo: string;
  birth: string;
  residenceAddress: string;
  skills: string;
  education: string;
  desiredSalary: number;
  status: string;
  recruiterId: string;
}

const CandidateForm = () => {
  const { data: recruiters = [] } = useRequest(getAllRecruiters)
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
    skills,
    education,
    desiredSalary,
    status,
  } = watch()

  useEffect(() => {
    register('recruiterId')
  }, [])

  return (
    <form onSubmit={handleSubmit(async (data) => await createCandidate(data))}>
      <div className="form-field">
        <label htmlFor="">Имя кандидата</label>
        <input
          {...register('name')}
          type="text"
          value={name}
          onChange={({ target: { value } }) => setValue('name', value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="">Фамилия кандидата</label>
        <input
          {...register('surname')}
          type="text"
          value={surname}
          onChange={({ target: { value } }) => setValue('surname', value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="">Отчество кандидата</label>
        <input
          {...register('patronymic')}
          type="text"
          value={patronymic}
          onChange={({ target: { value } }) => setValue('patronymic', value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="">Фото кандидата</label>
        <input
          {...register('photo')}
          type="text"
          value={photo}
          onChange={({ target: { value } }) => setValue('photo', value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="">День рождения кандидата</label>
        <input
          {...register('birth')}
          type="date"
          value={birth}
          onChange={({ target: { value } }) => setValue('birth', value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="">Адрес проживания кандидата</label>
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
        <label htmlFor="">Умения кандидата</label>
        <input
          {...register('skills')}
          type="text"
          value={skills}
          onChange={({ target: { value } }) => setValue('skills', value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="">Образование кандидата</label>
        <input
          {...register('education')}
          type="text"
          value={education}
          onChange={({ target: { value } }) => setValue('education', value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="">Желаемая зп кандидата</label>
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
        <label htmlFor="">Статус собеседования кандидата</label>
        <input
          {...register('status')}
          type="text"
          value={status}
          onChange={({ target: { value } }) => setValue('status', value)}
        />
      </div>
      <div className="form-field">
        <label htmlFor="">Курирующий рекрутер</label>
        <Select
          // @ts-ignore
          options={Array.from(recruiters, ({ name, id }) => ({
            value: id,
            label: name,
          }))}
          // @ts-ignore
          onChange={({ value }: { value: string }) =>
            setValue('recruiterId', value)
          }
        />
      </div>
      <button type="submit">Создать кандидата</button>
    </form>
  )
}
export default CandidateForm
