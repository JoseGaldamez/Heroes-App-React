import TYPES from "../types/types";

const authReducer = ( state = {}, action ) => {

    switch (action.type) {
        case TYPES.login:
            return {
                ...action.payload,
                logged: true
            }

        case TYPES.logout:
            return {
                logged: false,
            }
        default:
            break;
    }

}

export default authReducer;
