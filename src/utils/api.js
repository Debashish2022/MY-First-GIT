import axios from "axios";
export const API = "https://atharw.onrender.com/api/";
export const apicaller = (uri, data = null, method, Token, contentType= "application/json") => {
  console.log(`Api Caller Data Of ${uri} : `, data);
  return new Promise((resolve, reject) => {
    var config = {
      method: method,
      url: `https://atharw.onrender.com/api/${uri}`,
      headers: {
        Authorization: "Bearer " + Token,
        "Content-Type": contentType,
      },
      // onUploadProgress: progressEvent => console.log(progressEvent.loaded),
      data: data,
    };
    // console.log('getting percentage....', options)

    axios(config)
      .then(function (response) {
        console.log(`Api Caller Response Of ${uri} : `, response.data);
        resolve(response);
      })
      .catch(function (error) {
        console.log(`Api Caller Error Of ${uri} : `, error);
        reject(error);
      });
  });
};
