import "./FiltersPanel.css";
import CloseIcon from "@mui/icons-material/Close";
import Close from "@mui/icons-material/Close";
import MinMaxFilter from "./min-max-filters/MinMaxFilter";
import { Stack } from "@mui/material";

const FiltersPanel = (props) => {
  return (
    <Stack direction="column" className="filters-panel-container">
      <Close
        htmlColor="#878787"
        style={{ float: "right", marginRight: 5, marginBottom: 10 }}
      />
      <MinMaxFilter />
    </Stack>
  );
};

export default FiltersPanel;
