import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import SidePanel from "./components/side-panel/SidePanel";
import Map from "./components/map/Map";
import Grid from "@mui/material/Grid";
import getFilteredListings from "./services/getFilteredListingsService";
import { Stack } from "@mui/material";

function App() {
  const [listings, setListings] = React.useState([]);
  const [selectedListingNumber, setSelectedListingNumber] = React.useState(0);
  const [hoveredListing, setHoveredListing] = React.useState({});

  React.useEffect(() => {
    (async () => {
      try {
        // bbox = min Longitude , min Latitude , max Longitude , max Latitude
        // -0.489,51.28,0.236,51.686
        // 49.328167, 1.262097
        // 48.744159, 2.792639
        //   lat: 48.8566,
        // lng: 2.3522,
        let requestParams = {
          region: "Paris",
          maxLat: 48.928167,
          minLat: 48.644159,
          maxLong: 2.492639,
          minLong: 2.262097,
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

  const setListingNumber = (number) => {
    setSelectedListingNumber(number);
    console.log("selected listing number set", number);
  };

  return (
    // <div>
    //   <Grid container spacing={0.1}>
    //     <Grid item xs={3} style={{ minWidth: 380, padding: 0 }}>
    //       <SidePanel listings={listings} />
    //     </Grid>
    //     <Grid item xs={9}>
    //       <Map />
    //     </Grid>
    //   </Grid>
    // </div>
    <div style={{ maxHeight: "100%" }}>
      <Stack direction="row" spacing={0.1}>
        <SidePanel
          listings={listings}
          style={{ minWidth: 380, padding: 0 }}
          selectedListingNumber={selectedListingNumber}
          setHoveredListing={(listing) => setHoveredListing(listing)}
        />
        <Map
          listings={listings}
          setSelectedListingNumber={(n) => setListingNumber(n)}
          hoveredListing={hoveredListing}
        />
      </Stack>
    </div>
  );
}

export default App;
