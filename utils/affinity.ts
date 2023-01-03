export enum Affinity {
    SPEED,
    STAMINA,
    STRENGTH,
    WILL,
    MIND,
    AGILITY
}

export interface AffinityData {
    id: Affinity,
    name: string,
    flavor: string
}

// There are six affinities:
// Speed
// Stamina
// Strength
// Will
// Mind
// Agility
const AFFINITIES: AffinityData[] = [
    {
        id: Affinity.SPEED,
        name: "Speed",
        flavor: "Star Warriors with this affinity can use their cosmic power faster."
    },
    {
        id: Affinity.STAMINA,
        name: "Stamina",
        flavor: "Star Warriors with this affinity can sustain their cosmic power for longer."
    },
    {
        id: Affinity.STRENGTH,
        name: "Strength",
        flavor: "Star Warriors with this affinity can exert their cosmic power harder."
    },
    {
        id: Affinity.WILL,
        name: "Will",
        flavor: "Star Warriors with this affinity can control their cosmic power better."
    },
    {
        id: Affinity.MIND,
        name: "Mind",
        flavor: "Star Warriors with this affinity can transform their cosmic power further."
    },
    {
        id: Affinity.AGILITY,
        name: "Agility",
        flavor: "Star Warriors with this affinity can alter their cosmic power sooner."
    },
]

export function get_affinity_data(horoscope_julian: number): AffinityData {
    return AFFINITIES[get_affinity_idx(horoscope_julian)]
}

function get_affinity_idx(hday) {
    let as_circle = hday * 360 / 366;
    for (let i = 0; i < 6; i++) {
        let start = 15 + (60 * i);
        let end = 60 + start;
        if (end > 360 ) {
            return i;
        }
        if (as_circle >= start && as_circle < end) {
            return i;
        }
    }
    return 5; // It should never ever end up here.
}