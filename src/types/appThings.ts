export interface IObjItem {
    id: number;
    name: string;
}

export interface ISelectProps {
    listItems?: IObjItem[];
    selectedItemsId?: number[];
    countSelectedItem?: number;
}

export interface IViewProps {
    listItems?: IObjItem[];
}