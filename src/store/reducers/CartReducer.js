import { ADD_TO_CART ,  GET_CARTBY_USER ,UPDATE_CART} from "../actions/ActionConstants";

const initialState = {
    cart: null,
    updatedCart:null
    

}

export default function CartReducer(state=initialState,action)
{
    if(action.type === ADD_TO_CART)
    {
        return (
            {
                ...state,
                cart:action.payload
            }
        )
    }

    else if(action.type === UPDATE_CART)
    {
        return (
            {
                ...state,
                updatedCart : action.payload
            }
        )
    }

    else if(action.type === GET_CARTBY_USER)
    {
        return (
            {
                ...state,
                cart : action.payload
            }
        )
    }

    else
    {
        return state ;
    }
}