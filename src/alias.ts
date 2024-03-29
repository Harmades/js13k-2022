export function sign(value: number, defaultIfZero = 1): number {
    const sign = Math.sign(value);
    return sign == 0 ? defaultIfZero : sign;
}

export function round(value: number) {
    return Math.round(value);
}

export function floor(value: number) {
    return Math.floor(value);
}

export function abs(value: number) {
    return Math.abs(value);
}

export function ceil(value: number) {
    return Math.ceil(value);
}

export function max(value1: number, value2: number) {
    return Math.max(value1, value2);
}

export function min(value1: number, value2: number) {
    return Math.min(value1, value2);
}

export function cos(value: number): number {
    return Math.cos(value);
}

export function sin(value: number): number {
    return Math.sin(value);
}

export function asin(value: number): number {
    return Math.asin(value);
}

export function sqrt(value: number) {
    return Math.sqrt(value);
}

export function pow(value: number, power: number) {
    return Math.pow(value, power);
}

export function getElementById(id: string) {
    return document.getElementById(id);
}

export function createElement(element: string) {
    return document.createElement(element);
}

export const PI = Math.PI;
