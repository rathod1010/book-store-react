import { ORDERS_BYUSERID , ORDERS_BYORDERID , CREATE_ORDER } from "../actions/ActionConstants";

const initialState = {
    orders: null,
    order:null,
    userorders:[]
    

}

export default function OrderReducer(state=initialState,action)
{
    if(action.type === CREATE_ORDER)
    {
        return (
            {
                ...state,
                order:action.payload
            }
        )
    }

    else if(action.type === ORDERS_BYUSERID)
    {
        return (
            {
                ...state,
                userorders : action.payload
            }
        )
    }

    else if(action.type === ORDERS_BYORDERID)
    {
        return (
            {
                ...state,
                orders : action.payload
            }
        )
    }

    else
    {
        return state ;
    }
}