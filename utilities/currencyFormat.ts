// Naira currency format
export const ngnCurrencyFormat = (price: number | undefined) => {
  return price ? new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(price) : null;
};