'use client'
import axios from "axios";

export const apiUrl = process.env.NEXT_PUBLIC_API_KEY;

export const ApiInstance = axios.create({
  baseURL: apiUrl
})

ApiInstance.interceptors.request.use((req) => {
  const token = localStorage.getItem("access_token");
 
  req.headers.Accept = 'application/json'
  req.headers.Authorization = 'Bearer ' + token
 
  return req
 })