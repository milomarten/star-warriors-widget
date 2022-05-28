import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Widget() {
    let [date, setDate] = useState([0, 0]);
    let propogate = function(month, day) {
        setDate([month, day])
    }

    return (
        <>
        <div class="container">
            <h1>Star Warriors Cosmic Color Lookup!</h1>
            <DatePicker lookup={propogate} />
            <Results date={date} />
        </div>
        <Footer />
        </>
    );
}

const NAMES_OF_MONTHS = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS_IN_MONTH = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const now = new Date();

function DatePicker(props) {
    let [month, setMonth] = useState(now.getMonth() + 1);
    let [monthName, setMonthName] = useState(NAMES_OF_MONTHS[now.getMonth() + 1]);
    let [day, setDay] = useState(now.getDate());

    let onMonthChange = function(mon) {
        if (Number.isNaN(mon)) {
            mon = month;
        } if (mon < 1) {
            mon = 1;
        } else if (mon > 12) {
            mon = 12;
        }
        let daysInMonth = DAYS_IN_MONTH[mon];
        if (day > daysInMonth) {
            setDay(daysInMonth);
        }
        setMonth(mon);
        setMonthName(NAMES_OF_MONTHS[mon]);
    }

    let onDayChange = function(day) {
        let daysInMonth = DAYS_IN_MONTH[month];
        if (day < 1) {
            day = 1;
        } else if (day > daysInMonth) {
            day = daysInMonth;
        }
        setDay(day);
    }

    let onSubmit = function(evt) {
        props.lookup(month, day)
        evt.preventDefault();
    }

    return (
        <form action="#" onSubmit={onSubmit}>
            <div className="row g-3">
                <div className="col col-xs-12">
                    <label htmlFor="month" className="form-label">Month:</label>
                    <div className="input-group">
                        <input id="month" className="form-control" type="number" value={month} onChange={(v) => onMonthChange(v.target.valueAsNumber)}/>
                        <span className="input-group-text">{monthName}</span>
                    </div>
                </div>
                <div className="col col-xs-12">
                    <label htmlFor="day" className="form-label">Day:</label>
                    <input id="day" className="form-control" type="number" value={day} onChange={(v) => onDayChange(v.target.valueAsNumber)}/>
                </div>
                <div className="col-auto snap-to-bottom">
                    <input type="submit" className="btn btn-primary"/>
                </div>
            </div>
        </form>
    );
}

