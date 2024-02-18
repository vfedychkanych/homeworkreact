import {useEffect, useState} from "react";
import {CarsForm} from "./CarsForm";
import {Cars} from "./Cars";
import {carService} from "../services/CarService";
import axios from "axios";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)

    const deleteCar = async (car) => {
        await carService.deleteById(car.id)
        setTrigger(prev=> !prev)
    }

    useEffect(() => {
        carService.getAll().then(({data})=> setCars(data))
    }, [trigger]);
    return (
        <div>
            <CarsForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} deleteCar={deleteCar}/>
        </div>
    );
};

export {CarsContainer};