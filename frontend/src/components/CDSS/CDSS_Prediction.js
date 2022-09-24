import React from 'react';
import {
  Button,
} from "@mui/material";


export default function CDSS_Prediction({prediction, setPrediction, symptoms, setSymptoms, setRecommendations, setSelectedSymptoms}) {

    function predictAgain() {
        setPrediction(null);
        let new_symptoms = {};
        Object.keys(symptoms).forEach((key) => {
          new_symptoms[key] = false;
        });
        setSymptoms(new_symptoms);
        setRecommendations([]);
        setSelectedSymptoms([]);
      }

    return (
        <div>
          <h1>
            You Probably have{" "}
            <span className="font-weight-bold text-danger">{prediction}</span>
          </h1>
          <h5>
            <span className="font-weight-bold text-warning">Note</span> that this
            is just a prognosis go to the doctor and check for the diagnosis
          </h5>
          <Button
            className="btn btn-primary mb-3 mt-3"
            variant="contained"
            onClick={predictAgain}
          >
            Predict Again !
          </Button>
        </div>
      )
}