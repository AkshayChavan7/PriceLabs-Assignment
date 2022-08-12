/* eslint-disable jsx-a11y/alt-text */
import { Checkbox, Stack } from "@mui/material";
import { Rate } from "antd";
import "./Listings.css";

const Listing = (props) => {
  console.log("props", props);
  let listings = props.listings;
  return (
    <div style={{ height: "69vh", overflowY: "scroll", overflowX: "hidden" }}>
      {listings.map((listing) => {
        if (
          props.searchText.length === 0 ||
          listing?.propertyId
            ?.toLowerCase()
            .includes(props.searchText.toLowerCase()) ||
          listing?.propertyMetadata?.headline
            .toLowerCase()
            ?.includes(props.searchText.toLowerCase())
        ) {
          console.log(
            "listing.bath",
            listing.bathrooms.full,
            "props.min",
            props.filtersObject.minBathrooms,
            "props.max",
            props.filtersObject.maxBathrooms
          );
          if (
            listing.bathrooms.full >= props.filtersObject.minBathrooms &&
            listing.bathrooms.full <= props.filtersObject.maxBathrooms
          ) {
            return (
              <div
                style={{ padding: 2 }}
                key={listing.propertyMetadata.headline}
                onMouseEnter={() => props.setHoveredListing(listing)}
                onMouseLeave={() => props.setHoveredListing({})}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  className={
                    listing.listingNumber === props.selectedListingNumber
                      ? "selected-listing"
                      : "listing"
                  }
                >
                  <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 17 } }} />
                  <img
                    src={listing.images[0].c6_uri}
                    className="listing-image"
                  />
                  <Stack spacing={0.001}>
                    <p
                      style={{ fontSize: 12, color: "#1ab71a", height: "7px" }}
                    >
                      76% match
                    </p>
                    <p className="listing-headline">
                      {listing.propertyMetadata.headline}
                    </p>
                    <p style={{ color: "#787878", fontSize: 10 }}>
                      {listing.bedrooms} br • {listing.bathrooms.full} ba •
                      Sleeps {listing.sleeps}
                    </p>
                    <div>
                      <Rate
                        disabled
                        allowHalf
                        defaultValue={listing.averageRating}
                        style={{ color: "black", fontSize: 10 }}
                      />
                      <span style={{ fontSize: 10 }}>
                        {" "}
                        ({listing.reviewCount})
                      </span>
                      <span className="remove-label">Remove</span>
                    </div>
                  </Stack>
                </Stack>
                <hr className="styled-hr" />
              </div>
            );
          }
        }
      })}
    </div>
  );
};

export default Listing;
