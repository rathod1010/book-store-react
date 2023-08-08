import { SAVE_CART_ITEM , GETALL_ITEMS_BYUSER , DELETE_CART_ITEM } from "./ActionConstants";
import { saveCartItem , getAllItems ,deleteCartItem } from "../../services/CartItemServices";

export function addCartItem(payload)
{
    return(dispatch) => {
        return saveCartItem(payload).then(
            resp=> {
                dispatch(
                    addCartItemSuccess(resp.data)

                )
            }
        )

    }
}

export function addCartItemSuccess(data)
{
    return(
        {
            type:SAVE_CART_ITEM,
            payload:data
        }
    )
}

export function fetchAllItems(userId)
{
    return(dispatch) => {
        return getAllItems(userId).then(
            resp=> {
                dispatch(
                    fetchAllItemsSuccess(resp.data)

                )
            }
        )

    }
}

export function fetchAllItemsSuccess(data)
{
    return(
        {
            type:GETALL_ITEMS_BYUSER,
            payload:data
        }
    )
}

export function removeCartItem(cartItemId)
{
    return(dispatch) => {
        return deleteCartItem(cartItemId).then(
            ()=>
             {
                dispatch(
                    removeCartItemSuccess()

                )
            }
        ).catch(() => {
            // Handle error if necessary
          });

    }
}

export function removeCartItemSuccess()
{
    return(
        {
            type:DELETE_CART_ITEM,
            payload:{}
        }
    )
}