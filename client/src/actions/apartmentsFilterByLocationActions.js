import { FILTER_APARTMENTS_BY_LOCATION } from "./types"
import gql from "graphql-tag"
import client from "./../ApolloClient"

export const filterApartmentsByLocation = locationId => dispatch => {
	const variables = locationId ? { locationId } : {}
	const FILTER_APARTMENTS_BY_LOCATION_QUERY = gql`
		query FILTER_APARTMENTS_BY_LOCATION_QUERY($locationId: String) {
			apartments(location: $locationId) {
				items {
					_id
					title
					size
					price
					images
					amenities
				}
			}
		}
	`

	client
		.query({
			query: FILTER_APARTMENTS_BY_LOCATION_QUERY,
			variables: variables
		})
		.then(apartments =>
			dispatch({
				type: FILTER_APARTMENTS_BY_LOCATION,
				payload: apartments.data
			})
		)
}
