import { handleActions } from "redux-actions";
import { updateScroll } from "./actions";

const defaultState = {
    distanceScrolled : 0
};

const portfolioReducer = handleActions({
    [updateScroll]: (state, action) => {
        return {
            ...state,
            updateScroll: action.payload.scrollValue,
        }
    }
}, defaultState);

export default portfolioReducer;
