const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}

export const fetchMakes = () => {
    return dispatch => {
        fetch(url)
        .then(response => response.json())
        .then(response => {
            const ation = {
                type: "FETCH_MAKES",
                value: response.Results
            }
            dispatch(action)
        })
    }
}

export const deleteMake = (index) => {
    return {
        type: 'DELETE_MAKES',
        value: index
    }
}