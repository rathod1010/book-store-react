import axios from 'axios';

import { BASE_URL } from '../store/actions/ActionConstants';

export function userLogin(payload)
{
    return axios.post(BASE_URL+"/user/token",payload)
}

export function userRegister(payload)
{
    return axios.post(BASE_URL+"/user/save",payload)
}