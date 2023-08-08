import { LOGIN_USER , CREATE_USER } from "../actions/ActionConstants";

const initialState = {
    loggedInUser : null,
    SignupInUser:null
    

}

export default function UserReducer(state=initialState,action)
{
    if(action.type === LOGIN_USER)
    {
        return (
            {
                ...state,
                loggedInUser:action.payload
            }
        )
    }

    else if(action.type === CREATE_USER)
    {
        return (
            {
                ...state,
                SignupInUser : action.payload
            }
        )
    }

    else
    {
        return state ;
    }
}