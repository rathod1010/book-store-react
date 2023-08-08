import { CREATE_ORDER ,ORDERS_BYORDERID , ORDERS_BYUSERID } from "./ActionConstants"
import { createOrder,getOrderByOrderId,getOrdersByUserId } from "../../services/OrderServices"

export function placeOrder(payload)
{
    return(dispatch) => {
        return createOrder(payload).then(
            resp=> {
                dispatch(
                    createOrderSuccess(resp.data)

                )
            }
        )

    }
}
export function createOrderSuccess(data)
{
    return(
        {
            type:CREATE_ORDER,
            payload:data
        }
    )
}

export function fetchOrderByOrderId(orderId) {
    return (dispatch) => {
      return getOrderByOrderId(orderId).then((resp) => {
        // Convert the book images to Base64 encoding for each order item
        const orderItemsWithImage = resp.data.orderList.map((item) => {
          const base64Image = `data:image/jpeg;base64,${item.book.image}`;
          return { ...item, book: { ...item.book, image: base64Image } };
        });
  
        // Create a new data object with the order items having Base64 encoded images
        const dataWithBase64Images = { ...resp.data, orderList: orderItemsWithImage };
  
        dispatch(fetchOrderByOrderIdSuccess(dataWithBase64Images));
      });
    };
  }
export function fetchOrderByOrderIdSuccess(data)
{
    return(
        {
            type:ORDERS_BYORDERID,
            payload:data
        }
    )
}

export function fetchOrderByUserId(orderId)
{
    return(dispatch) => {
        return getOrdersByUserId(orderId).then(
            resp=> {
                dispatch(
                    fetchOrderByUserIdSuccess(resp.data)

                )
            }
        )

    }
}
export function fetchOrderByUserIdSuccess(data)
{
    return(
        {
            type:ORDERS_BYUSERID,
            payload:data
        }
    )
}