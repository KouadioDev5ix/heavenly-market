import React from "react";
import ShoppingCart from "../../Assets/Images/shopping-cart-svgrepo-com (1).svg";
import { NavLink } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-8 text-center max-w-lg w-full">
        <div className="flex justify-center mb-6">
          <img src={ShoppingCart} alt="Panier vide" className="w-24 h-24" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Oups ,votre panier est vide!
        </h2>
        <p className="text-gray-600 mb-6">
          Parcourez nos differentss articles et découvrez nos meilleures offres!
        </p>

        <NavLink to={"/"}>
          {" "}
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded shadow">
            Commencez vos achats
          </button>
        </NavLink>
      </div>
    </div>
  );
}
