import { Pagination } from "@mui/material";
import React from "react";
import CustomPagination from "./custom-pagination/CustomPagination";
import FilterInputs from "./filter-inputs/FilterInputs";
import "./SidePanel.css";
import TabsContainer from "./tabs-container/TabsContainer";

const SidePanel = (props) => {
  // console.log("props.selectedListingNumber", props.selectedListingNumber);
  return (
    <div className="sidepanel-container">
      <div className="filter-inputs">
        <FilterInputs {...props} />
      </div>
      <TabsContainer {...props} />
      <CustomPagination {...props} />
    </div>
  );
};

export default SidePanel;
