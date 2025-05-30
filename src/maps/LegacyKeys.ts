import { type Key } from "../types.js";

export const LegacyKeys: Record<string, Key[]> = {
    "\x1B[3~": ["delete"],
    "\x7F": ["backspace"],
    "\x1B[2~": ["insert"],
    "\x1B[A": ["up"],
    "\x1B[B": ["down"],
    "\x1B[C": ["right"],
    "\x1B[D": ["left"],
    "\x1BOP": ["f1"],
    "\x1BOQ": ["f2"],
    "\x1BOR": ["f3"],
    "\x1BOS": ["f4"],
    "\x1B[15~": ["f5"],
    "\x1B[17~": ["f6"],
    "\x1B[18~": ["f7"],
    "\x1B[19~": ["f8"],
    "\x1B[20~": ["f9"],
    "\x1B[21~": ["f10"],
    "\x1B[23~": ["f11"],
    "\x1B[24~": ["f12"],
    "\x1b[5~": ["pageUp"],
    "\x1b[6~": ["pageDown"],
    "\x1b[F": ["end"],
    "\x1b[8~": ["end"],
    "\x1b[H": ["home"],
    "\x1b[7~": ["home"],

    /* Kitty Legacy Keys */
    "\x1b[27u": ["esc"],
    "\x1b[9u": ["tab"],
    "\x1b[13u": ["return"],
    "\x1b[127u": ["backspace"],

    /* ctrl + key (letters) */
    // "\x1b[1;5A": ["ctrl", "up"],
    // "\x1b[1;5B": ["ctrl", "down"],
    // "\x1b[1;5C": ["ctrl", "right"],
    // "\x1b[1;5D": ["ctrl", "left"],
    // "\x1b[1;5F": ["ctrl", "end"],
    // "\x1b[1;5H": ["ctrl", "home"],
    // "\x1b[1;5P": ["ctrl", "f1"],
    // "\x1b[1;5Q": ["ctrl", "f2"],
    // "\x1b[1;5R": ["ctrl", "f3"],
    // "\x1b[1;5S": ["ctrl", "f4"],
    //
    // /* alt + key (letters) */
    // "\x1b[1;3A": ["alt", "up"],
    // "\x1b[1;3B": ["alt", "down"],
    // "\x1b[1;3C": ["alt", "right"],
    // "\x1b[1;3D": ["alt", "left"],
    // "\x1b[1;3F": ["alt", "end"],
    // "\x1b[1;3H": ["alt", "home"],
    // "\x1b[1;3P": ["alt", "f1"],
    // "\x1b[1;3Q": ["alt", "f2"],
    // "\x1b[1;3R": ["alt", "f3"],
    // "\x1b[1;3S": ["alt", "f4"],
    //
    // /* ctrl + fn keys 5-12 */
    // "\x1b[15;5~": ["ctrl", "f5"],
    // "\x1b[17;5~": ["ctrl", "f6"],
    // "\x1b[18;5~": ["ctrl", "f7"],
    // "\x1b[19;5~": ["ctrl", "f8"],
    // "\x1b[20;5~": ["ctrl", "f9"],
    // "\x1b[21;5~": ["ctrl", "f10"],
    // "\x1b[23;5~": ["ctrl", "f11"],
    // "\x1b[24;5~": ["ctrl", "f12"],
    //
    // /* alt + fn keys 5-12 */
    // "\x1b[15;3~": ["alt", "f5"],
    // "\x1b[17;3~": ["alt", "f6"],
    // "\x1b[18;3~": ["alt", "f7"],
    // "\x1b[19;3~": ["alt", "f8"],
    // "\x1b[20;3~": ["alt", "f9"],
    // "\x1b[21;3~": ["alt", "f10"],
    // "\x1b[23;3~": ["alt", "f11"],
    // "\x1b[24;3~": ["alt", "f12"],
} as const;
