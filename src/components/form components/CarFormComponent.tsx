import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/CarValidator.ts";
import {postCar} from "../../service/CarsApi.tsx";
import type {CarPostType} from "../../models/CarType.ts";



export const CarFormComponent = () => {
type IFormProps={
    id: number,
    brand: string,
    price: number,
    year: number,
}
    const {handleSubmit,register,formState:{errors,isValid}}= useForm<IFormProps>({mode:'all',resolver:joiResolver(carValidator)});
    const customHandleSubmit=(e:CarPostType) => {console.log('Form data', e) ;
        return postCar(e)};
return (
        <>
            <div>
        <form  className={'flex gap-2 align-middle justify-center'} onSubmit={handleSubmit(customHandleSubmit)}>

            <label className={'flex flex-col'}>
            <input className={' border-2 border-green-700'} placeholder={'brand'} type={'text'} {...register('brand')}/>
                {errors.brand && <div>{errors.brand.message}</div>}
            </label>
            <label className={'flex flex-col'}>
                <input className={'border-2 border-purple-800'} placeholder={'price'} type={'number'} {...register('price')}/>
                {errors.price && <div>{errors.price.message}</div>}
            </label>
            <label className={'flex flex-col '}>
            <input className={'border-2 border-amber-300'} type={'number'} placeholder={'year'} {...register('year')}/>
                {errors.year && <div>{errors.year.message}</div>}
            </label>
                <button type={"submit"} className={'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'} disabled={!isValid}>Send</button>
        </form>

            </div>
        </>
    );
};
