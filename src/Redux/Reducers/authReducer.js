import { authConstants } from "../Actions/constants";

const initState = {
  token: null,
  user: {
    // user_type: "",
    // _id: "",
    // first_name: "",
    // last_name: "",
    // email: "",
    // phone_number: "",
    // dob: "",
    // course: "",
    // collage_name: "",
    // collage_address: "",
    // plan_id: "",
  },
  authenticate: false,
  authenticating: false,
};

export default (state = initState, action) => {
  // console.log(action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...initState,
      };
      break;
  }
  return state;
};
