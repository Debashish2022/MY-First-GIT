import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const initialState = {
    email: null,
    token: null,
    role: null,
    userid: null
};

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setEmail: (state, action) => {
           state.email = action.payload;
        }, 
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
        setUserid: (state, action)=> {
            state.userid = action.payload;
        },
        clear(state) {
            storage.removeItem("persist:root3");
            state.email = null;
            state.token = null;
            state.role = null;
            state.userid = null;
        }
    }
});

export const getEmail = (state) => {
    return state.user.email;
};
export const getToken = (state) => {
    return state.user.token;
};
export const getId = (state) => {
    return state.user.userid
};

export const {
    setEmail,
    setToken,
    setRole,
    setUserid,
    clear
} = userSlice.actions;

export default userSlice.reducer;
