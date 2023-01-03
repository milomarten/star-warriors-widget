import { ZodiacData } from "./zodiac";

const TERM_INDEX_ORDER = [
    "Swift", "Chaotic", "Random", "Repeating",
    "Persistant", "Resistant", "Steady", "Unyielding",
    "Forceful", "Surpassing", "Empowering", "Disruptive",
    "Harmonic", "Manipulative", "Controlled", "Deterministic",
    "Focused", "Fluid", "Turbulent", "Volatile",
    "Instant", "Overwhelming", "Hindering", "Evasive"
]

export function get_power_wheel_url(zd: ZodiacData) {
    let params = new Array<number>(TERM_INDEX_ORDER.length).fill(0);
    let idx = TERM_INDEX_ORDER.indexOf(zd.terms[0]);

    params[mod_add(idx, -2)] = 1
    params[mod_add(idx, -1)] = 3
    params[idx] = 5
    params[mod_add(idx, 1)] = 5
    params[mod_add(idx, 2)] = 3
    params[mod_add(idx, 3)] = 1

    return `https://gunnywaffle.github.io/SW-Power-Wheel/?from=cc#${params.join("-")}`
}

function mod_add(a: number, b: number): number {
    let sum = a + b;
    if (sum < 0) {
        return sum + TERM_INDEX_ORDER.length
    } else {
        return sum % TERM_INDEX_ORDER.length
    }
}