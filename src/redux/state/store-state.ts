import { MailNotifyStore } from './mail-store';

interface StoreStateInternal {
    mail: MailNotifyStore;
}

export type StoreState = StoreStateInternal;
