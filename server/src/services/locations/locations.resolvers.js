
export default function (Apartments) {

  const locationsResolvers = {

    Locations: {
      apartments: (location) => {
        return Apartments.find({ query: { location: location._id } }).then(result => ({ total: result.length, items: result }));
      }
    }
  };

  return locationsResolvers;
}
