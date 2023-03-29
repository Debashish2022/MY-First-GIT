import { toast, Slide } from "react-toastify";

const sToast = (msg) => {
  toast.success(msg, {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    position: "top-center",
    transition: Slide,
  });
};

const eToast = (msg) => {
  toast.error(msg, {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    position: "top-center",
    transition: Slide,
  });
};

const Utility = {
  sToast,
  eToast,
};

export default Utility;
