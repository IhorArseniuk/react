import {useForm} from "react-hook-form";
import {loginFormValidator} from "../validators/loginFormValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";

export const AuthLoginPage = () => {
   type FormLoginType={
       username:string,
       password:string,
   }
    const {handleSubmit,register,formState:{errors,isValid}}=useForm<FormLoginType>({mode:"all",resolver:joiResolver(loginFormValidator)})
   const customHandler=(form:FormLoginType)=>{

   }
    return (
        <form onSubmit={handleSubmit(customHandler)}>
                   <label>
                   <input type="text" placeholder="username" {...register('username')}/>
                       {errors.username && <div>{errors.username.message}</div>}
                   </label>
                       <label>
                   <input type="password" placeholder="Password" {...register('password')}/>
                           {errors.password && <div>{errors.password.message}</div>}
                   </label>
                           <button disabled={!isValid} type={'submit'}>Login</button>
        </form>
    );
};
