import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

const ApartmentAmentityView = props => {

  let { amenities, limit = 3 } = props;
  let apartmentAmenities = [];
  
  amenities.forEach((item, index) => {
    if (index < limit) {
      apartmentAmenities.push(<span key={index} className="_1h9l4w0vvX6d56ZnJ3NLod"><i></i><span>{item}</span></span>);
    }
  });

  return <Fragment>{apartmentAmenities}</Fragment>
}

ApartmentAmentityView.propTypes = {
  amenities: PropTypes.array.isRequired,
  limit: PropTypes.number.isRequired
}

ApartmentAmentityView.defaultProps = {
  amenities: [],
  limit: 3
}

export default ApartmentAmentityView