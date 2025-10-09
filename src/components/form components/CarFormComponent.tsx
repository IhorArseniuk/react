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

            <label className={'flex flex-col'}><b>brand</b>
            <input className={' border-2 border-green-700'} type={'text'} {...register('brand')}/>
                {errors.brand && <div>{errors.brand.message}</div>}
            </label>
            <label className={'flex flex-col'}><b>price</b>
                <input className={'border-2 border-purple-800'} type={'number'} {...register('price')}/>
                {errors.price && <div>{errors.price.message}</div>}
            </label>
            <label className={'flex flex-col '}><b>year</b>
            <input className={'border-2 border-amber-300'} type={'number'} {...register('year')}/>
                {errors.year && <div>{errors.year.message}</div>}
            </label>
                <button type={"submit"} className={'border-2 border-amber-700 bg-lime-400 h-10'} disabled={!isValid}>Send</button>
        </form>

            </div>
        </>
    );
};
