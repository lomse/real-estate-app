import { FETCH_APARTMENTS_GROUPED_BY_LOCATION } from "./types"
import gql from "graphql-tag"
import client from "./../ApolloClient"

export const fetchApartmentsByLocations = () => dispatch => {
  client
    .query({
      query: gql`
      {
        locations {
          items {
            _id
            title
            apartments {
              items {
                _id
                title
                size
                price
                images
                amenities
                details {
                  rooms
                  bedrooms
                  floor
                  bathrooms
                }
                owner {
                  _id
                }
              }
            }
          }
        }
      }`
    })
    .then(apartments => {
      dispatch({
        type: FETCH_APARTMENTS_GROUPED_BY_LOCATION,
        payload: apartments.data
      })
    })
}
