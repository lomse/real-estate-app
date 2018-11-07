import React, { Fragment } from "react"
import PropTypes from "prop-types"
import ApartmentTileView from "./ApartmentTileView"

const Location = props => {
	const { apartments } = props
	return (
		<Fragment>
			{apartments.items.map((item, index) => (
				<ApartmentTileView key={index} apartment={item} />
			))}
		</Fragment>
	)
}

Location.propTypes = {
	apartments: PropTypes.object.isRequired
}

Location.defaultProps = {
	apartments: {
		items: []
	}
}
export default Location
