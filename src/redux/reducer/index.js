const initialState = {
    isLoading: true,
    data: [],
    students: [],
    assigments: [],
    showInGraf: "m-l",
    sortBy: "",
    studentInfo: [],
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_DATA":
            const filterStudent = (data) => {
                const students = [];
                data.forEach(student => {
                    if (!students.map(item => item.Naam).includes(student.Naam)) {
                        const object = {
                            Naam: student.Naam,
                            IsFilter: true,
                        };
                        students.push(object);
                    };
                });
                return students;
            };

            const filterAssigments = (data) => {
                const assigments = [];
                data.forEach(assigment => {
                    if (!assigments.includes(assigment.Opdracht)) {
                        assigments.push(assigment.Opdracht);
                    };
                });
                return assigments;
            };

            const students = filterStudent(action.payload);
            const assigments = filterAssigments(action.payload);
            const AvverageArray = [];

            const getAvverage = (data, filterNaam, filterGroep) => {
                const filterArray = data.filter(item => item.Opdracht === filterNaam).map(item => parseInt(item[filterGroep]));
                return filterArray.reduce((current, total) => current + total) / filterArray.length;
            };

            assigments.forEach(item => {
                const object = {
                    Opdracht: item,
                    Moeilijk: getAvverage(action.payload, item, "Moeilijk"),
                    Leuk: getAvverage(action.payload, item, "Leuk"),
                    IsFilter: true,
                };
                AvverageArray.push(object);
            });
            const dataArray = [];
            action.payload.forEach(item => {
                const object = {
                    Naam: item.Naam,
                    Opdracht: item.Opdracht,
                    Moeilijk: parseInt(item.Moeilijk),
                    Leuk: parseInt(item.Leuk),
                    IsFilter: true,
                };
                dataArray.push(object);
            });
            return {
                ...state,
                data: dataArray,
                students: students,
                assigments: AvverageArray,
                isLoading: false,
            };
        case "SET_STUDENT_INFO":
            return {
                ...state,
                studentInfo: action.payload
            };
        case "FILTER_DATA":
            const [id, filter] = action.payload;
            const newArrayStudents = [];
            state.students.forEach(item => {
                if (item.Naam === id) {
                    const object = {
                        ...item,
                        IsFilter: !item.IsFilter,
                    };
                    newArrayStudents.push(object)
                } else {
                    newArrayStudents.push(item)
                };
            });
            const newArrayAssigments = [];
            state.assigments.forEach(item => {
                const getAvverage = (filterName, filterGroep) => {
                    const filterStudentArray = newArrayStudents.filter(item => item.IsFilter === true).map(item => item.Naam);
                    const filterArray = state.data.filter(item => item.Opdracht === filterGroep).filter(item => filterStudentArray.includes(item.Naam)).map(item => item[filterName]);
                    return Math.round((filterArray.reduce((current, total) => current + total, 0) / filterArray.length) * 10) / 10;
                };
                if (item.Opdracht === id) {
                    const object = {
                        ...item,
                        Moeilijk: getAvverage("Moeilijk", item.Opdracht),
                        Leuk: getAvverage("Leuk", item.Opdracht),
                        IsFilter: !item.IsFilter,
                    };
                    newArrayAssigments.push(object);
                } else {
                    const object = {
                        ...item,
                        Moeilijk: getAvverage("Moeilijk", item.Opdracht),
                        Leuk: getAvverage("Leuk", item.Opdracht),
                    };
                    newArrayAssigments.push(object);
                };
            });
            const newDataArray = [];
            state.data.forEach(item => {
                if (item[filter] === id) {
                    const object = {
                        ...item,
                        IsFilter: !item.IsFilter
                    };
                    newDataArray.push(object);
                } else {
                    newDataArray.push(item);
                };
            });
            return {
                ...state,
                students: newArrayStudents,
                assigments: newArrayAssigments,
                data: newDataArray,
            };
        case "SHOW_IN_GRAF":
            return {
                ...state,
                showInGraf: action.payload,
            };
        case "RESET_DATA":
            const newArray = state.data.map(data => {
                return {
                    ...data,
                    IsFilter: true,
                };
            });

            const studentArray = state.students.map(student => {
                return ({
                    ...student,
                    IsFilter: true
                });
            });
            const assigmentArray = state.assigments.map(assigment => {
                return ({
                    ...assigment,
                    IsFilter: true
                });
            });
            return {
                ...state,
                data: newArray,
                students: studentArray,
                assigments: assigmentArray,
                showInGraf: "m-l",
                sortBy: "",
            };
        case "SORT_DATA":
            return {
                ...state,
                sortBy: action.payload
            };
        default: 
            return state;
    };
};