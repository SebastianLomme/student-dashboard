export const setData = (data) => {
    return {
        type: "SET_DATA",
        payload: data
    }
}

export const filterData = (data) => {
    return {
        type: "FILTER_DATA",
        payload: data
    }
}