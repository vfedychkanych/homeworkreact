import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    trigger: null
}

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers:{
        setAllCars: (state, action) => {
            state.cars = action.payload
        },
        trigger: state => {
            state.trigger = !state.trigger
        }
    }
})

const {reducer: carReducer, actions} = carSlice;

const carActions ={
    ...actions
}

export {
    carReducer,
    carActions
}