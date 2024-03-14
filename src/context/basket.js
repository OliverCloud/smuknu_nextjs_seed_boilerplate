
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const BasketContext = createContext();

export const BasketContextProvider = ({ children }) => {
  
  const [basket, setBasket] = useState([]);
  const [name, setName] = useState("Anders");

  useEffect( () => {

    const basket = localStorage.getItem('basket')
    if(basket) {
      setBasket(JSON.parse(basket))
    }

  }, [])

  const addToBasket = (id, amount = 1) => {
    let basket = localStorage.getItem("basket");
  
    if (basket) {
      basket = JSON.parse(basket);
  
      // Check if the product already exists in the basket
      const existingProductIndex = basket.findIndex(item => item.id === id);
  
      if (existingProductIndex !== -1) {
        // If the product exists, update its amount
        basket[existingProductIndex].amount += amount;
      } else {
        // If the product doesn't exist, add it to the basket
        basket.push({
          id: id,
          amount: amount
        });
      }
  
      localStorage.setItem("basket", JSON.stringify(basket));
      setBasket(basket);
    } else {
      // If basket is empty, create a new basket
      basket = [{ id: id, amount: amount }];
      localStorage.setItem("basket", JSON.stringify(basket));
      setBasket(basket);
    }
  };

  const removeFromBasket = (id) => {
    let basket = localStorage.getItem("basket");
  
    if (basket) {
      basket = JSON.parse(basket);
  
      // Check if the product already exists in the basket
      const existingProductIndex = basket.findIndex(item => item.id === id);
  
      if (existingProductIndex !== -1) {
        // If the product exists, update its amount
        basket[existingProductIndex].amount -= 1;
        
        // Check if the amount is now 0 or less and remove the item from the basket
        if (basket[existingProductIndex].amount <= 0) {
          basket.splice(existingProductIndex, 1);
        }
      } else {
        // If the product doesn't exist, add it to the basket
        basket.push({
          id: id,
          amount: amount
        });
      }
  
      localStorage.setItem("basket", JSON.stringify(basket));
      setBasket(basket);
    } else {
      // If basket is empty, create a new basket
      basket = [{ id: id, amount: amount }];
      localStorage.setItem("basket", JSON.stringify(basket));
      setBasket(basket);
    }
  };  

  const emptyBasket = () => {
    localStorage.removeItem("basket");
    setBasket([]);
  };

  const inTotal = () => {
    let total = 0;
    basket.forEach(item => {
      total += item.amount * item.price;
    });
    return total;
  }

  return (
    <BasketContext.Provider value={{ basket, addToBasket, name, setBasket, emptyBasket, inTotal, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);