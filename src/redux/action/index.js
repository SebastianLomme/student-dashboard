export const setData = (data) => {
    return {
        type: "SET_DATA",
        payload: data
    };
};

export const setStudentInfo = (info) => {
    return {
        type: "SET_STUDENT_INFO",
        payload: info,
    };
};

export const filterDataAssignment = (data) => {
    return {
        type: "FILTER_DATA_ASSIGNMENT",
        payload: data
    };
};
export const filterDataStudents = (data) => {
    return {
        type: "FILTER_DATA_STUDENTS",
        payload: data
    };
};

export const getAverage = () => {
    return {
        type: "GET_AVERAGE",
    };
};

export const resetData = () => {
    return {
        type: "RESET_DATA",
    };
};

export const showInGraf = (data) => {
    return {
        type: "SHOW_IN_GRAF",
        payload: data,
    };
};

export const sortData = (sort) => {
    return {
        type: "SORT_DATA",
        payload: sort
    };
};