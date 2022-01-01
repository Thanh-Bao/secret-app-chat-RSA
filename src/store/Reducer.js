
import { SWITCH_FORM } from "./constants";

const initState = {
    isShowLoginForm: true
}

function reducer(state, action) {
    switch (action.type) {
        case SWITCH_FORM:
            return {
                ...state,
                isShowLoginForm: action.payload
            }
        default:
            throw new Error("error action")
    }
};

export { initState };
export default reducer;