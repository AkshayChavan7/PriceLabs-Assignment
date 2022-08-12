import { Grid } from "@mui/material";
import { Add, Password, Remove } from "@mui/icons-material";
import "./MinMaxFilter.css";
import React from "react";

const MinMaxFilter = (props) => {
  const [minValue, setMinValue] = React.useState(props.minValue);
  const [maxValue, setMaxValue] = React.useState(props.maxValue);

  // used for refreshing the component state after clicking reset button
  React.useEffect(() => {
    setMinValue(props.minValue);
    setMaxValue(props.maxValue);
  }, [props.reset]);

  React.useEffect(() => {
    const filtersObject = props.filtersObject;
    switch (props.categoryTitle) {
      case "Bedrooms":
        filtersObject.minBedrooms = minValue;
        filtersObject.maxBedrooms = maxValue;
        break;
      case "Bathrooms":
        filtersObject.minBathrooms = minValue;
        filtersObject.maxBathrooms = maxValue;
        break;
      case "Sleeps":
        filtersObject.minSleeps = minValue;
        filtersObject.maxSleeps = maxValue;
        break;
      default:
        console.log("categoryTitle didn't match while applying filters!");
    }

    // console.log("setting filtersObject", filtersObject);
    props.setFiltersObject(filtersObject);
  }, [props.applyFilters]);

  return (
    <div style={{ marginTop: 15 }}>
      <div className="title-text">{props.categoryTitle}</div>
      {/* min value counter */}
      <Grid container spacing={2} style={{ marginTop: 3, marginBottom: 8 }}>
        <Grid item xs={2}>
          <div className="counter-number">{minValue}</div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ fontSize: 12, color: "grey" }}>
            Min {props.categoryTitle.toLowerCase()}
          </div>
        </Grid>
        <Grid item xs={2}>
          <div
            className="center"
            style={
              minValue !== props.minValue ? { border: "1px solid #a5a5a5" } : {}
            }
            onClick={() => {
              if (minValue !== props.minValue) setMinValue(minValue - 1);
            }}
          >
            <Remove
              fontSize="10px"
              color={minValue === props.minValue ? "disabled" : "action"}
              style={{ marginLeft: 4 }}
            />
          </div>
        </Grid>
        <Grid item xs={2}>
          <div
            className="center"
            style={minValue !== maxValue ? { border: "1px solid #a5a5a5" } : {}}
            onClick={() => {
              if (minValue !== maxValue) setMinValue(minValue + 1);
            }}
          >
            <Add
              fontSize="10px"
              color={minValue === maxValue ? "disabled" : "action"}
              style={{ marginLeft: 4 }}
            />
          </div>
        </Grid>
      </Grid>

      {/* max value counter */}
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <div className="counter-number">{maxValue}</div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ fontSize: 12, color: "grey" }}>
            Max {props.categoryTitle.toLowerCase()}
          </div>
        </Grid>
        <Grid item xs={2}>
          <div
            className="center"
            style={maxValue !== minValue ? { border: "1px solid #a5a5a5" } : {}}
            onClick={() => {
              if (maxValue !== minValue) setMaxValue(maxValue - 1);
            }}
          >
            <Remove
              fontSize="10px"
              color={maxValue === minValue ? "disabled" : "action"}
              style={{ marginLeft: 4 }}
            />
          </div>
        </Grid>
        <Grid item xs={2}>
          <div
            className="center"
            style={
              maxValue !== props.maxValue ? { border: "1px solid #a5a5a5" } : {}
            }
            onClick={() => {
              if (maxValue !== props.maxValue) setMaxValue(maxValue + 1);
            }}
          >
            <Add
              fontSize="10px"
              color={maxValue === props.maxValue ? "disabled" : "action"}
              style={{ marginLeft: 4 }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MinMaxFilter;
