const MAX_COLOR_VALUE = 0xFFFFFF;
export const COLOR_VALUES = "0123456789ABCDEF";

export function generateRandomColor() {
    let randomNumber: number = Math.random() * MAX_COLOR_VALUE;
    let randomColor: any;
    randomNumber = Math.floor(randomNumber);
    randomColor = randomNumber.toString(16);
    return `#${randomColor.padStart(6, 0).toUpperCase()}`
}

const randomColor = () => {
    return "#" + Math.floor(Math.random() * MAX_COLOR_VALUE).toString(16).padStart(6, '0').toUpperCase();
}

const RED_FIRST = 0;
const RED_LAST = 3;
const BLUE_FIRST = 4;
const BLUE_LAST = 6;

export function generateNeoncolor() {
    const color = randomColor();
    return color.substring(RED_FIRST, RED_LAST) + "00" + color.substring(BLUE_FIRST, BLUE_LAST);
}