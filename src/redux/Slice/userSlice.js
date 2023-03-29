import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

export var UserSlice = createSlice({
  name:"user",
  initialState:{
    token:null,
    reseller_email:null,
    reseller_name:null,
    reseller_currency:null,
    reseller_id:null,
    reseller_phoneno:null,
    reseller_limit:null,
    reseller_timezone:null,
  },
  reducers:{
    setResellerToken: (state, action) => {
      // console.log('Token set', JSON.stringify(action.payload));
      state.token = action.payload;
    },
    setReseller_Email: (state, action) => {
      // console.log('Reseller Email set', JSON.stringify(action.payload));
      state.reseller_email = action.payload;
    },
    setReseller_Name: (state, action) => {
      // console.log('Reseller Name set', JSON.stringify(action.payload));
      state.reseller_name = action.payload;
    },
    setReseller_Currency: (state, action) => {
      // console.log('Reseller Currency set', JSON.stringify(action.payload));
      state.reseller_currency = action.payload;
    },
    setReseller_id: (state, action) => {
      // console.log('Reseller Id set', JSON.stringify(action.payload));
      state.reseller_id = action.payload;
    },
    setReseller_Phoneno: (state, action) => {
      // console.log('Reseller Phone set', JSON.stringify(action.payload));
      state.reseller_phoneno = action.payload;
    },
    setReseller_Limit: (state, action) => {
      // console.log('Reseller Limit set', JSON.stringify(action.payload));
      state.reseller_limit = action.payload;
    },
    setReseller_Timezone: (state, action) => {
      // console.log('Reseller Timezone set', JSON.stringify(action.payload));
      state.reseller_timezone = action.payload;
    },
    clear(state) {
      storage.removeItem("persist:root5");
      state.token = null;
      state.reseller_email = null;
      state.reseller_name = null;
      state.reseller_currency = null;
      state.reseller_id = null;
      state.reseller_phoneno = null;
      state.reseller_limit = null;
      state.reseller_timezone = null;

    },

  },

});

export const getResellerToken = (state) => {
  return state.user.token;
};
export const getResellerEmail = (state) => {
  return state.user.reseller_email;
};
export const getResellerName = (state) => {
  return state.user.reseller_name;
};
export const getResellerCurrency = (state) => {
  return state.user.reseller_currency;
};
export const getResellerId = (state) => {
  return state.user.reseller_id;
};
export const getResellerPhone = (state) => {
  return state.user.reseller_phoneno;
};
export const getResellerLimit = (state) => {
  return state.user.reseller_limit;
};
export const getResellerTimeZone = (state) => {
  return state.user.reseller_timezone;
};


export const {
  setResellerToken,
  setReseller_Email,
  setReseller_Name,
  setReseller_Currency,
  setReseller_id,
  setReseller_Phoneno,
  setReseller_Limit,
  setReseller_Timezone,
  clear
} = UserSlice.actions;

export default UserSlice.reducer;