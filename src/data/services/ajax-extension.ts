import { ajax } from "@ofm/ajax";

ajax.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    // message.error("ERROR_FAILED_REQUEST");
    return Promise.reject(err);
  }
);

ajax.interceptors.response.use(
  (res) => {
    let msg = res.data.msg;
    if (res.data.code && res.data.code === -1) {
      if (msg && msg !== null) {
        // message.error(msg);
      }
    }
    return res;
  },
  (err) => {
    let errRes = err.response;
    // if (errRes && errRes.status) {
    //     if (errRes.statusText.indexOf('Bad Request') > -1) {
    //         message.error('Bad Request: ' + errRes.status);
    //     }
    // } else {
    //     message.error('ERROR_FAILED_RESPONSE');
    // }
    if (errRes && errRes.status) {
      switch (errRes.status) {
        case "401":
        // message.error("401 error");
        case "404":
        // message.error("404 error");
        default:
        // message.error("unknown error");
      }
    }
    return Promise.reject(err);
  }
);

export default ajax;
