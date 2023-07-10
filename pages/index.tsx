import React from 'react';
import { useState } from 'react';
import Head from 'next/head';

import { Day, DAYS_IN_MONTH, NAMES_OF_MONTHS } from '../utils/date';
import { format } from 'date-fns';
import { get_power_wheel_url } from '../utils/integration';

export default function Widget() {
    let [date, setDate] = useState([0, 0]);
    let propogate = function(month: number, day: number) {
        setDate([month, day])
    }

    return (
        <>
        <Head>
            <title>Star Warriors Cosmic Color Lookup</title>
            <link rel="icon" href="favicon.ico" />
            <link rel="manifest" href="manifest.json" />        
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#1D1A65" />
            <meta
                name="description"
                content="A widget dedicated to finding Star Warrior cosmic colors given a date"
            />
        </Head>
        <div className="container-fluid root">
            <DatePicker lookup={propogate} />
            <Results date={date} />
            <Footer />
        </div>
        </>
    );
}

const now = new Date();

export function DatePicker(props) {
    let [month, setMonth] = useState(now.getMonth() + 1);
    let [day, setDay] = useState(now.getDate());

    let month_formatted = Number.isInteger(month) ? format(new Date(2020, month - 1), "LLL") : ""

    let onMonthChange = function(mon: number) {
        if (Number.isNaN(mon) || mon === '') {
            setMonth(Number.NaN);
            return;
        } else if (mon < 1) {
            mon = 1;
        } else if (mon > 12) {
            mon = 12;
        }
        let daysInMonth = DAYS_IN_MONTH[mon];
        if (day > daysInMonth) {
            setDay(daysInMonth);
        }
        setMonth(mon);
    }

    let onDayChange = function(day: number) {
        if (Number.isNaN(day)) {
            setDay(Number.NaN);
            return;
        }
        let daysInMonth = DAYS_IN_MONTH[month];
        if (day < 1) {
            day = 1;
        } else if (day > daysInMonth) {
            day = daysInMonth;
        }
        setDay(day);
    }

    let onSubmit = function(evt: React.FormEvent) {
        if (month && day) {
            props.lookup(month, day)    
        }
        evt.preventDefault();
    }

    return (
        <form action="#" onSubmit={onSubmit}>
            <div className="row g-3">
                <div className="col col-xs-12">
                    <label htmlFor="month" className="form-label">Month:</label>
                    <div className="input-group">
                        <input id="month" className="form-control" type="number" required value={month} onChange={(v) => onMonthChange(v.target.valueAsNumber)}/>
                        <span className="input-group-text dark-text">{month_formatted}</span>
                    </div>
                </div>
                <div className="col col-xs-12">
                    <label htmlFor="day" className="form-label">Day:</label>
                    <input id="day" className="form-control" type="number" required value={day} onChange={(v) => onDayChange(v.target.valueAsNumber)}/>
                </div>
                <div className="col-auto snap-to-bottom">
                    <input type="submit" className="btn btn-primary" value="Ascend" disabled={!month || !day}/>
                </div>
            </div>
        </form>
    );
}

export function Results(props) {
    let [month, day] = props.date;

    if (month === 0) {
        return (<div></div>)
     } else {
        let d = new Day(month, day);

        let colorStyle = {
            color: "#" + d.color
        };

        let copy_to_clipboard = function() {
            navigator.clipboard.writeText(colorStyle.color);
        }

        return (
            <div>
                <img className="mx-auto d-block" src={"/star-warriors-widget" + d.zodiac.symbol} alt={d.zodiac.name + " symbol"} width="200px" />
                <div className="pb-2">You were born on {d.format("LLLL do")}. That means you're {d.zodiac.an ? "an" : "a"} {d.zodiac.name}!</div>
                <div className="pb-2">
                    Star Warriors born on this day are typically {d.zodiac.terms[0]} and {d.zodiac.terms[1]}, and
                    have a natural affinity for {d.affinity.name}. {d.affinity.flavor}
                </div>
                <div className="pb-2">
                    Your Cosmic Color is: 
                    <div className="input-group">
                        <input type="color" id="cosmic-color" className="form-control form-control-color" value={colorStyle.color} readOnly/>
                        <input type="text" className="form-control" value={colorStyle.color} readOnly />
                        <button className="btn btn-outline-primary" type="button" onClick={copy_to_clipboard}>Copy RGB to Clipboard</button>
                    </div>
                </div>
                <div className='pb-2'>
                    These factions may be interested in you:
                    <div className='row'>
                        <Faction data={d.factions[0]} />
                        <Faction data={d.factions[1]} />
                    </div>
                </div>
                <div className='pb-2 power-wheel-link'>
                    Ready to take the next step? <a href={get_power_wheel_url(d.zodiac)} target="_blank">Click here to make your Power Wheel!</a>
                </div>
            </div>
        );
    }
}

export function Faction(props) {
    let data = props.data;

    return (
        <div className='col-sm-6'>
            <div className='card'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={"/star-warriors-widget" + data.badge} className='card-img-top' alt={data.name + ' symbol'} width="200px"/>
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{data.name}</h5>
                            <p className='card-text text-muted'>{data.flavor}</p>
                            <p className='card-text'>{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Footer () {
    return (
        <footer>
            <div className='left-footer'><a href="https://www.starwarriorscomic.com/">Star Warriors</a> ©2022 Scott Fraser</div>
            <div className='right-footer'>Created with 💚 by Milo Marten</div>
        </footer>
    )
}