import React from "react";
import "./TabsContainer.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Checkbox } from "@mui/material";
import Listings from "../listings/Listings";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0.1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabsContainer = (props) => {
  // console.log("props.searchText", props.searchText);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // console.log("filtersObject from Tabs", props.filtersObject);
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          varia-label="basic tabs example"
        >
          <Tab
            style={{ textTransform: "none", fontSize: 12 }}
            label={`Comp Set (${props.listings.length})`}
            {...a11yProps(0)}
          />
          <Tab
            style={{ textTransform: "none", fontSize: 12 }}
            label={`Other properties (${props.listings.length})`}
            {...a11yProps(1)}
          />
          <Tab
            style={{ textTransform: "none", fontSize: 12 }}
            label={`Hotels (${props.listings.length})`}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <div style={{ color: "#787878", marginTop: 10 }}>
        {" "}
        <Checkbox
          sx={{ "& .MuiSvgIcon-root": { fontSize: 17 } }}
          style={{ marginLeft: 4 }}
        />
        <span>Select all properties</span>
      </div>
      <TabPanel value={value} index={0}>
        <Listings {...props} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Listings {...props} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Listings {...props} />
      </TabPanel>
    </Box>
  );
};

export default TabsContainer;
