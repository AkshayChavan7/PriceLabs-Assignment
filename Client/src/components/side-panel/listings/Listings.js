/* eslint-disable jsx-a11y/alt-text */
import { Checkbox, Stack } from "@mui/material";
import { Rate } from "antd";
import "antd/dist/antd.css";
import "./Listings.css";

const Listing = (props) => {
  return (
    <div style={{ padding: 2 }}>
      <Stack direction="row" spacing={1}>
        <Checkbox size="small" />
        <img
          src={require("../../../assets/sampleimage.jpg")}
          className="listing-image"
        />
        <Stack spacing={0.001}>
          <p style={{ fontSize: 12, color: "#1ab71a", height: "7px" }}>
            76% match
          </p>
          <p className="listing-headline">
            Spacious Bronzeville Gem Garden lvl Near Downtown, University of
            Chicago, Museum
          </p>
          <p style={{ color: "#787878", fontSize: 10 }}>
            2 br • 1 ba • Sleeps 2
          </p>
          <div>
            <Rate
              disabled
              allowHalf
              defaultValue={4.5}
              style={{ color: "black", fontSize: 10 }}
            />
            <span style={{ fontSize: 10 }}> (27)</span>
            <span className="remove-label">Remove</span>
          </div>
        </Stack>
      </Stack>
      <hr className="styled-hr" />

      <Stack direction="row" spacing={1}>
        <Checkbox size="small" />
        <img
          src={require("../../../assets/sampleimage.jpg")}
          className="listing-image"
        />
        <Stack spacing={0.001}>
          <p style={{ fontSize: 12, color: "#1ab71a", height: "7px" }}>
            76% match
          </p>
          <p className="listing-headline">
            Spacious Bronzeville Gem Garden lvl Near Downtown, University of
            Chicago, Museum
          </p>
          <p style={{ color: "#787878", fontSize: 10 }}>
            2 br • 1 ba • Sleeps 2
          </p>
          <div>
            <Rate
              disabled
              allowHalf
              defaultValue={4.5}
              style={{ color: "black", fontSize: 10 }}
            />
            <span style={{ fontSize: 10 }}> (27)</span>
            <span className="remove-label">Remove</span>
          </div>
        </Stack>
      </Stack>
      <hr className="styled-hr" />
    </div>
  );
};

export default Listing;
