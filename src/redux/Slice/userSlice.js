import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

export var UserSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    id:null,
    username:null,
    address: null,
    cv: null,
    email: null,
    facebook: null,
    qualification: null,
    phonenumber: null,
    uid: null,
  },
  reducers: {
    setTeacherToken: (state, action) => {
      console.log("Token set", JSON.stringify(action.payload));
      state.token = action.payload;
    },
    setTeacherId: (state, action) => {
      console.log("Teacher Id set", JSON.stringify(action.payload));
      state.id = action.payload;
    },
    setTeacherName: (state, action) => {
      console.log("Teacher Name set", JSON.stringify(action.payload));
      state.username = action.payload;
    },
    setTeacherAddress: (state, action) => {
      console.log("Address set", JSON.stringify(action.payload));
      state.address = action.payload;
    },
    setTeacherCv: (state, action) => {
      console.log("Cv set", JSON.stringify(action.payload));
      state.cv = action.payload;
    },
    setTeacherEmail: (state, action) => {
      console.log("Email set", JSON.stringify(action.payload));
      state.email = action.payload;
    },
    setTeacherFacebook: (state, action) => {
      console.log("Facebook set", JSON.stringify(action.payload));
      state.facebook = action.payload;
    },
    setTeacherQualification: (state, action) => {
      console.log("Qualification set", JSON.stringify(action.payload));
      state.qualification = action.payload;
    },
    setTeacherPhone: (state, action) => {
      console.log("Phone Number set", JSON.stringify(action.payload));
      state.phonenumber = action.payload;
    },
    setTeacherUid: (state, action) => {
      console.log("Uid set", JSON.stringify(action.payload));
      state.uid = action.payload;
    },
    clear(state) {
      storage.removeItem("persist:root6");
      state.token = null;
      state.id= null;
      state.username= null;
      state.address = null;
      state.cv= null;
      state.email= null;
      state.facebook= null;
      state.qualification= null;
      state.phonenumber= null;
      state.uid= null;

    },
  },
});

export const getTeacherToken = (state) => {
  return state.teacher.token;
};
export const getTeacherId = (state) => {
  return state.teacher.id;
};
export const getTeacherName = (state) => {
  return state.teacher.username;
};
export const getTeacherAddress = (state) => {
  return state.teacher.address;
};
export const getTeacherCv = (state) => {
  return state.teacher.cv;
};
export const getTeacherEmail = (state) => {
  return state.teacher.email;
};
export const getTeacherFacebook = (state) => {
  return state.teacher.facebook;
};
export const getTeacherQualification = (state) => {
  return state.teacher.qualification;
};
export const getTeacherPhone = (state) => {
  return state.teacher.phonenumber;
};
export const getTeacherUid = (state) => {
  return state.teacher.uid;
};


export const {
  setTeacherToken,
  setTeacherId,
  setTeacherName,
  setTeacherAddress,
  setTeacherCv,
  setTeacherEmail,
  setTeacherFacebook,
  setTeacherQualification,
  setTeacherPhone,
  setTeacherUid,
  clear,
} = UserSlice.actions;

export default UserSlice.reducer;
