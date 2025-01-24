import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [articlesDuPanier, setArticlesDuPanier] = useState(() => {
    /**
     * Charger le panier depuis localStorage au démarrage
     */
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  /**
   *Ajouter une article dans le panier
   * @param {object} product
   * @param {number} quantity
   *
   *  @returns void
   */
  const addItemsToCard = (product, quantity = 1) => {
    const existingItem = articlesDuPanier.find(
      (item) => item.id === product.id
    );
    let newCart;

    if (existingItem) {
      /**
       * Si le produit est déjà dans le panier, j'augmentte la quantiité
       */
      newCart = articlesDuPanier.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      /**
       * Sinon,je l
       * 4 ajoute au panier
       */
      newCart = [...articlesDuPanier, { ...product, quantity }];
    }
    setArticlesDuPanier(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  /**
   * Retirer un article du panier
   * @param {@String} size
   */

  const removeArticlesFromCart = (articleID) => {
    const updatedItems = articlesDuPanier.filter(
      (item) => item.id !== articleID
    );
    setArticlesDuPanier(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };
  return (
    <CartContext.Provider
      value={{
        articlesDuPanier,
        addItemsToCard,
        removeArticlesFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
