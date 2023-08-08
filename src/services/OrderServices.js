import axios from 'axios';

import { BASE_URL } from '../store/actions/ActionConstants';
import authHeader from './AuthService';

export function createOrder(payload)
{
    return axios.post(BASE_URL+"/order/save",payload, {headers : authHeader() })
}

export function getOrdersByUserId(userId)
{
    return axios.get(BASE_URL+"/order/get/user/"+userId, {headers : authHeader() })
}

export function getOrderByOrderId(orderId)
{
    return axios.get(BASE_URL+"/order/get/"+orderId, {headers : authHeader() })
}