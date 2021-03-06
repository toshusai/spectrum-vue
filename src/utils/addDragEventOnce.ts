export const LEFT = 0;
export const MIDDLE = 1;
export const RIGHT = 2;

export default function addDragEventOnce(
    callback: (e: MouseEvent | TouchEvent) => void,
    onUp?: (e: MouseEvent | TouchEvent) => void,
    options?: AddEventListenerOptions
) {
    document.body.addEventListener("mousemove", callback, options);
    document.body.addEventListener("pointermove", callback, options);
    document.body.addEventListener("touchmove", callback, options);
    const removeEvent = (e: MouseEvent | TouchEvent) => {
        document.body.removeEventListener("mousemove", callback);
        document.body.removeEventListener("pointermove", callback);
        document.body.removeEventListener("touchmove", callback);
        document.body.removeEventListener("pointerup", removeEvent);
        document.body.removeEventListener("mouseleave", removeEvent);
        document.body.removeEventListener("mouseup", removeEvent);
        document.body.removeEventListener("touchend", removeEvent);
        if (onUp) onUp(e);
    };
    document.body.addEventListener("pointerup", removeEvent);
    document.body.addEventListener("mouseleave", removeEvent);
    document.body.addEventListener("mouseup", removeEvent);
    document.body.addEventListener("touchend", removeEvent);
}
