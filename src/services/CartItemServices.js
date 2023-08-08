import axios from 'axios';

import { BASE_URL } from '../store/actions/ActionConstants';
import authHeader from './AuthService';

export function saveCartItem(payload)
{
    return axios.post(BASE_URL+"/cartitem/save",payload, {headers : authHeader() })
}

export function getAllItems(userId)
{
    return axios.get(BASE_URL+"/cartitem/get/"+userId , {headers : authHeader() } )
}

export function deleteCartItem(cartItemId)
{
    return axios.delete(BASE_URL+"/cartitem/delete/"+cartItemId, {headers : authHeader() } )
}