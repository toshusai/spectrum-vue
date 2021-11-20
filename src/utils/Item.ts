export default interface Item {
    id: string;
    name: string;
    children: Item[];
    parent?: Item;
}

