/* eslint-disable jsx-a11y/alt-text */
import { Checkbox, Stack } from "@mui/material";
import { Rate } from "antd";
import "./Listings.css";

const Listing = (props) => {
  let listings = props.listings;
  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      {listings.map((listing) => {
        return (
          <div style={{ padding: 2 }} id={listing.propertyMetadata.headline}>
            <Stack direction="row" spacing={1}>
              <Checkbox size="small" />
              <img src={listing.images[0].c6_uri} className="listing-image" />
              <Stack spacing={0.001}>
                <p style={{ fontSize: 12, color: "#1ab71a", height: "7px" }}>
                  76% match
                </p>
                <p className="listing-headline">
                  {listing.propertyMetadata.headline}
                </p>
                <p style={{ color: "#787878", fontSize: 10 }}>
                  {listing.bedrooms} br • {listing.bathrooms.full} ba • Sleeps{" "}
                  {listing.sleeps}
                </p>
                <div>
                  <Rate
                    disabled
                    allowHalf
                    defaultValue={listing.averageRating}
                    style={{ color: "black", fontSize: 10 }}
                  />
                  <span style={{ fontSize: 10 }}> ({listing.reviewCount})</span>
                  <span className="remove-label">Remove</span>
                </div>
              </Stack>
            </Stack>
            <hr className="styled-hr" />
          </div>
        );
      })}
    </div>
  );
};

export default Listing;
