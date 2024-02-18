import {useForm} from "react-hook-form";
import {carService} from "../services/CarService";
import {useEffect} from "react";

const CarsForm = ({setTrigger, carForUpdate}) => {
    const {register, reset, handleSubmit, formState:{isValid, errors}, setValue} = useForm({
        mode: 'all'
    })
    const save = async (car) => {
        await carService.create(car)
        setTrigger(prev=> !prev)
        reset()
    }

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        setTrigger(prev=> !prev)
        reset()
    }


    useEffect(() => {
        if(carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate]);
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand', {
                pattern:{
                    value: /^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/,
                    message: 'NOT VALID NAME'
                }
            })}/>
            <input type="text" placeholder={'price'} {...register('price',{
                valueAsNumber: true,
                min: {value:0, message: 'NOT VALID MIN NUMBER'},
                max: {value:1000000, message: 'NOT VALID MAX NUMBER'}
            })}/>
            <input type="text" placeholder={'year'} {...register('year',{
                valueAsNumber: true,
                min: {value:1990, message: 'NOT VALID MIN YEAR'},
                max: {value: new Date().getFullYear(), message: 'NOT VALID MAX YEAR'}
            })}/>
            <button disabled={!isValid}>Save</button>
            <button disabled={!isValid} onClick={handleSubmit(update)}>UpdateCar</button>
            {errors.brand && <div>{errors.brand.message}</div>}
        </form>
    );
};

export {CarsForm};