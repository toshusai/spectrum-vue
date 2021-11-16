import * as convert from "color-convert"

export class Color {
    r = 0;
    g = 0;
    b = 0;

    toHex() {
        return "#" + convert.rgb.hex(this.r, this.g, this.b);
    }

    toHsv() {
        return convert.rgb.hsv(this.r, this.g, this.b);
    }

    toCss(): string {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
}
