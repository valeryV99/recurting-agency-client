import React from "react";
import { useForm } from "react-hook-form";
import { login, whoAmI} from "../../services/authService";

interface AuthFormFields {
    email: string;
    password: string;
}

const Auth = () => {
    const { register, handleSubmit, watch, setValue } = useForm<AuthFormFields>({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const { email, password } = watch();


    return <form onSubmit={handleSubmit(data => login(data).then((res) => console.log(res, 'res')))}>
        <label>Email:</label>
        <input
            {...register('email')}
            value={email}
            onChange={({target:{value}})=>setValue('email', value)}
        />
        <label>password:</label>
        <input
            {...register('password')}
            value={password}
            onChange={({target:{value}})=>setValue('password', value)}
        />
        <button type='submit'>
            Войти
        </button>

        <button type="button" onClick={() =>whoAmI().then((res) => console.log(res, 'res'))}>
                rrr
        </button>
    </form>
}

export default Auth;