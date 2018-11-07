import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { fetchApartmentsList } from "./../actions/apartmentsListActions"
import ApartmentTileView from "./ApartmentTileView"
import Header from './Header'

class HomeView extends Component {
	componentWillMount() {
		this.props.fetchApartmentsList()
	}

	render() {
		const { apartmentsList } = this.props

		if (!Object.keys(apartmentsList).length) {
			return <div>Loading...</div>
		}

		return (
			<Fragment>
				<Header />
				<div className="container-list container-lg clearfix">
					<div className="col-12 float-left">
						<div className="view-apartment-list">
							{apartmentsList.items.map((item, index) => (
								<ApartmentTileView key={index} apartment={item} />
							))}
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	apartmentsList: state.apartmentsList.apartments
})

HomeView.propTypes = {
	fetchApartmentsList: PropTypes.func.isRequired,
	apartmentsList: PropTypes.object.isRequired
}

HomeView.default = {
	fetchApartmentsList: () => { },
	apartmentsList: {
		items: []
	}
}

export default connect(mapStateToProps, { fetchApartmentsList })(HomeView)
