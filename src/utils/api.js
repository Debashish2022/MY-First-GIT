import axios from "axios";

// export const API = "http://localhost:8000/api/";
// export const API = "http://52.66.203.80:8000/api/";
export const API = "https://atharw.onrender.com/api/";
// export const API = "http://ec2-52-66-203-80.ap-south-1.compute.amazonaws.com:8000/api/";

export const apicaller = (uri, data=null, method, Token, contentType="application/json") => {
  console.log(`Api Caller Data Of ${uri} : `, data);
  return new Promise((resolve, reject) => {
    var config = {
      method: method,
      // url: `http://ec2-52-66-203-80.ap-south-1.compute.amazonaws.com:8000/api/${uri}`,
      url: `https://atharw.onrender.com/api/${uri}`,
      headers: {
        Authorization: "Bearer " + Token,
        "Content-Type": contentType,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(`Api Caller Response Of ${uri} : `, response?.data);
        resolve(response);
      })
      .catch(function (error) {
        console.log(`Api Caller Error Of ${uri} : `, error);
        reject(error);
      });
  });
};
