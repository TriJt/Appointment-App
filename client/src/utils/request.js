import axios from 'axios'
import { cloneDeep } from 'lodash'
//import * as pathToRegexp from "path-to-regexp";

import { CANCEL_REQUEST_MESSAGE, CLIENT_ID, CLIENT_SECRET } from './constant'
import { apiDomain } from './config'
//import LocalStorageService from "./../services/LocalStorageService";
const { CancelToken } = axios
const { pathToRegexp, match, parse, compile } = require("path-to-regexp");
window.cancelRequest = new Map()

//const localStorageService = LocalStorageService.getService();

export default function request(options) {
  let { data, url, method } = options
  var dataClone = null;

  if (data && data instanceof FormData && (method === 'PUT' || method === 'POST')) {
    var object = {};
    data.forEach((value, key) => { object[key] = value });
    dataClone = object;
  }

  // if (data && method === 'PUT') {
  //   var object = {};
  //   data.forEach((value, key) => { object[key] = value });
  //   dataClone = object;
  // }
  const cloneData = cloneDeep(dataClone ? dataClone : data)

  try {
    // let domain = ''
    let domain = apiDomain

    const urlMatch = url.match(/[a-zA-z]+:\/\/[^/]*/)

    if (urlMatch) {
      ;[domain] = urlMatch
      url = url.slice(domain.length)
    }

    const match = parse(url)

    if (data && method === 'PUT') {
      url = compile(url)(cloneData)
    } else {
      url = compile(url)(data)

    }

    for (const item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name]
      }
    }

    url = domain + url
  } catch (e) {
    console.log(e.message)
  }
  options.url = url
  if (method === 'GET') {
    options.params = cloneData
  }
  if (cloneData && (cloneData.is_upload_file == 1 || cloneData.is_download_file == 1)) {
    options.responseType = 'blob' 
  }
  options.withCredentials = true
  //options.headers = { 'Authorization': 'Bearer ' };
  options.cancelToken = new CancelToken(cancel => {
    window.cancelRequest.set(Symbol(Date.now()), {
      pathname: window.location.pathname,
      cancel,
    })
  })

  // Add a request interceptor
//   axios.interceptors.request.use(
//     config => {
//       const token = localStorageService.getAccessToken();
//       if (token) {
//         config.headers['Authorization'] = 'Bearer ' + token;
//       }

//       return config;
//     },
//     error => {
//       Promise.reject(error)
//     });

  //Add a response interceptor
//   axios.interceptors.response.use((response) => {
//     return response
//   }, function (error) {
//     const originalRequest = error.config;
//     if ((error.response.status === 401 || error.response.status === 400)
//       && originalRequest.url === apiDomain + '/oauth/token' && window.location.pathname !== '/auth/sign-in') {
//       localStorageService.clearToken();
//       localStorageService.clearUserInfor()
//       window.location.href = '/auth/sign-in';
//       return Promise.reject(error);
//     }

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       // const refreshToken = store.get('auth').refresh_token
//       return axios.post(apiDomain + '/oauth/token',
//         {
//           "client_id": CLIENT_ID,
//           "client_secret": CLIENT_SECRET,
//           "refresh_token": localStorageService.getRefreshToken(),
//           "grant_type": "refresh_token"
//         })
//         .then(res => {
//           if (res.status === 200) {
//             localStorageService.setToken(res.data);
//             // axios.defaults.headers.common['Authorization'] = 'Bearer ' + store.get('auth').refresh_token;
//             axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorageService.getAccessToken();

//             return axios(originalRequest);
//           } else {
//             window.location.href = '/auth/sign-in';
//           }
//         })
//     }
//     return Promise.reject(error);
//   });

  return axios(options)
    .then(response => {
      const { statusText, status, data, request } = response
      let result = {}
      if (typeof data === 'object') {
        result = data
        if (Array.isArray(data)) {
          result.list = data
        }
        if (request && request.responseType === 'blob') {
          result.data = data
        }
      } else {
        result.data = data
      }

      return Promise.resolve({
        success: true,
        message: statusText,
        statusCode: status,
        ...result,
      })
    })
    .catch(error => {
      const { response, message } = error
      if (String(message) === CANCEL_REQUEST_MESSAGE) {
        return {
          success: false,
        }
      }

      let msg
      let statusCode
      let result = {}

      if (response && response instanceof Object) {
        const { data, statusText, request } = response
        if (request && request.responseType === 'blob') {
          statusCode = response.status;
          msg = statusText;
          result.data = data
        } else if (data.item_error && data.item_error.length > 0) {
          statusCode = response.status;
          msg = data.detail;
          result.item_error = data.item_error;
        }
      } else {
        statusCode = 600
        msg = error.detail || 'Network Error'
      }

      /* eslint-disable */
      return Promise.reject({
        success: false,
        statusCode,
        message: msg,
        ...result,
      })
    })
}
