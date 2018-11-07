import React, { Component, Fragment } from "react"
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import Header from './Header'
import { fetchApartmentsByLocations } from "./../actions/apartmentsGroupedByLocationActions"
import Location from "./Location"

class Locations extends Component {
	componentWillMount() {
		this.props.fetchApartmentsByLocations()
	}

	render() {
		const { locationsList } = this.props

		if (!Object.keys(locationsList).length) {
			return <div>Loading...</div>
		}

		return (
			<Fragment>
				<Header />
				<div className="container-list container-lg clearfix">
					<div className="col-12 float-left">
						{locationsList.items.map((location, index) => (
							<div key={index}>
								<h4>City: {location.title}</h4>
								<div className="view-apartment-list_">
									<Location {...location} />
								</div>
							</div>
						))}
					</div>
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	locationsList: state.apartmentsGrouped.locations
})

Locations.propTypes = {
	fetchApartmentsByLocations: PropTypes.func.isRequired,
	locationsList: PropTypes.object.isRequired
}

Locations.defaultProps = {
	fetchApartmentsByLocations: () => { },
	locationsList: {
		items: []
	}
}

export default connect(mapStateToProps, { fetchApartmentsByLocations })(Locations)
