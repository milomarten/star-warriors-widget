import { Affinity, AffinityData } from "./affinity";

const calix = '/images/faction/calix.png';
const nummus = '/images/faction/nummus.png';
const virgula = '/images/faction/virgula.png';
const gladius = '/images/faction/gladius.png';

export enum Faction {
    CALIX,
    NUMMUS,
    VIRGULA,
    GLADIUS
}

export interface FactionData {
    id: Faction,
    name: string,
    badge: string,
    flavor: string,
    description: string,
    affinities: [number, number, number]
}

// Star Warriors are divided into one of four factions.
// These are not tied directly to affinity, but all factions have a set of three afinities that tend to join their ranks.
// As such, any given person has (theoretically) two factions they could join.
const FACTIONS: FactionData[] = [
    {
        id: Faction.CALIX,
        name: "Calix",
        badge: calix,
        flavor: "The caring and protecting.",
        description: "A Calix reinforces their allies with their supportive abilities.",
        affinities: [2, 1, 5]
    },
    {
        id: Faction.NUMMUS,
        name: "Nummus",
        badge: nummus,
        flavor: "The creative and astute.",
        description: "A Nummus shines with their ideas and strategies in missions.",
        affinities: [0, 4, 3]
    },
    {
        id: Faction.VIRGULA,
        name: "Virgula",
        badge: virgula,
        flavor: "The skilled and mystical.",
        description: "A Virgula turns the tables with ease using specialized abilities.",
        affinities: [5, 4, 3]
    },
    {
        id: Faction.GLADIUS,
        name: "Gladius",
        badge: gladius,
        flavor: "The valiant and combating.",
        description: "A Gladius gives their all, making them formidable combatants.",
        affinities: [2, 1, 0]
    },
];

export function get_faction_data(affinity: Affinity): FactionData[] {
    return FACTIONS.filter(f => f.affinities.includes(affinity));
}