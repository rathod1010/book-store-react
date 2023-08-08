import { CREATE_USER , LOGIN_USER } from "./ActionConstants"
import { userLogin ,userRegister } from "../../services/UserServices"

export function loginUser(payload)
{
    return(dispatch) => {
        return userLogin(payload).then(
            resp=> {
                if(resp.data)
                {
                    localStorage.setItem("myUser", JSON.stringify(resp.data));
                    dispatch(loginUserSuccess(resp.data));
                    alert("Account login successful")
                    window.location.href = "/"

                }

                return resp.data;
            }
        )

    }
}

export function registerUser(payload)
{
    return(dispatch) => {
        return userRegister(payload).then(
            resp=> {
                dispatch(
                    registerUserSuccess(resp.data))
                 alert("account created successfully")
                 window.location.href = "/login"
                    

                
            }
        )

    }
}
export function loginUserSuccess(data)
{
    return(
        {
            type:LOGIN_USER,
            payload:data
        }
    )
}

export function registerUserSuccess(data)
{
    return(
        {
            type:CREATE_USER,
            payload:data
        }
    )
}