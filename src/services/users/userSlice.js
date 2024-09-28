import { createSlice } from "@reduxjs/toolkit";
import { addUser, fetchUsers } from "./userAction";

const userSlice = createSlice({
    name: 'users',
    initialState: {
      users: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUsers.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
          state.loading = false;
          state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })

        .addCase(addUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(addUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users.push(action.payload);  // Add the new user to the users array
          })
          .addCase(addUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
    },
  });
  
  export default userSlice.reducer;