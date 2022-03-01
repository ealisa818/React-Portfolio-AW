import React from "react";
import MentorMonkey from '../assets/images/MentorMonkey.png';
import DopeHoroscope from '../assets/images/DopeHoroscope.png';
import DailyPlanner from '../assets/images/DailyPlanner.png';
import PasswordGenerator from '../assets/images/PasswordGenerator.png';

export default function Projects() {
    return (
        <><div className="About">Projects</div><div className="column">
            <div className="pictures">
                <a href="https://stevenlof777.github.io/dope-horoscope/">Dope Horoscope</a>
                <img src={DopeHoroscope} alt="Project 1" />
            </div>
            <div className="pictures">
                <a href="https://ealisa818.github.io/Choose-for-Me/">Password Generator</a>
                <img src={PasswordGenerator} alt="Project 2" />
            </div>
        </div><div className="column">
                <div className="pictures">
                    <a href="https://ealisa818.github.io/Daily-Calendar/">Daily Planner</a>
                    <img src={DailyPlanner} alt="Project 3" />
                </div>
                <div className="pictures">
                    <a href="https://secret-falls-29125.herokuapp.com/">MentorMonkey</a>
                    <img src={MentorMonkey.png} alt="Project 4" />
                </div>
            </div></>

    )
}