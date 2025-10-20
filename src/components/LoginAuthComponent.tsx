import {useNavigate} from "react-router";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {loginFormValidator} from "../validators/loginFormValidator.ts";
import {DummyAuth} from "../service/DummyService.ts";

export const LoginAuthComponent = () => {
        const navigate= useNavigate()
        type FormLoginType={
            username:string,
            password:string,
        }
        const {handleSubmit,register,formState:{errors,isValid}}=useForm<FormLoginType>({mode:"all",resolver:joiResolver(loginFormValidator)})
        const customHandler=(form:FormLoginType)=>{
            navigate('/resources')
            DummyAuth(form.username,form.password,1)
        }
        return (
            <form  className={'flex gap-3 bg-violet-300 border-4 h-44 w-8/12 justify-center items-center ' } onSubmit={handleSubmit(customHandler)}>

                <label className={'gap-1 flex flex-col justify-center'}>
                    <input className={'p-2'} type="text" placeholder="username" {...register('username')}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>
                <label className={'flex gap-1 flex-col justify-center'}>
                    <input type="password" className={'p-2'} placeholder="Password" {...register('password')}/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label>
                <button className={'p-2 bg-red-600 border-4 h-11  '} disabled={!isValid} type={'submit'} >Login</button>
            </form>
        );
    };
