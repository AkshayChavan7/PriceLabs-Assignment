import "./App.css";
import SidePanel from "./components/side-panel/SidePanel";
import Map from "./components/map/Map";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div>
      <Grid container spacing={0.1}>
        <Grid item xs={3} style={{ minWidth: 380, padding: 0 }}>
          <SidePanel />
        </Grid>
        <Grid item xs={9}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
