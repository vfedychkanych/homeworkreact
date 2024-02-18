import {Car} from "./Car";

const Cars = ({cars, setCarForUpdate, setCarForDelete, deleteCar}) => {
    return (
        <div>
            {cars.map(car => <Car car={car} key={car.id} setCarForUpdate={setCarForUpdate} setCarForDelete={setCarForDelete} deleteCar={deleteCar}/>)}
        </div>
    );
};

export {Cars};