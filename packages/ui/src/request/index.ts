import axios from 'axios';

const URL = 'http://127.0.0.1:4000';

type configType = {
  endPoint: string,
  method: any,
  params?: {},
  data?: {},
  timeout?: number
}

const request = (config: configType): Promise<{}> => {
  const {
    endPoint = '/',
    method = 'GET',
    params = {},
    data = {},
    timeout = 5000
  } = config;

  return new Promise((resolve, reject) => {
    axios({
      url: URL + endPoint,
      method,
      params,
      data,
      timeout,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if (res) {
        console.log('res', res);
        resolve(res);
      } else {

      }
    }, (error) => {
      reject(error);
    });
  });
}

export default request;
