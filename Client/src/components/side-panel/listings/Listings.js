/* eslint-disable jsx-a11y/alt-text */
import { Checkbox, Stack } from "@mui/material";
import { Rate } from "antd";
import "./Listings.css";

const Listing = (props) => {
  // console.log("listings props ==>", props);
  let listings = props.listings;
  let filteredListings = [];

  const removeListing = (key) => {
    listings.splice(key, 1);
    localStorage.setItem("previous_listings", JSON.stringify(listings));
    // console.log("Updated listings ", newListings);
  };

  return (
    <div style={{ height: "69vh", overflowY: "scroll", overflowX: "hidden" }}>
      {listings.map((listing, key) => {
        if (
          props.searchText.length === 0 ||
          listing?.propertyId
            ?.toLowerCase()
            .includes(props.searchText.toLowerCase()) ||
          listing?.propertyMetadata?.headline
            .toLowerCase()
            ?.includes(props.searchText.toLowerCase())
        ) {
          if (
            listing.averageRating >= props.filtersObject.minStars &&
            listing.bathrooms.full >= props.filtersObject.minBathrooms &&
            listing.bathrooms.full <= props.filtersObject.maxBathrooms &&
            listing.bedrooms >= props.filtersObject.minBedrooms &&
            listing.bedrooms <= props.filtersObject.maxBedrooms &&
            listing.sleeps >= props.filtersObject.minSleeps &&
            listing.sleeps <= props.filtersObject.maxSleeps
          ) {
            filteredListings.push(listing);
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
                      <span
                        className="remove-label"
                        onClick={() => {
                          console.log("Clicked on " + key + "th listing");
                          removeListing(key);
                        }}
                      >
                        Remove
                      </span>
                    </div>
                  </Stack>
                </Stack>
                <hr className="styled-hr" />
              </div>
            );
          }
        }
      })}
      {filteredListings.length !== props.filteredListings.length
        ? props.setFilteredListings([...filteredListings])
        : null}
    </div>
  );
};

export default Listing;
