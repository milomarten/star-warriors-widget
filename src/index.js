import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Widget() {
    let [date, setDate] = useState([0, 0]);
    let propogate = function(month, day) {
        setDate([month, day])
    }

    return (
        <div>
            <h1>Star Warriors Cosmic Color Lookup!</h1>
            <DatePicker lookup={propogate} />
            <Results date={date} />
        </div>
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

const ZODIAC = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Saggitarius", "Capricorn", "Aquarius", "Pisces"];
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

function Results(props) {
    let month = props.date[0];
    let day = props.date[1];

    if (month === 0) {
        return (<div></div>)
     } else {
        let z = get_zodiac_idx(month, day);
        return (
            <div>
                <p>You were born on {month} / {day}. That means you're a {ZODIAC[z]}!</p>
            </div>
        );
    }
}
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Widget />);
  