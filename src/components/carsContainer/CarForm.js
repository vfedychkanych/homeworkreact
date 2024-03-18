import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useDispatch} from "react-redux";
import {carActions} from "../../store";

const CarForm = () => {
    const {register, reset, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch();
    const save =  async (car) => {
        await carService.create(car)
        dispatch(carActions.trigger())
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>Save</button>
        </form>
    );
};

export {CarForm};