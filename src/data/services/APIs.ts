import ajax from "./ajax-extension";
import { ResponseBase, HttpMethod } from "../models/common";
import { RouteParams } from "../../utils/routes";

const isMock = true;
const mailNotifyApiUrlMock = "/mock/mailnotify";
const mailNotifyApiUrl = "/api/mailnotify";

export const getLastUploadTimestampApi = isMock
  ? () => {
      return fetch(`${mailNotifyApiUrlMock}/lastupload`).then(function (res) {
        return res.json();
      });
    }
  : () => {
      return createRequest<ResponseBase<any>>(
        `${mailNotifyApiUrl}/lastupload`
      )();
    };

export const getUsersApi = isMock
  ? (file: any) => {
      return fetch(`${mailNotifyApiUrlMock}/users`).then(function (res) {
        return res.json();
      });
    }
  : (file: any) => {
      return createRequest<ResponseBase<any>>(
        `${mailNotifyApiUrl}/users`,
        HttpMethod.POST
      )(file);
    };

function createRequest<T>(
  url: string,
  httpMethod: HttpMethod = HttpMethod.GET
) {
  return function (rest?: any) {
    const data = rest || {};
    let config = { url: url, method: HttpMethod[httpMethod], data: data };
    return ajax.request<T>(config).then((res: { data: any }) => res.data);
  };
}
