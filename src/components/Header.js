import React from "react";
import trollFace from "../image/Troll Face.png"; // Make sure the filename is correct

export default function Header() {
    return (
        <header className="header">
            <img className="header-image" src={trollFace} alt="TROLL-FACE" />
            <h2 className="header-title">MEME GENERATOR</h2>
            <h4 className="header-project">REACT COURSE -PROJECT 4</h4>
        </header>
    );
}
