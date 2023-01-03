const aries = '/images/zodiac/aries.png';
const taurus = '/images/zodiac/taurus.png';
const gemini = '/images/zodiac/gemini.png';
const cancer = '/images/zodiac/cancer.png';
const leo = '/images/zodiac/leo.png';
const virgo = '/images/zodiac/virgo.png';
const libra = '/images/zodiac/libra.png';
const scorpius = '/images/zodiac/scorpius.png';
const sagittarius = '/images/zodiac/sagittarius.png';
const capricorn = '/images/zodiac/capricorn.png';
const aquarius = '/images/zodiac/aquarius.png';
const pisces = '/images/zodiac/pisces.png';

// Julian Day of the first day of the Zodiac (March 21)
const ZODIAC_ORIGIN: number = 81

export enum Zodiac {
    ARIES,
    TAURUS,
    GEMINI,
    CANCER,
    LEO,
    VIRGO,
    LIBRA,
    SCORPIUS,
    SAGITTARIUS,
    CAPRICORN,
    AQUARIUS,
    PISCES
}

export interface ZodiacData {
    id: Zodiac
    name: string,
    symbol: string,
    terms: [string, string],
    an?: boolean
}

const ZODIAC: ZodiacData[] = [
    {
        id: Zodiac.ARIES,
        name: "Aries",
        symbol: aries,
        an: true,
        terms: ["Evasive", "Swift"]
    },
    {
        id: Zodiac.TAURUS,
        name: "Taurus",
        symbol: taurus,
        terms: ["Chaotic", "Random"]
    },
    {
        id: Zodiac.GEMINI,
        name: "Gemini",
        symbol: gemini,
        terms: ["Repeating", "Persistant"]
    },
    {
        id: Zodiac.CANCER,
        name: "Cancer",
        symbol: cancer,
        terms: ["Resistant", "Steady"]
    },
    {
        id: Zodiac.LEO,
        name: "Leo",
        symbol: leo,
        terms: ["Unyielding", "Forceful"]
    },
    {
        id: Zodiac.VIRGO,
        name: "Virgo",
        symbol: virgo,
        terms: ["Bolstering", "Empowering"]
    },
    {
        id: Zodiac.LIBRA,
        name: "Libra",
        symbol: libra,
        terms: ["Disruptive", "Harmonic"]
    },
    {
        id: Zodiac.SCORPIUS,
        name: "Scorpius",
        symbol: scorpius,
        terms: ["Manipulative", "Controlled"]
    },
    {
        id: Zodiac.SAGITTARIUS,
        name: "Sagittarius",
        symbol: sagittarius,
        terms: ["Deterministic", "Focused"]
    },
    {
        id: Zodiac.CAPRICORN,
        name: "Capricorn",
        symbol: capricorn,
        terms: ["Fluid", "Turbulent"]
    },
    {
        id: Zodiac.AQUARIUS,
        name: "Aquarius",
        symbol: aquarius,
        an: true,
        terms: ["Volatile", "Instant"]
    },
    {
        id: Zodiac.PISCES,
        name: "Pisces",
        symbol: pisces,
        terms: ["Overwhelming", "Hindering"]
    }
];

const ZODIAC_MAP: [number, number][] = [
    [0, 0], // Placeholder since we use 1-indexing for months
    [9, 20], // Capricorn, to Aquarius on Jan 20
    [10, 19], // Aquarius, to Pisces on Feb 19
    [11, 21], // Pisces, to Aries on Mar 21
    [0, 20], // Aries, to Taurus on Apr 20
    [1, 21], // Taurus, to Gemini on May 21 
    [2, 21], // Gemini, to Cancer on June 21
    [3, 23], // Cancer, to Leo on July 23
    [4, 23], // Leo, to Virgo on Aug 23
    [5, 23], // Virgo, to Libra on Sep 23
    [6, 23], // Libra, to Scorpio on Oct 23
    [7, 22], // Scorpio, to Sagittarius on Nov 22,
    [8, 22], // Sagittarius, to Capricorn on Dec 22
]

// Get the Zodiac for a given date
export function get_zodiac_data(month: number, day: number): ZodiacData {
    let z = ZODIAC_MAP[month];
    if (day < z[1]) {
        return ZODIAC[z[0]]
    } else {
        return ZODIAC[(z[0] + 1) % 12]
    }
}

// Get the day # of the date, with the origin at March 21.
// Essentially, the number of days since the zodiac cycle started.
export function get_zodiac_julian(julian) {
    let h_julian = julian - ZODIAC_ORIGIN;
    if (h_julian < 0) {
        h_julian += 366;
    }
    return h_julian
}