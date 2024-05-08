import axios from 'axios';

export const getAxios = () => {
  let instance = axios.create({
    baseURL: '',
    // headers: {
    //   '',
    // },
  });
  return instance;
};
