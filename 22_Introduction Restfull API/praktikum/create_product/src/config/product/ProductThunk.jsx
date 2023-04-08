import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const retrieveProduct = createAsyncThunk("product/retrieveProduct", async()=>{
    const res = await axios.get("https://64316bd13adb1596516c0d61.mockapi.io/product")
    return res.data;
})

export const createProduct = createAsyncThunk("product/createProduct", async(param)=>{
    const res = await axios.post("https://64316bd13adb1596516c0d61.mockapi.io/product", param)
    return res.data;
})

export const deleteProduct = createAsyncThunk("product/deleteProduct", async(id)=>{
    const res = await axios.delete(`https://64316bd13adb1596516c0d61.mockapi.io/product/${id}`)
    return res.data;
})

export const updateProduct = createAsyncThunk("product/updateProduct", async(param)=>{
    const res = await axios.put(`https://64316bd13adb1596516c0d61.mockapi.io/product/${param.no}`, param)
    return res.data;
})
