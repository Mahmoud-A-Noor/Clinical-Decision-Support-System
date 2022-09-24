import React from 'react';

export default function CDSS_Toggle({ setActiveButton, setRecommendations, setSelectedSymptoms, activeButton, clear }) {
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