import React from "react";
import "./../Styling/HomePage5Style.css";
import { AiOutlineFilePdf } from "react-icons/ai";

const HomePage4 = () => {
  return (
    <div className="container" id="event-container">
      <h1 id="eventdiv-heading">Rulebooks</h1>
      <div id="pdf-event1-div">

      <div id="pdf-div-desktop-1">
        <iframe
          class="pdf"
          src={require("./../../Resources/Rulebooks/Scoresheet.pdf")}
          id="openinnov-rulebook"
          title="Open Innovation Scoresheet"
        ></iframe>
      </div>

      <div id="pdf-div-mobile-1">
        <a
          href={require("./../../Resources/Rulebooks/Scoresheet.pdf")}
          download
          className="pdf-download"
        >
          <AiOutlineFilePdf className="pdf-icon" id="pdficon-1" />
        </a>
        <h2 className="rulebook-heading" id="open-heading">
          Open Innovation
        </h2>
      </div>

      </div>
      <div id="pdf-event2-div">

      <div id="pdf-div-desktop-2">
        <iframe
          class="pdf"
          src={require("./../../Resources/Rulebooks/Roadster Rulebook V2.pdf")}
          id="roadster-rulebook"
          title="Roadster Scoresheet"
        ></iframe>
      </div>

      <div id="pdf-div-mobile-2">
        <a
          href={require("./../../Resources/Rulebooks/Roadster Rulebook V2.pdf")}
          download
          className="pdf-download"
        >
          <AiOutlineFilePdf className="pdf-icon" id="pdficon-2"/>
        </a>
        <h2 className="rulebook-heading" id="roadster-heading">
          Roadster
        </h2>
      </div>

      </div>
      
    </div>
  );
};

export default HomePage4;
