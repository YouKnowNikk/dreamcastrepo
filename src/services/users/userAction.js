import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk to fetch users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  });

  export const addUser = createAsyncThunk('users/addUser', async (newUser) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
    return response.data;
  });