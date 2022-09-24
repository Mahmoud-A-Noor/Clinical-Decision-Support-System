import React from 'react';
import { useState } from "react";
import {
    FormGroup,
    Button,
  } from "@mui/material";
import CDSS_Toggle from './CDSS_Toggle';


export default function CDSS_Search({CDSS, symptoms, setSymptoms, activeButton, setActiveButton, selected_symptoms, setSelectedSymptoms, recommendations, setRecommendations}) {
    

  let search_old_value = "";

  function handle_recommendation_click(event) {
    let search_symptom = document.getElementsByClassName("search-symptom")[0];
    search_symptom.value = event.target.innerText;
    setRecommendations([]);
    search_symptom.focus();
  }

  function handle_recommendation_mouse_enter(event) {
    let search_symptom = document.getElementsByClassName("search-symptom")[0];
    search_old_value = search_symptom.value;
    search_symptom.value = event.target.innerText;
  }

  function handle_recommendation_mouse_leave(event) {
    let search_symptom = document.getElementsByClassName("search-symptom")[0];
    search_symptom.value = search_old_value;
  }

  function handle_selected_symptom_delete(event) {
    let new_selected_symptoms = selected_symptoms.filter(
      (symptom) => symptom !== event.target.innerText
    );
    setSelectedSymptoms(new_selected_symptoms);
    setSymptoms({ ...symptoms, [event.target.innerText]: false });
  }

  function handle_selected_symptom(event) {
    let search_symptom = document.getElementsByClassName("search-symptom")[0];
    if (event.keyCode == 13) {
      if (
        search_symptom.value !== "" &&
        Object.keys(symptoms).includes(
          String(search_symptom.value).toLowerCase()
        )
      ) {
        setSelectedSymptoms([
          ...selected_symptoms,
          String(search_symptom.value).toLowerCase(),
        ]);
        setSymptoms({
          ...symptoms,
          [String(search_symptom.value).toLowerCase()]: true,
        });
        search_symptom.value = "";
        setRecommendations([]);
        return true;
      }
      return false;
    }
  }

  function handle_recommendations(event) {
    let search_symptom = document.getElementsByClassName("search-symptom")[0];
    if (handle_selected_symptom(event)) return;
    else {
      if (search_symptom.value === "") {
        setRecommendations([]);
      } else {
        search_old_value = search_symptom.value;
        let symptom_list = Object.keys(symptoms);
        let filtered_symptoms = [];
        for (let i = 0; i < symptom_list.length; i++) {
          if (
            symptom_list[i]
              .toLowerCase()
              .includes(String(search_symptom.value).toLowerCase())
          ) {
            if (!selected_symptoms.includes(symptom_list[i].toLowerCase())) {
              filtered_symptoms.push(
                <li
                  key={symptom_list[i]}
                  className="cursor-pointer recommendation-li p-3 border-bottom border-top"
                  onMouseEnter={handle_recommendation_mouse_enter}
                  onMouseLeave={handle_recommendation_mouse_leave}
                  onClick={handle_recommendation_click}
                >
                  {symptom_list[i]}
                </li>
              );
            }
          }
        }
        setRecommendations(filtered_symptoms);
      }
    }
  }

  const selected_symptoms_list = selected_symptoms.map((symptom) => {
    return (
      <li className="selected-symptom-li p-3" key={symptom}>
        <span
          className="selected-symptom"
          onClick={handle_selected_symptom_delete}
        >
          <div className="cursor-pointer text-bg-warning rounded-3 py-2 px-3">
            <strong>{symptom}</strong>
          </div>
        </span>
      </li>
    );
  });

  return (
    <div>
        <div id="symptom-page-header">
          <h1 className="mx-auto">Search For Symptoms</h1>
          <CDSS_Toggle activeButton={activeButton} setActiveButton={setActiveButton} clear={()=>{
            setRecommendations([]);
            setSelectedSymptoms([]);
          }} />
        </div>
        <div className="w-75 mx-auto">
          <label className="visually-hidden" htmlFor="autoSizingInputGroup">
            Search For Your Symptoms
          </label>
          <div className="input-group">
            <div className="input-group-text p-3">
              <i className="bi bi-search"></i>
            </div>
            <input
              onKeyUp={(event) => handle_recommendations(event)}
              type="text"
              className="form-control shadow-lg search-symptom"
              id="autoSizingInputGroup"
              placeholder="Type Your Symptoms"
            />
          </div>
        </div>
        {selected_symptoms.length > 0 ? (
          <div className="d-flex flex-row w-75 mx-auto">
            <div className="p-4"></div>
            <ul className=" list-unstyled d-flex flex-row">
              {selected_symptoms_list}
            </ul>
          </div>
        ) : null}
        <div className=" d-flex w-75 mx-auto">
          <div className="p-4"></div>
          <ul className=" list-unstyled w-100">{recommendations}</ul>
        </div>
        <FormGroup>
          <Button
            className="btn btn-primary mb-3 mt-3 p-2 rounded-3"
            variant="contained"
            onClick={CDSS}
          >
            Predict
          </Button>
        </FormGroup>
      </div>
  );
}