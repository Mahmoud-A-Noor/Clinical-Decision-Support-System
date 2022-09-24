import React from 'react';
import {
    Grid,
    Checkbox,
    FormGroup,
    FormControlLabel,
    Button,
  } from "@mui/material";
import { pink } from "@mui/material/colors";
import CDSS_Toggle from './CDSS_Toggle';


export default function CDSS_Select({CDSS, symptoms, setSymptoms, activeButton, setActiveButton}) {

    function handleCheckboxChange(event) {
        setSymptoms({
            ...symptoms,
            [event.target.name]: event.target.checked ? true : false,
        });
    }

    const checkboxes = Object.keys(symptoms).map((key) => {
        return (
          <Grid item xs={4} sm={4} md={4} key={key}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={symptoms[key]}
                  onChange={handleCheckboxChange}
                  name={key}
                  sx={{
                    color: pink[800],
                    "&.Mui-checked": {
                      color: pink[600],
                    },
                  }}
                  key={key}
                />
              }
              label={key}
              key={key}
            />
          </Grid>
        );
      });

  return (
    <div>
      <div id="symptom-page-header">
        <h1 className="mx-auto">Select Your Symptoms</h1>
        <CDSS_Toggle activeButton={activeButton} setActiveButton={setActiveButton} clear={()=>{}} />
      </div>
      <FormGroup>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 4 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 16, xl: 20 }}
        >
          {checkboxes}
        </Grid>
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