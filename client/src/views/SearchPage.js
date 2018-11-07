import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { fetchLocationsList } from "./../actions/locationsActions"
import { fetchApartmentsList } from "./../actions/apartmentsListActions"
import { filterApartmentsByLocation } from "./../actions/apartmentsFilterByLocationActions"
import ApartmentTileView from "./ApartmentTileView"
import Header from "./Header"

class SearchPage extends Component {
	constructor() {
		super()
		this.state = {
			locationId: "",
			selectedSize: "",
			selectedPrice: "",
			selectedAmenities: "",
			selectedServices: ""
		}
		this.handleFilterByLocation = this.handleFilterByLocation.bind(this)
	}
	componentWillMount() {
		this.props.fetchLocationsList()
		this.props.filterApartmentsByLocation()
	}


	handleFilterByLocation(evt) {
		const locationId = evt.target.value
		this.props.filterApartmentsByLocation(locationId)
	}

	render() {
		const { locationsList, apartmentsByLocation } = this.props

		if (!Object.keys(apartmentsByLocation).length) {
			return <div>Loading...</div>
		}

		return (
			<Fragment>
				<Header />
				<div className="container-list container-lg clearfix">
					<div className="col-4 float-left">
						<h4>Search</h4>
						<div>
							<span style={{ marginRight: 10 }}>Location</span>
							<select style={{ width: 200 }} onChange={evt => this.handleFilterByLocation(evt)}>
								<option value="">All</option>
								{locationsList.items.map((location, index) => <option value={location._id} key={index}> {location.title} </option>)}
							</select>
						</div>
					</div>
					<div className="col-8 float-left">
						<div className="view-apartment-list">
							{apartmentsByLocation.items.map((item, index) => <ApartmentTileView key={index} apartment={item} />)}
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	locationsList: state.locationsList.locations,
	apartmentsByLocation: state.apartmentsByLocation.apartments
})

SearchPage.propTypes = {
	fetchLocationsList: PropTypes.func.isRequired,
	filterApartmentsByLocation: PropTypes.func.isRequired,
	locationsList: PropTypes.object.isRequired,
	apartmentsByLocation: PropTypes.object.isRequired
}

SearchPage.defaultProps = {
	fetchLocationsList: () => { },
	filterApartmentsByLocation: () => { },
	locationsList: { items: [] },
	apartmentsByLocation: { items: [] }
}


export default connect(mapStateToProps, { fetchLocationsList, fetchApartmentsList, filterApartmentsByLocation })(SearchPage)
