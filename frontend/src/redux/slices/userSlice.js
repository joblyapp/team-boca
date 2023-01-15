import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    user2:[],
    confirmation:[]
  },
  reducers: {

    getUser: (state, action) => {
      state.user = action.payload;
    },

    confirmCuenta:(state,action)=>{
      state.confirmation = action.payload
    }

  },
});

export const {
  getUser,
  confirmCuenta,  
} = userSlice.actions;

export default userSlice.reducer;

