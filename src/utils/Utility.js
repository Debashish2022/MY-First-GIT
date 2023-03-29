import { toast } from "react-toastify";

const sToast = (msg) => {
  toast.success(msg, {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
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
  });
};

const Utility = {
  sToast,
  eToast,
};

export default Utility;
