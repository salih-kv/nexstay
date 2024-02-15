export const createHotelSchema = {
  name: {
    notEmpty: {
      errorMessage: "Name is required",
    },
  },
  city: {
    notEmpty: {
      errorMessage: "City is required",
    },
  },
  country: {
    notEmpty: {
      errorMessage: "Country is required",
    },
  },
  description: {
    notEmpty: {
      errorMessage: "Description is required",
    },
  },
  type: {
    notEmpty: {
      errorMessage: "Hotel type is required",
    },
  },
  pricePerNight: {
    notEmpty: {
      errorMessage: "Price per night is required",
    },
    isNumeric: {
      errorMessage: "Price per night must be a number",
    },
  },
  facilities: {
    notEmpty: {
      errorMessage: "Facilities are required",
    },
    isArray: {
      errorMessage: "Facilities must be an array",
    },
  },
};
