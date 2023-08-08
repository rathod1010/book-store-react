import { ADD_TO_CART , GET_CARTBY_USER ,DELETE_CART,FETCH_CART_BY_USER_FAILURE,UPDATE_CART} from "./ActionConstants";
import { addItemToCart , getCartByUser ,deleteCart,updateCart} from "../../services/CartServices";

export function addToCart(payload)
{
    return(dispatch) => {
        return addItemToCart(payload).then(
            resp=> {
                dispatch(
                    addItemToCartSuccess(resp.data)

                )
            }
        )

    }
}
export function addItemToCartSuccess(data)
{
    return(
        {
            type:ADD_TO_CART,
            payload:data
        }
    )
}


export function updateTheCart(payload)
{
    return(dispatch) => {
        return updateCart(payload).then(
            resp=> {
                dispatch(
                    updateCartSuccess(resp.data)

                )
            }
        )

    }
}
export function updateCartSuccess(data)
{
    return(
        {
            type:UPDATE_CART,
            payload:data
        }
    )
}

export function fetchCartByUser(userId)
{
    return(dispatch) => {
        return getCartByUser(userId).then(
            resp=> {
                dispatch(
                    fetchCartByUserSuccess(resp.data)

                )
            }
        ) .catch((error) => {
            if (error.response && error.response.status === 404) {
              // Handle the 404 error here
              // For example, dispatch an action to set an empty cart state or show a message
              dispatch(fetchCartByUserFailure("Your cart is empty"));
            } else {
              // Handle other errors here, if needed
              // For example, dispatch an action to show a general error message
              dispatch(fetchCartByUserFailure("An error occurred while fetching the cart data"));
            }
          });

    }
}

export function fetchCartByUserSuccess(data) {
    // Convert the book images to Base64 encoding for each cart item
    const cartItemsWithImage = data.cartItems.map(item => {
      const base64Image = `data:image/jpeg;base64,${item.book.image}`;
      return { ...item, book: { ...item.book, image: base64Image } };
    });
  
    // Create a new data object with the cart items having Base64 encoded images
    const dataWithBase64Images = { ...data, cartItems: cartItemsWithImage };
  
    return {
      type: GET_CARTBY_USER,
      payload: dataWithBase64Images,
    };
  }

  export function fetchCartByUserFailure(errorMessage) {
    return {
      type: FETCH_CART_BY_USER_FAILURE,
      payload: errorMessage,
    };
}
  

// export function fetchCartByUserSuccess(data)
// {
//     return(
//         {
//             type:GET_CARTBY_USER,
//             payload:data
//         }
//     )
// }

export function removeCart(userId)
{
    return(dispatch) => {
        return deleteCart(userId).then(
            ()=>
             {
                dispatch(
                    removeCartSuccess()

                )
            }
        )

    }
}

export function removeCartSuccess()
{
    return(
        {
            type:DELETE_CART,
            payload:{}
        }
    )
}

