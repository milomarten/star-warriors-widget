import { format } from "date-fns";
import { Affinity, AffinityData, get_affinity_data } from "./affinity";
import { Faction, FactionData, get_faction_data } from "./faction";
import { get_zodiac_data, get_zodiac_julian, ZodiacData } from "./zodiac";

export enum Month {
    JANUARY, FEBRUARY, MARCH, APRIL,
    MAY, JUNE, JULY, AUGUST,
    SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER
}

export const NAMES_OF_MONTHS = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const DAYS_IN_MONTH = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const DAY_COLORS = [
    [get_day_of_year(1, 1), 57, 0, 255],
    [get_day_of_year(1, 14), 20, 0, 255],
    [get_day_of_year(2, 1), 0, 101, 255],
    [get_day_of_year(2, 14), 0, 212, 255],
    [get_day_of_year(3, 1), 0, 255, 160],
    [get_day_of_year(3, 14), 0, 255, 60],
    [get_day_of_year(4, 1), 46, 255, 0],
    [get_day_of_year(4, 14), 100, 255, 0],
    [get_day_of_year(5, 1), 171, 255, 0],
    [get_day_of_year(5, 14), 225, 255, 0],
    [get_day_of_year(6, 1), 255, 236, 0],
    [get_day_of_year(6, 14), 255, 215, 0],
    [get_day_of_year(7, 1), 255, 186, 0],
    [get_day_of_year(7, 14), 255, 164, 0],
    [get_day_of_year(8, 1), 255, 127, 0],
    [get_day_of_year(8, 14), 255, 95, 0],
    [get_day_of_year(9, 1), 255, 50, 0],
    [get_day_of_year(9, 14), 255, 18, 0],
    [get_day_of_year(10, 1), 255, 0, 50],
    [get_day_of_year(10, 14), 255, 0, 125],
    [get_day_of_year(11, 1), 255, 0, 242],
    [get_day_of_year(11, 14), 187, 0, 255],
    [get_day_of_year(12, 1), 129, 0, 255],
    [get_day_of_year(12, 14), 99, 0, 255],
    [get_day_of_year(12, 31), 59, 0, 255]
]

function get_day_color(jday) {
    for (let idx = 0; idx < DAY_COLORS.length; idx++) {
        let [e, r, g, b] = DAY_COLORS[idx];
        if (e === jday) {
            return toRgb(r, g, b);
        } else if (e > jday) {
            let [e2, r2, g2, b2] = DAY_COLORS[idx - 1];
            let red = lerp(e2, e, r2, r, jday);
            let green = lerp(e2, e, g2, g, jday);
            let blue = lerp(e2, e, b2, b, jday);
            return toRgb(red, green, blue);
        }
    }
}

function lerp(x0, x1, y0, y1, x) {
    return y0 + ((x - x0)*(y1 - y0) / (x1 - x0));
}

function toRgb(r, g, b) {
    let rN = Math.trunc(r);
    let gN = Math.trunc(g);
    let bN = Math.trunc(b);

    let rHex = rN.toString(16).padStart(2, "0");
    let gHex = gN.toString(16).padStart(2, "0");
    let bHex = bN.toString(16).padStart(2, "0");

    return rHex + gHex + bHex;
}

export class Day {
    month: Month
    day: number

    color: string
    daysSinceYearStart: number
    daysSinceHoroscopeStart: number
    zodiac: ZodiacData
    affinity: AffinityData
    factions: FactionData[]

    constructor(month: Month, day: number) {
        this.month = month
        this.day = day
        this.daysSinceYearStart = get_day_of_year(month, day)

        this.color = get_day_color(this.daysSinceYearStart)
        this.daysSinceHoroscopeStart = get_zodiac_julian(this.daysSinceYearStart)
        this.zodiac = get_zodiac_data(month, day)
        this.affinity = get_affinity_data(this.daysSinceHoroscopeStart)
        this.factions = get_faction_data(this.affinity.id)
    }

    format(fstring: string): string {
        let date = new Date(2020, this.month - 1, this.day) // 2020 enforces leap years are okay...
        return format(date, fstring)
    }
}

function get_day_of_year(month: Month, day: number): number {
    // Calculate days since origin
    // Jan 1 = 1, Dec 31 = 366
    let ctr = 0;
    for (let idx = 1; idx < month; idx++) {
        ctr += DAYS_IN_MONTH[idx];
    }
    return ctr + day;
}