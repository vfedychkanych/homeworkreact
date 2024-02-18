const Car = ({car, setCarForUpdate, deleteCar}) => {
    const {id, brand, price, year} = car
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>setCarForUpdate(car)}>SetToUpdate</button>
            <button onClick={()=>deleteCar(car)}>Delete</button>
        </div>
    );
};

export {Car};