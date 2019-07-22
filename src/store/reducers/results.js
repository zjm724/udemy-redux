import * as actionType from '../actions/actions';


const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value:action.result})
            }
        case actionType.DELETE_RESULT:
            // const id = action.id;
            // const newArray = [...state.results];
            // newArray.splice(id, i);
            
            const newArray = state.results.filter((result) => result.id !== action.id);

            return {
                ...state,
                results: newArray
            }
    }

    return state;
};

export default reducer;