import { Pagination, Stack } from "@mui/material";
import React from "react";
import CustomPagination from "./custom-pagination/CustomPagination";
import FilterInputs from "./filter-inputs/FilterInputs";
import FiltersPanel from "./filters-panel/FiltersPanel";
import "./SidePanel.css";
import TabsContainer from "./tabs-container/TabsContainer";

const SidePanel = (props) => {
  // console.log("props.selectedListingNumber", props.selectedListingNumber);
  const [searchText, setSearchText] = React.useState("");
  return (
    <Stack direction={"row"}>
      <div className="sidepanel-container">
        <div className="filter-inputs">
          <FilterInputs
            {...props}
            setSearchText={(text) => {
              setSearchText(text);
            }}
          />
        </div>
        <TabsContainer {...props} searchText={searchText} />
        <CustomPagination {...props} />
      </div>
      <FiltersPanel />
    </Stack>
  );
};

export default SidePanel;
