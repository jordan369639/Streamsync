import { createSlice } from "@reduxjs/toolkit";

const LoginLogut = createSlice({
name:"user",
initialState:{
    User:null
},
reducers:{
    adduser(state,action){
state.User = action.payload;
    },
    logout(state,action){
        state.User = null;
    }
}




})
export default LoginLogut.reducer;
export  const {adduser,logout} = LoginLogut.actions;
export const selectUser = (state)=> state.user.User;