import ajax from "./ajax-extension";
import { ResponseBase, HttpMethod } from "../models/common";
import { RouteParams } from "../../utils/routes";

const isMock = true;
const mailNotifyApiUrlMock = "/mock/mailNotify";
const mailNotifyApiUrl = "/api/mailNotify";

export const getLastMailNotifyApi = isMock
  ? () => {
      return fetch(`${mailNotifyApiUrlMock}/lastMailNotify`).then(function (
        res
      ) {
        return res.json();
      });
    }
  : () => {
      return createRequest<ResponseBase<any>>(
        `${mailNotifyApiUrl}/lastMailNotify`
      )();
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
