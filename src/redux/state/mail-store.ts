import { LastUpload, Users } from "../../data/models/mail-notify";

export interface MailNotifyStoreInternal {
  lastUpload: LastUpload | null;
  users: Users[] | null;
}

export type MailNotifyStore = MailNotifyStoreInternal;
