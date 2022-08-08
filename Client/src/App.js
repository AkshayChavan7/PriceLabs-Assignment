import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import SidePanel from "./components/side-panel/SidePanel";
import Map from "./components/map/Map";
import Grid from "@mui/material/Grid";
import getFilteredListings from "./services/getFilteredListingsService";

function App() {
  const [listings, setListings] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        let requestParams = {
          region: "Paris",
          maxLat: 42.05596903889523,
          minLat: 41.79337697865317,
          maxLong: -86.47877523091317,
          minLong: -88.63484212544442,
          maxBedrooms: null,
          minBedrooms: 0,
          maxBathrooms: null,
          minBathrooms: 0,
        };
        const respListings = await getFilteredListings(requestParams);
        console.log("response->", respListings);
        setListings(respListings);
      } catch (err) {
        console.log("Error while calling API");
      }
    })();
  }, []);

  return (
    <div>
      <Grid container spacing={0.1}>
        <Grid item xs={3} style={{ minWidth: 380, padding: 0 }}>
          <SidePanel listings={listings} />
        </Grid>
        <Grid item xs={9}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
