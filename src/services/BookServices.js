import axios from 'axios';

import { BASE_URL } from '../store/actions/ActionConstants';

export function fetchAllBooks()
{
    return axios.get(BASE_URL+"/book/get/all");
}

export function fetchBookById(bookId)
{
    return axios.get(BASE_URL+"/book/get/"+bookId);
}

export function fetchAllBooksByCategory(category)
{
    return axios.get(BASE_URL+"/book/get/category/"+category);
}