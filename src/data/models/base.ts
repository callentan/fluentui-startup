export interface ColumnBase {
    key: string;
    title: string;
    dataIndex: string;
}

export interface ColumnModel extends ColumnBase {
    render?: any;
    isEnabled?: boolean;
    width?: number;
    fixed?: boolean | 'left' | 'right' | undefined;
}

export interface BaseItem {
    id: string;
    name: string;
}
