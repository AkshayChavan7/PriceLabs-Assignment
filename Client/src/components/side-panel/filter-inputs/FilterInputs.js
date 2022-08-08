import "./FilterInputs.js";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Search from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const FilterInputs = (props) => {
  return (
    <div>
      <Stack direction="row" spacing={1}>
        <TextField
          id="outlined-basic"
          placeholder="Search by property ID or by title"
          sx={{
            "& legend": { display: "none" },
            "& fieldset": { top: 0 },
          }}
          variant="outlined"
          size="small"
          InputProps={{
            shrink: false,
            style: { fontSize: 12, height: 42, width: 240 },
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Chip
          icon={<FilterListIcon />}
          label="Filters"
          color="primary"
          variant="outlined"
          clickable="true"
          sx={{ height: 40, width: "auto", padding: 1 }}
        />
      </Stack>
    </div>
  );
};

export default FilterInputs;
