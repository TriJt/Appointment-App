import request from './../utils/request'
import { apiPrefix, apiMaster, apiOperation } from './../utils/config'
import api from './api'

const gen = params => {
  let url = apiPrefix + params
  let method = 'GET'
  let headers = null;
  let api = apiPrefix;
  const paramsArray = params.split(' ')
  if (paramsArray[1].indexOf('/user') != -1 || paramsArray[1].indexOf('/customer') != -1) {
    api = apiMaster;
  } else if (paramsArray[1].indexOf('/connection') != -1 || paramsArray[1].indexOf('/billing') != -1 || paramsArray[1].indexOf('/partner') != -1) {
    api = apiOperation;
  }
  if (paramsArray.length === 2) {
    method = paramsArray[0]
    url = api + paramsArray[1]
  }else if(paramsArray.length === 3){
    method = paramsArray[0]
    url = api + paramsArray[1]
    headers = 'token'
  }


  return function(data) {
    return request({
      url,
      data,
      method,
      headers
    })
  }
}

const APIFunction = {}
for (const key in api) {
  APIFunction[key] = gen(api[key])
}

export default APIFunction
