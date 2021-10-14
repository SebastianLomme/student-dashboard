const initialState = {
    isLoading: true,
    data: [],
    students: [],
    assignments: [],
    showInGraf: "m-l",
    sortBy: "",
    studentInfo: [],
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_DATA":
            const assignments = []
            const students = []
            const dataArray = [];

            action.payload.forEach(data => {
                if (!assignments.includes(data.Opdracht)) {
                    assignments.push(data.Opdracht)
                }
                if (!students.includes(data.Naam)) {
                    students.push(data.Naam)
                }
                const object = {
                    Naam: data.Naam,
                    Opdracht: data.Opdracht,
                    Moeilijk: parseInt(data.Moeilijk),
                    Leuk: parseInt(data.Leuk),
                }
                dataArray.push(object);
            })

            const newAssignmentArray = []
            const studentsArray = []

            students.forEach(student => {
                const object = {
                    Naam: student,
                    IsFilter: true,
                }
                studentsArray.push(object)
            })

            assignments.forEach(assignment => {
                const filter = dataArray.filter(item => item.Opdracht === assignment)
                const averageDifficulty = filter.map(item => item.Moeilijk).reduce((previousValue, currentValue) => previousValue + currentValue, 0)/filter.length
                const averageFun = filter.map(item => item.Leuk).reduce((previousValue, currentValue) => previousValue + currentValue, 0)/filter.length
                const object = {
                    Opdracht: assignment,
                    Moeilijk: averageDifficulty,
                    Leuk: averageFun,
                    IsFilter: true,
                }
                newAssignmentArray.push(object)
            })
            console.log(newAssignmentArray)

            return {
                ...state,
                data: dataArray,
                students: studentsArray,
                assignments: newAssignmentArray,
                isLoading: false,
            };
        case "SET_STUDENT_INFO":
            return {
                ...state,
                studentInfo: action.payload
            };
        case "FILTER_DATA_ASSIGNMENT":
            const assignmentName = action.payload;
            const newArrayAssignments = []
            state.assignments.forEach(item => {
                if (item.Opdracht === assignmentName) {
                    const object = {
                        ...item,
                        IsFilter: !item.IsFilter,
                    };
                    newArrayAssignments.push(object);
                } else {
                    newArrayAssignments.push(item)
                }
            });
            return {
                ...state,
                assignments: newArrayAssignments,
            };
            case "FILTER_DATA_STUDENTS":
                const studentName = action.payload;
                const filterStudentArray = [];
            state.students.forEach(student => {
                    if (student.Naam === studentName) {
                        const object = {
                            ...student,
                            IsFilter: !student.IsFilter,
                        };
                        filterStudentArray.push(object)
                    } else {
                        filterStudentArray.push(student)
                    };
            });
                return {
                    ...state,
                    students: filterStudentArray,
                };
        case "GET_AVERAGE":
            const averageAssignments = []
            const filterStudents = state.students.filter(student => student.IsFilter === true).map(student => student.Naam)
            state.assignments.forEach(assignment => {
                const filter = state.data.filter(item => item.Opdracht === assignment.Opdracht && filterStudents.includes(item.Naam))
                const averageDifficulty = filter.map(item => item.Moeilijk).reduce((previousValue, currentValue) => previousValue + currentValue, 0) / filter.length
                const averageFun = filter.map(item => item.Leuk).reduce((previousValue, currentValue) => previousValue + currentValue, 0) / filter.length
                    const object = {
                        ...assignment,
                        Moeilijk: isNaN(averageDifficulty)   ? 0 : averageDifficulty,
                        Leuk:   isNaN(averageFun) ? 0 : averageFun,
                    }
                    averageAssignments.push(object)  
            });
            return {
                ...state,
                assignments: averageAssignments,
            };
        
        case "SHOW_IN_GRAF":
            return {
                ...state,
                showInGraf: action.payload,
            };
        case "RESET_DATA":
            const studentArray = state.students.map(student => {
                return ({
                    ...student,
                    IsFilter: true
                });
            });
            const assignmentArray = state.assignments.map(assignment => {
                return ({
                    ...assignment,
                    IsFilter: true
                });
            });
            return {
                ...state,
                students: studentArray,
                assignments: assignmentArray,
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