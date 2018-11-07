import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import { fetchApartment } from "../actions/apartmentActions"
import { connect } from "react-redux"
import ApartmentInfo from "./ApartmentInfo"
import { apartmentImagesPath } from "../constants"
import Header from "./Header"

export class ApartmentView extends Component {
  componentWillMount() {
    const {
      match: { params }
    } = this.props
    const { apartmentId } = params
    this.props.fetchApartment(apartmentId)
  }

  render() {
    const { apartment } = this.props

    if (!Object.keys(apartment).length) {
      return <div>Loading...</div>
    }

    const image = `${apartmentImagesPath}${apartment.images[0]}`
    const showOwner = true

    return (
      <Fragment>
        <Header />
        <div className="container-fl clearfix">
          <div className="col-12">
            <div className="view-apartment">
              <div className="view-apartment-item">
                <div className="view-apartment-item-content">
                  <ApartmentInfo image={image} showOwner={showOwner} {...apartment} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  apartment: state.apartmentItem.apartment
})

ApartmentView.propTypes = {
  match: PropTypes.object.isRequired,
  apartment: PropTypes.object.isRequired,
  fetchApartment: PropTypes.func.isRequired
}

ApartmentView.defaultProps = {
  match: { params: { apartmentId: "" } },
  apartment: { images: [] },
  fetchApartment: () => { }
}

export default connect(
  mapStateToProps,
  { fetchApartment }
)(ApartmentView)
