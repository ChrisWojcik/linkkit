const roundWithPrecision = (num, precision = 0) => {
  const multiplier = Math.pow(10, precision);
  return Math.round(num * multiplier) / multiplier;
};

export default roundWithPrecision;
