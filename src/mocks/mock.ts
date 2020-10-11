import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";
import fetchMock from "fetch-mock";
import { Users } from "../data/models/mail-notify";

const users = (): Users[] => {
  let users: Users[] = [];
  let i: number;
  for (i = 0; i < 30; i++) {
    users.push({
      name: `user${i}`,
      email: `user${i}@microsoft.com`,
      status: "Sent",
    });
  }

  return users;
};

function mocks() {
  fetchMock.mock("/mock/mailnotify/lastupload", () => {
    return { lastUpload: "2020/10/10 9:00" };
  });
  fetchMock.mock("/mock/mailnotify/users", () => {
    return users;
  });
}

export function initMocks() {
  mocks();
}
