const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

export const pricesOptions = prices.map(price => ({
  value: price,
  label: `${price}$`,
}));
