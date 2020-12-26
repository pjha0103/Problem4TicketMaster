import axios from 'axios';
import {getServerURL} from '../setting/index';

export function post(servicePath ,data){
  const URL= getServerURL()+ servicePath;
  return axios.post(
    URL,
    data,
  ).then((res) => {
    //handleResponse(res);
    return res;
  }).catch((err) => {
    console.log(err);
    //handleError(err);
    throw err;
  });
}

export function get(servicePath){
  const URL= getServerURL()+ servicePath;
  return axios.get(
    URL,
  ).then((res) => {
    //handleResponse(res);
    return res;
  }).catch((err) => {
    console.log(err);
    //handleError(err);
    throw err;
  });
}

export function getContent(servicePath ,headers){
  const URL= getServerURL()+ servicePath;
  return axios({
    method: 'get',
    url: URL,
    headers,
    responseType: 'blob',
  }).then((res) => {
    //handleResponse(res);
    return res;
  }).catch((err) => {
    console.log(err);
    //handleError(err);
    throw err;
  });
}
