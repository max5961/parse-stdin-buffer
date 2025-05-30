/* eslint-disable no-control-regex */

function isKittyProtocol(utf: string) {
    const codeOnlyRegex = /^\x1b\[\d+u/gm;
    const withModifierRegex = /^\x1b\[\d+;\d+u/gm;
    return codeOnlyRegex.test(utf) || withModifierRegex.test(utf);
}

function isMouseEvent(utf: string) {
    const regex = /^\x1b\[<\d+;\d+;\d+[mM]/gm;
    return regex.test(utf);
}

function getMouseEvent(utf: string) {
    const regex = /^\x1b\[<(\d+);(\d+);(\d+)(\w)/;
    return Array.from(regex.exec(utf) ?? []).map((match) => {
        const num = Number(match);
        return Number.isNaN(num) ? match : num;
    });
}

function getKittyCharWithMod(utf: string) {
    const regex = /^\x1b\[(\d+);(\d+)(\w+)/gm;
    return regex.exec(utf);
}

function getKittyChar(utf: string) {
    const regex = /^\x1b\[(\d+)/gm;
    return regex.exec(utf);
}

/**
 * @example
 * - matches \x1b[1;3A, \x1b[15;3~
 */
function getLegacyModifierSequence(utf: string) {
    const regex = /^\x1b\[(\d+);(\d+)([ABCDEFHPQRSA~])/gm;
    return regex.exec(utf);
}

export const CsiRegex = {
    isKittyProtocol,
    isMouseEvent,
    getMouseEvent,
    getKittyCharWithMod,
    getKittyChar,
    getLegacyModifierSequence,
};
