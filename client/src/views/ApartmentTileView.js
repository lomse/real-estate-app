import React from 'react';
import PropsTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ApartmentInfo from './ApartmentInfo'
import { apartmentImagesPath } from '../constants'

const ApartmentTileView = props => {
  const { apartment } = props;
  const url = `apartments/${apartment._id}`;
  const image = `${apartmentImagesPath}${apartment.images[0]}`

  return (
    <div className="view-apartment-item">
      <div className="view-apartment-item-content">
        <Link to={url}>
          <ApartmentInfo image={image} {... apartment}/>
        </Link>
      </div>
    </div>
  )
}

ApartmentTileView.propTypes = {
  apartment: PropsTypes.object.isRequired
}

ApartmentTileView.defaultProps = {
  apartment: {
    _id: "",
    images: []
  }
}

export default ApartmentTileView
