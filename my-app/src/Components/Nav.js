import React from "react";



export default function Nav() {
    return (
        <nav className="topnav">
            <div className="leftnav">
                <h1>Alisa Wolfram</h1>
            </div>
            <div className="rightnav">
                <a className="button1">About Me</a>
                <a className="button1">Contact</a>
                <a className="button1">Work</a>
                <a className="button1" href="./Alisa Wolfram - Resume.pdf">Resume</a>
            </div>
        </nav>
    )
}