import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

var initState = {
    email: null,
    _id: null,
    user_type: null,
    token: null,
    subSectionId : null,
}

export var UserSlice = createSlice({
   name: 'user',
   initialState: initState,
   reducers: {
    setUserEmail: (state, action) => {
        console.log("superadmin Email is ", JSON.stringify(action.payload));
        state.email = action.payload;
    },
    setUser_Id: (state, action) => {
        console.log("superadmin id is ", JSON.stringify(action.payload));
        state._id = action.payload;
    },
    setUserType: (state, action) => {
        console.log("usertype is ", JSON.stringify(action.payload));
        state.user_type = action.payload;
    },
    setUserToken: (state, action) => {
        console.log("superadmin token is ", JSON.stringify(action.payload));
        state.token = action.payload;
    },
    setSubsectionId: (state, action) => {
        console.log("subsection id is", JSON.stringify(action.payload));
        state.subSectionId = action.payload;
    },
    clear(state) {
        storage.removeItem("persist: root2");
        state.email= null;
        state.user_type= null;
        state._id= null;
        state.token= null;
        state.subSectionId = null;
    }
   }
});

export const getUserEmail = (state) => {
    return state.user.email;
};
export const getUser_Id = (state) => {
    return state.user._id;
};
export const getUserType= (state) => {
    return state.user.user_type;
}
export const getUserToken = (state)=> {
    return state.user.token;
}
export const getSubsectionId = (state)=> {
    return state.user.subSectionId;
}


export const {
    setUserEmail,
    setUser_Id,
    setUserType,
    setUserToken,
    setSubsectionId,
    clear
} = UserSlice.actions;


export default UserSlice.reducer;