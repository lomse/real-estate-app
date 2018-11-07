import React from "react"
import PropTypes from "prop-types"
import ApartmentAmentityView from "./ApartmentAmentityView"

const ApartmentInfo = props => {
	const { image, price, title, size, owner, showOwner, amenities } = props

	const ownerEmail = showOwner ? (
		<div className="_17om8IEGFeu2W2TBOJ6xQs Lsdn2hC-tehVod76x4HzK text-truncate">
			<span>
				{owner.profile.role}: {owner.profile.firstName + " " + owner.profile.lastName} ( {owner.email} )
			</span>
		</div>
	) : null

	return (
		<div className="_3im4pDXrDfzNRT2AlvLfD6">
			<div className="listing-image">
				<div
					className="media-cover"
					style={{ backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundSize: "cover" }}
				/>
				<div className="_3Ts2_4uirKsrlm2Qb57Avw" />
				<div className="Ok22VaqPDW9x1uaR46cRO _3ORDzmMDnpzTXIIXjJsRw7">
					<span>{price} €</span>
					<span className="_17Hci6D5EewOTY42eIXhPy">
						<span className="_2GcdOjvYR400SpIsNOxzGK">/</span>
						<span>Monat</span>
					</span>
				</div>
			</div>
			<div className="listing-details-container">
				<div className="listing-details">
					<div className="_3-hUUH6d0vGND3vUzaybD0 Lsdn2hC-tehVod76x4HzK">
						<span className="text-truncate text-first-capitalize _1NES5HH5UNUjUVK5_-d-AG">{title}</span>
					</div>
					<div className="_17om8IEGFeu2W2TBOJ6xQs Lsdn2hC-tehVod76x4HzK text-truncate">
						<span>{size} m²</span>
					</div>
					<div className="f9YmKwMaSOdtYnk_Qz-iT">
						<div className="dVjtBg_ihJ63cZB8GwE0g text-truncate">
							<ApartmentAmentityView amenities={amenities} />
						</div>
					</div>

					{ownerEmail}
				</div>
			</div>
		</div>
	)
}

ApartmentInfo.propTypes = {
	image: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	size: PropTypes.number.isRequired,
	owner: PropTypes.object.isRequired,
	showOwner: PropTypes.bool.isRequired,
	amenities: PropTypes.array.isRequired
}

ApartmentInfo.defaultProps = {
	image: "",
	price: 0,
	title: "",
	size: 0,
	owner: {
		email: "",
		profile: {
			lastName: "",
			firstName: "",
			role: ""
		}
	},
	showOwner: false,
	amenities: []
}

export default ApartmentInfo
