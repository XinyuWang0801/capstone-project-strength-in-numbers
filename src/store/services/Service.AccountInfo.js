// Trims description down to 500 characters if it is greater than 500, else it just returns the original
export const trimDescription = (description) => {
  return description.length > 500 ? `${description.substring(0, 500)}.....` : description;
};
