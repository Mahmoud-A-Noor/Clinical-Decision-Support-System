import React from "react";
import { useState } from "react";

import CDSS_Select from "./CDSS_Select";
import CDSS_Search from "./CDSS_Search";

import axios from "axios";
import CDSS_Prediction from "./CDSS_Prediction";

export default function CDSS() {
  const [symptoms, setSymptoms] = useState({
    itching: false,
    "skin rash": false,
    "nodal skin eruptions": false,
    "continuous sneezing": false,
    shivering: false,
    chills: false,
    "joint pain": false,
    "stomach pain": false,
    acidity: false,
    "ulcers on tongue": false,
    "muscle wasting": false,
    vomiting: false,
    "burning micturition": false,
    "spotting urination": false,
    fatigue: false,
    "weight gain": false,
    anxiety: false,
    "cold hands and feets": false,
    "mood swings": false,
    "weight loss": false,
    restlessness: false,
    lethargy: false,
    "patches in throat": false,
    "irregular sugar level": false,
    cough: false,
    "high fever": false,
    "sunken eyes": false,
    breathlessness: false,
    sweating: false,
    dehydration: false,
    indigestion: false,
    headache: false,
    "yellowish skin": false,
    "dark urine": false,
    nausea: false,
    "loss of appetite": false,
    "pain behind the eyes": false,
    "back pain": false,
    constipation: false,
    "abdominal pain": false,
    diarrhoea: false,
    "mild fever": false,
    "yellow urine": false,
    "yellowing of eyes": false,
    "acute liver failure": false,
    "fluid overload": false,
    "swelling of stomach": false,
    "swelled lymph nodes": false,
    malaise: false,
    "blurred and distorted vision": false,
    phlegm: false,
    "throat irritation": false,
    "redness of eyes": false,
    "sinus pressure": false,
    "runny nose": false,
    congestion: false,
    "chest pain": false,
    "weakness in limbs": false,
    "fast heart rate": false,
    "pain during bowel movements": false,
    "pain in anal region": false,
    "bloody stool": false,
    "irritation in anus": false,
    "neck pain": false,
    dizziness: false,
    cramps: false,
    bruising: false,
    obesity: false,
    "swollen legs": false,
    "swollen blood vessels": false,
    "puffy face and eyes": false,
    "enlarged thyroid": false,
    "brittle nails": false,
    "swollen extremeties": false,
    "excessive hunger": false,
    "extra marital contacts": false,
    "drying and tingling lips": false,
    "slurred speech": false,
    "knee pain": false,
    "hip joint pain": false,
    "muscle weakness": false,
    "stiff neck": false,
    "swelling joints": false,
    "movement stiffness": false,
    "spinning movements": false,
    "loss of balance": false,
    unsteadiness: false,
    "weakness of one body side": false,
    "loss of smell": false,
    "bladder discomfort": false,
    "foul smell of urine": false,
    "continuous feel of urine": false,
    "passage of gases": false,
    "internal itching": false,
    "toxic look (typhos)": false,
    depression: false,
    irritability: false,
    "muscle pain": false,
    "altered sensorium": false,
    "red spots over body": false,
    "belly pain": false,
    "abnormal menstruation": false,
    "dischromic patches": false,
    "watering from eyes": false,
    "increased appetite": false,
    polyuria: false,
    "family history": false,
    "mucoid sputum": false,
    "rusty sputum": false,
    "lack of concentration": false,
    "visual disturbances": false,
    "receiving blood transfusion": false,
    "receiving unsterile injections": false,
    coma: false,
    "stomach bleeding": false,
    "distention of abdomen": false,
    "history of alcohol consumption": false,
    "blood in sputum": false,
    "prominent veins on calf": false,
    palpitations: false,
    "painful walking": false,
    "pus filled pimples": false,
    blackheads: false,
    scurring: false,
    "skin peeling": false,
    "silver like dusting": false,
    "small dents in nails": false,
    "inflammatory nails": false,
    blister: false,
    "red sore around nose": false,
    "yellow crust ooze": false
  });

  const [prediction, setPrediction] = useState(null);

  const [activeButton, setActiveButton] = useState("select");

  const [recommendations, setRecommendations] = useState([]);

  const [selected_symptoms, setSelectedSymptoms] = useState([]);
  
  function CDSS() {
    axios.post("/api/CDSS", symptoms).then((response) => {
      setPrediction(response.data["prognosis"]);
    });
  }



  

  if (prediction){
    return <CDSS_Prediction symptoms={symptoms} setSymptoms={setSymptoms} prediction={prediction}
            setPrediction={setPrediction} setRecommendations={setRecommendations} setSelectedSymptoms={setSelectedSymptoms} />
  }else if (activeButton === "search") {
    return <CDSS_Search CDSS={CDSS} symptoms={symptoms} setSymptoms={setSymptoms} 
            activeButton={activeButton} setActiveButton={setActiveButton} 
            recommendations={recommendations} setRecommendations={setRecommendations} 
            selected_symptoms={selected_symptoms} setSelectedSymptoms={setSelectedSymptoms} />
  }else{
    return <CDSS_Select CDSS={CDSS} symptoms={symptoms} setSymptoms={setSymptoms} activeButton={activeButton} setActiveButton={setActiveButton} />
  }
}
