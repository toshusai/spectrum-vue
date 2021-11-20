
export default interface MenuItem {
    text: string;
    action: (e: Event) => void;
}