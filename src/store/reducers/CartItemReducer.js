import { SAVE_CART_ITEM  , GETALL_ITEMS_BYUSER  } from "../actions/ActionConstants";

const initialState = {
    cartitem : null,
    cartitems : [],

}

export default function CartItemReducer(state=initialState,action)
{
    if(action.type === SAVE_CART_ITEM)
    {
        return (
            {
                ...state,
                cartitem:action.payload
            }
        )
    }

    else if(action.type === GETALL_ITEMS_BYUSER)
    {
        return (
            {
                ...state,
                cartitems : action.payload
            }
        )
    }

    else
    {
        return state ;
    }
}