// The 12 zodiac and their associated values on the table.
const ZODIAC = [
    {
        name: "Aries",
        symbol: "♈︎",
        terms: ["Evasive", "Swift"]
    },
    {
        name: "Taurus",
        symbol: "♉︎",
        terms: ["Chaotic", "Random"]
    },
    {
        name: "Gemini",
        symbol: "♊︎",
        terms: ["Repeating", "Persistant"]
    },
    {
        name: "Cancer",
        symbol: "♋︎",
        terms: ["Resistant", "Steady"]
    },
    {
        name: "Leo",
        symbol: "♌︎",
        terms: ["Unyielding", "Forceful"]
    },
    {
        name: "Virgo",
        symbol: "♍︎",
        terms: ["Bolstering", "Empowering"]
    },
    {
        name: "Libra",
        symbol: "♎︎",
        terms: ["Disruptive", "Harmonic"]
    },
    {
        name: "Scorpio",
        symbol: "♏︎",
        terms: ["Manipulative", "Controlled"]
    },
    {
        name: "Saggitarius",
        symbol: "♐︎",
        terms: ["Deterministic", "Focused"]
    },
    {
        name: "Capricorn",
        symbol: "♑︎",
        terms: ["Fluid", "Turbulent"]
    },
    {
        name: "Aquarius",
        symbol: "♒︎",
        terms: ["Volatile", "Instant"]
    },
    {
        name: "Pisces",
        symbol: "♓︎",
        terms: ["Overwhelming", "Hindering"]
    }
];
// Format is [<idx of the Zodiac at the 1st of the month>, <day it transfers to the next zodiac>]
// Index is the month it represents.
const ZODIAC_MAP = [
    [], // Placeholder since we use 1-indexing for months
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

function get_zodiac_idx(month, day) {
    let z = ZODIAC_MAP[month];
    if (day < z[1]) {
        return z[0]
    } else {
        return (z[0] + 1) % 12
    }
}

// Get the day # of the date, with the origin on Jan 0.
// Note a true Julian Date, since we count Feb 29 always.
function get_julian(month, day) {
    let ctr = 0;
    for (let idx = 1; idx < month; idx++) {
        ctr += DAYS_IN_MONTH[idx];
    }
    return ctr + day;
}

// This is the first day of the first sign in the horoscope,
// and serves as our origin for further calculation.
const ZODIAC_ORIGIN = get_julian(3, 21);

// Get the day # of the date, with the origin at March 21.
// Essentially, the number of days since the zodiac cycle started.
function get_zodiac_julian(julian) {
    let h_julian = julian - ZODIAC_ORIGIN;
    if (h_julian < 0) {
        h_julian += 366;
    }
    return h_julian
}

// There are six affinities:
// Speed
// Stamina
// Strength
// Will
// Mind
// Agility
const AFFINITIES = [
    {
        name: "Speed",
        flavor: "Star Warriors with this affinity can use their cosmic power faster."
    },
    {
        name: "Stamina",
        flavor: "Star Warriors with this affinity can sustain their cosmic power for longer."
    },
    {
        name: "Strength",
        flavor: "Star Warriors with this affinity can exert their cosmic power harder."
    },
    {
        name: "Will",
        flavor: "Star Warriors with this affinity can control their cosmic power better."
    },
    {
        name: "Mind",
        flavor: "Star Warriors with this affinity can transform their cosmic power further."
    },
    {
        name: "Agility",
        flavor: "Star Warriors with this affinity can alter their cosmic power sooner."
    },
]

function get_affinity_idx(hday) {
    let as_circle = hday * 360 / 365;
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

const DAY_COLORS = [
    [get_julian(1, 1), 57, 0, 255],
    [get_julian(1, 14), 20, 0, 255],
    [get_julian(2, 1), 0, 101, 255],
    [get_julian(2, 14), 0, 212, 255],
    [get_julian(3, 1), 0, 255, 160],
    [get_julian(3, 14), 0, 255, 60],
    [get_julian(4, 1), 46, 255, 0],
    [get_julian(4, 14), 100, 255, 0],
    [get_julian(5, 1), 171, 255, 0],
    [get_julian(5, 14), 225, 255, 0],
    [get_julian(6, 1), 255, 236, 0],
    [get_julian(6, 14), 255, 215, 0],
    [get_julian(7, 1), 255, 186, 0],
    [get_julian(7, 14), 255, 164, 0],
    [get_julian(8, 1), 255, 127, 0],
    [get_julian(8, 14), 255, 95, 0],
    [get_julian(9, 1), 255, 50, 0],
    [get_julian(9, 14), 255, 18, 0],
    [get_julian(10, 1), 255, 0, 50],
    [get_julian(10, 14), 255, 0, 125],
    [get_julian(11, 1), 255, 0, 242],
    [get_julian(11, 14), 187, 0, 255],
    [get_julian(12, 1), 129, 0, 255],
    [get_julian(12, 14), 99, 0, 255],
    [get_julian(12, 31), 59, 0, 255]
]

function get_day_color(jday) {
    for (let idx = 0; idx < DAY_COLORS.length; idx++) {
        let entry = DAY_COLORS[idx];
        if (entry[0] === jday) {
            return toRgb(entry[1], entry[2], entry[3]);
        } else if (entry[0] > jday) {
            let prev_entry = DAY_COLORS[idx - 1];
            let red = lerp(prev_entry[0], entry[0], prev_entry[1], entry[1], jday);
            let green = lerp(prev_entry[0], entry[0], prev_entry[2], entry[2], jday);
            let blue = lerp(prev_entry[0], entry[0], prev_entry[3], entry[3], jday);
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

function Results(props) {
    let month = props.date[0];
    let day = props.date[1];

    if (month === 0) {
        return (<div></div>)
     } else {
        let z = ZODIAC[get_zodiac_idx(month, day)];
        let julian = get_julian(month, day);
        let h_julian = get_zodiac_julian(julian);
        let affinity = AFFINITIES[get_affinity_idx(h_julian)];
        let colorStyle = {
            color: "#" + get_day_color(julian)
        };

        let copy_to_clipboard = function() {
            navigator.clipboard.writeText(colorStyle.color);
        }

        return (
            <div>
                <h2 className="text-center" style={colorStyle}>{z.symbol}</h2>
                <p>You were born on {month}/{day}. That means you're a {z.name}!</p>
                <p>
                    Star Warriors born on this day are typically {z.terms[0]} and {z.terms[1]}, and
                    typically have a natural affinity for {affinity.name}. {affinity.flavor}
                </p>
                <p>
                    Your Cosmic Color is: 
                    <div className="input-group">
                        <input type="color" id="cosmic-color" className="form-control form-control-color" value={colorStyle.color} readOnly/>
                        <input type="text" className="form-control" value={colorStyle.color} readOnly />
                        <button className="btn btn-outline-secondary" type="button" onClick={copy_to_clipboard}>Copy RGB to Clipboard</button>
                    </div>
                </p>
            </div>
        );
    }
}

function Footer () {
    return (
        <footer>
            <div className="container">
            Created with 💚 by Milo Marten. Star Warriors is created and owned by Scott Frasier. Read it <a href="https://www.starwarriorscomic.com/">here</a>!
            </div>
        </footer>
    )
}
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Widget />);
  