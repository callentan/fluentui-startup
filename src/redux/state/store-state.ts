import { MailNotifyStore } from './mail-store';

interface StoreStateInternal {
    mailNotify: MailNotifyStore;
}

export type StoreState = StoreStateInternal;
