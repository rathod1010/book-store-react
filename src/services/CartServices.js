import axios from 'axios';

import { BASE_URL } from '../store/actions/ActionConstants';
import authHeader from './AuthService';

export function addItemToCart(payload)
{
    return axios.post(BASE_URL+"/cart/add",payload, {headers : authHeader() })
}

export function getCartByUser(userId)
{
    return axios.get(BASE_URL+"/cart/user/"+userId, {headers : authHeader() })
}

export function deleteCart(userId)
{
    return axios.delete(BASE_URL+"/cart/delete/"+userId , {headers : authHeader()})
}

export function updateCart(payload)
{
    return axios.put(BASE_URL+"/cart/update",payload, {headers :authHeader() })
}