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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            label="Comp Set (49)"
            {...a11yProps(0)}
          />
          <Tab
            style={{ textTransform: "none", fontSize: 12 }}
            label="Other properties (951)"
            {...a11yProps(1)}
          />
          <Tab
            style={{ textTransform: "none", fontSize: 12 }}
            label="Hotels (52)"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <div style={{ color: "#787878", marginTop: 10 }}>
        {" "}
        <Checkbox size="small" style={{ marginLeft: 4 }} /> Select all
        properties
      </div>
      <TabPanel value={value} index={0}>
        <Listings {...props} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
};

export default TabsContainer;
