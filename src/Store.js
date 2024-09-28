import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./services/users/userSlice";
const store = configureStore({
    reducer: {
      users: userReducer,
    },
  });
  
  export default store;