import { useEffect, useState } from "react";
//import { format } from "d3-format";

const API_KEY = "230967b967bfa5f86ca99d6c";
const URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/GBP/NGN`;

const ngnCurrencyFormat = (price: number | undefined) => {
  return price ? new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(price) : null;
};

export const useExchangeRateGBPToNGN = (price: number) => {
  const [exchangePrice, setExchangePrice] = useState<number>(0);
  const exchangeRate = 0; // exchange rate for GBP to NGN
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const result = await fetch(`${URL}/${price}`);
        if (result.ok) {
          const data = await result.json();
          const exchangeRate = data.conversion_rate;
          const nairaPrice = price * exchangeRate;
          setExchangePrice(nairaPrice);
        } else {
          const nairaPrice = price * exchangeRate;
          setExchangePrice(nairaPrice);
          throw new Error();
        }
      } catch (e) {
        console.log(
          `⚠ Error: the server responded with a status of 429 ()=> free account has reached the number of requests allowed by free plan and price exchange is based on hard number`
        );
      }
    };
    if (price > 0) {
      // fetchExchangeRate();
      const nairaPrice = price * exchangeRate;
      setExchangePrice(nairaPrice);
    }
  }, [price]);

  return ngnCurrencyFormat(exchangePrice);
};