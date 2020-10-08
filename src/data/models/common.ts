export interface ResponseBase<T> {
    code: number;
    data?: T;
    message?: string;
}

export enum HttpMethod {
    GET,
    POST,
    PUT,
    DELETE,
}

export interface SelectOption {
    key: string;
    value: string;
    children?: string;
}

export type DisplayMode = 'list' | 'overview' | 'edit' | 'new';
export const DisplayMode = {
    List: 'list' as DisplayMode,
    Overview: 'overview' as DisplayMode,
    Edit: 'edit' as DisplayMode,
    New: 'new' as DisplayMode,
};