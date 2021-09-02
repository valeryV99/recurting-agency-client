import React from 'react'
import { useForm } from 'react-hook-form'
import { login, WhoAmI, whoAmI } from '../../services/authService'
import { useHistory, withRouter, RouteComponentProps } from 'react-router-dom'

interface AuthFormFields {
  email: string;
  password: string;
}

interface AuthProps extends RouteComponentProps {
  user: WhoAmI | null;
}

const Auth = ({ user }: AuthProps) => {
  const { register, handleSubmit, watch, setValue } = useForm<AuthFormFields>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  let history = useHistory()

  const { email, password } = watch()

  if (user) {
    history.push('/')
  }
  return (
    <form
      onSubmit={handleSubmit((data) =>
        login(data).then((res) => console.log(res, 'res'))
      )}
    >
      <label>Email:</label>
      <input
        {...register('email')}
        value={email}
        onChange={({ target: { value } }) => setValue('email', value)}
      />
      <label>password:</label>
      <input
        {...register('password')}
        value={password}
        onChange={({ target: { value } }) => setValue('password', value)}
      />
      <button type="submit">Войти</button>

      <button
        type="button"
        onClick={() => whoAmI().then((res) => console.log(res, 'res'))}
      >
        rrr
      </button>
    </form>
  )
}

export default withRouter<AuthProps, any>(Auth)
