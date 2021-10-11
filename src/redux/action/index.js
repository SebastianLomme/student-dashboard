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

export const resetData = () => {
    return {
        type: "RESET_DATA",
    }
}

export const showInGraf = (data) => {
    return {
        type: "SHOW_IN_GRAF",
        payload: data,
    }
}

export const sortData = (sort) => {
    return {
        type: "SORT_DATA",
        payload: sort
    }
}