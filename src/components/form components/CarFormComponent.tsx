import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/CarValidator.tsx";
import type {FormEvent} from "react";

export const CarFormComponent = () => {
type IFormProps={
    id: number,
    brand: string,
    price: number,
    year: number,
}
    const {handleSubmit,register,formState:{errors,isValid}}= useForm<IFormProps>({mode:'all',resolver:joiResolver(carValidator)});
    const customHandleSubmit=(e:FormEvent<IFormProps>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
    }
return (
        <>
            <div>
        <form onSubmit={handleSubmit(customHandleSubmit)}>
            <input type={'number'} {...register('id')}/>
            <input type={'text'} {...register('brand')}/>
            <input type={'number'} {...register('price')}/>
            <input type={'number'} {...register('year')}/>
        </form>
            </div>
        </>
    );
};
