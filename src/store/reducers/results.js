import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value:action.result})});
        case actionTypes.DELETE_RESULT:
            // const id = action.id;
            // const newArray = [...state.results];
            // newArray.splice(id, i);
            
            const newArray = state.results.filter((result) => result.id !== action.id);

            return updateObject(state, {results: newArray});
    }

    return state;
};

export default reducer;