import axios from "axios";

// export const API = "http://localhost:8000/api/";
export const API = "https://api.novaprolabs.com/api/";

export const apicaller = (uri, data = null, method, Token) => {
  // console.log(`Api Caller Data of ${uri} is : `, data);
  return new Promise((resolve, reject) => {
    var config = {
      method: method,
      url: `https://api.novaprolabs.com/api/${uri}`,
      headers: {
        Authorization: Token,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(`api caller response of ${uri}`, response.data);
        resolve(response);
      })
      .catch(function (error) {
        // console.log(`api caller error of ${uri}`, error.message);
        reject(error);
      });
  });
};
