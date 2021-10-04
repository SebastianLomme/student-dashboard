
const initialState = {
    isLoading: true,
    data: []
}

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_DATA":
            // const newState = []
            // const NewStateArray = []
            // let lastName = action.payload[0].Naam
            // let object = {
            //     Opdrachten: []
            // }
            // action.payload.forEach(item => {
            //     if (item.Naam === lastName) {
            //         object = {
            //             Naam: lastName,
            //             Opdrachten: [...object.Opdrachten, {
            //                 opdracht: item.Opdracht,
            //                 Moeilijk: item.Moeilijk,
            //                 Leuk: item.Leuk
            //             }]
            //         }
            //     } else {
            //         newState.push(object)
            //         object = {
            //             Opdrachten: []
            //         }
            //         lastName = item.Naam
            //     }
            // })


            // console.log("NewStateArray: ", NewStateArray)
            // console.log("NewState: ", newState)
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            }
        default: {
            return state;
        }
    }
};