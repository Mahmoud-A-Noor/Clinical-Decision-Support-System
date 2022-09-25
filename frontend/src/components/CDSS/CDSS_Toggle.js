import React from 'react';
import { useContext } from "react";
import { ToggleContext } from "./CDSS";

export default function CDSS_Toggle({ clear }) {

    const {activeButton, setActiveButton} = useContext(ToggleContext);

    function toggle() {    
        if (activeButton === "search") {
          setActiveButton("select");
          document.getElementsByClassName("search-symptom")[0].value = "";
          clear();
        } else {
          setActiveButton("search");
        }
      }

    return (
        <div className="btn-group btn-toggle">
          <button
            className={`"toggle-button btn btn-xs ${activeButton === "select"? "btn-primary active" : "btn-default"}"`}
            onClick={toggle}
          >
            Select
          </button>
          <button
            className={`"toggle-button btn btn-xs ${activeButton === "search"? "btn-primary active" : "btn-default"}"`}
            onClick={toggle}
          >
            Search
          </button>
        </div>
    )
}