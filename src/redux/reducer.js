// all states
const initialState = {
    city : '',
    country : '',
    weather : null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_CITY' : return {
            ...state,
            city : action.payload
        }
        case 'SET_COUNTRY' : return {
            ...state,
            country : action.payload
        }
        case 'SET_WEATHER' : return {
            ...state,
            weather : action.payload
        }
        default : return state
    }
}

export default reducer