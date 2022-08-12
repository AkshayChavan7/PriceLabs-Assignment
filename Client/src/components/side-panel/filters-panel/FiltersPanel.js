import "./FiltersPanel.css";
import CloseIcon from "@mui/icons-material/Close";
import Close from "@mui/icons-material/Close";
import MinMaxFilter from "./min-max-filters/MinMaxFilter";
import { Checkbox, Chip, Stack } from "@mui/material";
import { Rate } from "antd";
import { padding } from "@mui/system";
import React from "react";

const FiltersPanel = (props) => {
  const [reset, setReset] = React.useState(0); // this we will use for refreshing the MinMaxFilter compoent after resetting the filters
  const [applyFilters, setApplyFilters] = React.useState(0); // to be updated when apply filters button gets clicked
  const [reviewsCheckboxObj, setReviewsCheckboxObj] = React.useState({
    five: false,
    four: false,
    zero: false,
  });
  // const defaultFiltersObject = {
  //   minBedrooms: 0,
  //   maxBedrooms: 5,
  //   minBathrooms: 0,
  //   maxBathrooms: 5,
  //   minSleeps: 1,
  //   maxSleeps: 20,
  //   minStars: 0,
  // };
  const [filtersObject, setFiltersObject] = React.useState(props.filtersObject);

  const handleReviewCheckboxSelect = (isChecked, selectedRating) => {
    console.log(isChecked, selectedRating);
    switch (selectedRating) {
      case 5:
        reviewsCheckboxObj.five = isChecked;
        setReviewsCheckboxObj(reviewsCheckboxObj);
        break;
      case 4:
        reviewsCheckboxObj.four = isChecked;
        setReviewsCheckboxObj(reviewsCheckboxObj);
        break;
      case 0:
        reviewsCheckboxObj.zero = isChecked;
        setReviewsCheckboxObj(reviewsCheckboxObj);
        break;
      default:
        console.log("selected rating didn't match inside switch");
    }
    // console.log("reviewsCheckboxObj", reviewsCheckboxObj);

    if (reviewsCheckboxObj.five) {
      filtersObject.minStars = 5;
      setFiltersObject(filtersObject);
    } else if (reviewsCheckboxObj.four) {
      filtersObject.minStars = 4;
      setFiltersObject(filtersObject);
    } else {
      filtersObject.minStars = 0;
      setFiltersObject(filtersObject);
    }

    // console.log("filtersObject", filtersObject);
  };

  // console.log("filtersObject", filtersObject);

  return (
    <div className="filters-panel-container">
      <Close
        htmlColor="#878787"
        style={{ float: "right", marginRight: 5, marginBottom: 10 }}
        onClick={(e) => {
          props.setFiltersPanelOpen(false);
        }}
      />
      <MinMaxFilter
        categoryTitle="Bedrooms"
        minValue={0}
        maxValue={5}
        reset={reset}
        applyFilters={applyFilters}
        filtersObject={filtersObject}
        setFiltersObject={(obj) => setFiltersObject(obj)}
      />
      <MinMaxFilter
        categoryTitle="Bathrooms"
        minValue={0}
        maxValue={5}
        reset={reset}
        applyFilters={applyFilters}
        filtersObject={filtersObject}
        setFiltersObject={(obj) => setFiltersObject(obj)}
      />
      <MinMaxFilter
        categoryTitle="Sleeps"
        minValue={1}
        maxValue={20}
        reset={reset}
        applyFilters={applyFilters}
        filtersObject={filtersObject}
        setFiltersObject={(obj) => setFiltersObject(obj)}
      />
      {/* Property reviews div */}
      <div style={{ marginTop: 15 }}>
        <div className="title-text">Property reviews</div>
        <Stack direction={"row"} spacing={1}>
          <Checkbox
            sx={{ "& .MuiSvgIcon-root": { fontSize: 17 } }}
            onChange={(e) => handleReviewCheckboxSelect(e.target.checked, 5)}
          />
          <Rate
            disabled
            allowHalf
            defaultValue={5}
            style={{ color: "black", fontSize: 12, marginTop: 9 }}
          />
          <p style={{ color: "#727272", fontSize: 12, marginTop: 10 }}>
            5+ stars
          </p>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <Checkbox
            sx={{ "& .MuiSvgIcon-root": { fontSize: 17 } }}
            onChange={(e) => handleReviewCheckboxSelect(e.target.checked, 4)}
          />
          <Rate
            disabled
            allowHalf
            defaultValue={4}
            style={{ color: "black", fontSize: 12, marginTop: 9 }}
          />
          <p style={{ color: "#727272", fontSize: 12, marginTop: 10 }}>
            4+ stars
          </p>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <Checkbox
            sx={{ "& .MuiSvgIcon-root": { fontSize: 17 } }}
            onChange={(e) => handleReviewCheckboxSelect(e.target.checked, 0)}
          />
          <Rate
            disabled
            allowHalf
            defaultValue={0}
            style={{ color: "black", fontSize: 12, marginTop: 9 }}
          />
          <p style={{ color: "#727272", fontSize: 12, marginTop: 10 }}>
            0+ stars
          </p>
        </Stack>
      </div>

      <Stack
        direction={"row"}
        spacing={1}
        className="reset-apply-buttons-container"
      >
        <Chip
          label="Reset"
          color="primary"
          variant="outlined"
          sx={{ padding: 1 }}
          clickable={true}
          onClick={() => setReset(reset + 1)}
        />
        <Chip
          label="Apply"
          color="primary"
          sx={{ padding: 1 }}
          clickable={true}
          onClick={() => {
            setApplyFilters(applyFilters + 1);
            props.setFiltersObject(filtersObject);
          }}
        />
      </Stack>
    </div>
  );
};

export default FiltersPanel;
