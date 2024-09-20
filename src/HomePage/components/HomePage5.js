import React from "react";
import "./../Styling/HomePage5Style.css";
import { AiOutlineFilePdf } from "react-icons/ai";

const HomePage4 = () => {
  return (
    <div className="container" id="event-container">
      <h1 id="eventdiv-heading">Rulebooks for the events</h1>
      <div id="pdf-event1-div">

      <div id="pdf-div-desktop-1">
        <iframe
          class="pdf"
          src={require("./../../Resources/Rulebooks/Scoresheet.pdf")}
          id="openshowcase-rulebook"
          title="Open Showcase Scoresheet"
        ></iframe>
      </div>

      <div id="pdf-div-mobile-1">
        <a
          href={require("./../../Resources/Rulebooks/Scoresheet.pdf")}
          download
          className="pdf-download"
        >
          <AiOutlineFilePdf className="pdf-icon" /> {/* React Icon for PDF */}
        </a>
        <h2 className="Rule-heading" id="rulebook-heading">
          Open Showcase
        </h2>
      </div>

      </div>
      <div id="pdf-event2-div">

      <div id="pdf-div-desktop-2">
        <iframe
          class="pdf"
          src={require("./../../Resources/Rulebooks/Scoresheet.pdf")}
          id="openshowcase-rulebook"
          title="Open Showcase Scoresheet"
        ></iframe>
      </div>

      <div id="pdf-div-mobile-2">
        <a
          href={require("./../../Resources/Rulebooks/Roadster Rulebook.pdf")}
          download
          className="pdf-download"
        >
          <AiOutlineFilePdf className="pdf-icon" /> {/* React Icon for PDF */}
        </a>
        <h2 className="Rule-heading" id="rulebook-heading">
          Roadster
        </h2>
      </div>

      </div>
      
    </div>
  );
};

export default HomePage4;
