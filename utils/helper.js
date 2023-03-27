export const getDiscountedPricePercentage = (originalPrice, dicountedPrice) => {
  const discount = originalPrice - dicountedPrice;

  const discountedPercentage = (discount / originalPrice) * 100;

  return discountedPercentage.toFixed(2);
};
