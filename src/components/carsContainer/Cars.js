import {useDispatch, useSelector} from "react-redux";
import {Car} from "./Car";
import {useEffect} from "react";
import {carService} from "../../services";
import {carActions} from "../../store";

const Cars = () => {
    const {cars, trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carActions.setAllCars(data)))
    }, [trigger]);
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};