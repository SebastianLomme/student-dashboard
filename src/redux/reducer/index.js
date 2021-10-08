
const initialState = {
    isLoading: true,
    data: [],
    students: [],
    assigments: [],
}

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_DATA":
            const filterStudent = (data) => {
                const students = []
                data.forEach(student => {
                    if (!students.map(item => item.Naam).includes(student.Naam)) {
                        const object = {
                            Naam: student.Naam,
                            IsFilter: true,
                        }
                        students.push(object)
                    }
                })
                return students
            }

            const filterAssigments = (data) => {
                const assigments = []
                data.forEach(assigment => {
                    if (!assigments.includes(assigment.Opdracht)) {
                        assigments.push(assigment.Opdracht)
                    }
                })
                return assigments
            }

            const students = filterStudent(action.payload)
            const assigments = filterAssigments(action.payload)
            const AvverageArray = []

            const getAvverage = (data, filterNaam, filterGroep) => {
                console.log("FilterData: ", data)
                const filterArray = data.filter(item => item.Opdracht === filterNaam).map(item => parseInt(item[filterGroep]))
                return filterArray.reduce((current, total) => current + total) / filterArray.length
            }

            assigments.forEach(item => {
                const object = {
                    Opdracht: item,
                    Moeilijk: getAvverage(action.payload, item, "Moeilijk"),
                    Leuk: getAvverage(action.payload, item, "Leuk"),
                    IsFilter: true,
                }
                AvverageArray.push(object)
            })
            const dataArray = []
            action.payload.forEach(item => {
                const object = {
                    Naam: item.Naam,
                    Opdracht: item.Opdracht,
                    Moeilijk: parseInt(item.Moeilijk),
                    Leuk: parseInt(item.Leuk),
                    IsFilter: true,
                }
                dataArray.push(object)
            })
            return {
                ...state,
                data: dataArray,
                students: students,
                assigments: AvverageArray,
                isLoading: false,
            }
        case "FILTER_DATA":
            const [id, filter, group] = action.payload
            const newArray = []
            state[group].forEach(item => {
                if ( item[filter] === id) {
                    const object = {
                        ...item,
                        IsFilter: !item.IsFilter,
                    }
                    newArray.push(object)
                } else {
                    newArray.push(item)
                }
            }) 
            const newDataArray = []
            const [filterArray] = newArray.filter(item => item[filter] === id)
            state.data.forEach(item => {
                if (item[filter] === id && filterArray.IsFilter === !item.IsFilter) {
                    const object = {
                        ...item,
                        IsFilter: !item.IsFilter
                    }
                    newDataArray.push(object)
                } else {
                    newDataArray.push(item)
                }

            })
            return {
                ...state,
                [group]: newArray,
                data: newDataArray,
            }
        
        default: {
            return state;
        }
    }
};