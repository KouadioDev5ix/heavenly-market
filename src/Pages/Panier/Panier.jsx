import { ChevronLeft, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import T_Short1 from "../../Assets/Images/T_Short1.jpeg";
import T_Short2 from "../../Assets/Images/T_Short2.jpeg";
import T_Short3 from "../../Assets/Images/T_Short3.jpg";
import { useCart } from "../../Components/Context/CardContext/CartContext";
import EmptyCart from "../EmptyCart/EmptyCart";

export default function Panier() {
  const [itemsInLocal, setItemInLocal] = useState([]);

  const storeArticlesSinceLocal = () => {
    const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
    setItemInLocal(storedItems);
  };

  /**
   * Retiter un artilcle dans le panier
   * @param {*} articleID
   */

  // const { removeArticlesFromCart } = useCart();

  const removeArticlesFromCart = (articleID) => {
    const updatedItems = itemsInLocal.filter((item) => item.id !== articleID);
    setItemInLocal(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const cover = () => {
    removeArticlesFromCart();
  };

  const total = itemsInLocal.reduce((total, qty) => total + qty.price, 0);

  useEffect(() => {
    storeArticlesSinceLocal();
  }, []);

  return (
    <div>
      {itemsInLocal.length === 0 && (
        <>
          <EmptyCart />
        </>
      )}
      <div className="flex items-start flex-col md:flex-row gap-6 ">
        {/* Section gauche : Liste des articles */}

        <div className={`${itemsInLocal.length === 0 ? "hidden" : "flex-1"}`}>
          <h1 className="text-xl font-bold my-4">
            Mon panier ({itemsInLocal.length})
          </h1>
          <div className="space-y-5">
            {itemsInLocal.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-gray-50 p-4 rounded shadow"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-sm"
                  />
                  <div
                    className="flex items-center gap-1 cursor-pointer bg-red-100 text-red-600 mt-2 text-xs px-2 py-1 rounded-md"
                    onClick={() => removeArticlesFromCart(item.id)}
                  >
                    <Trash className="w-3 h-3" />
                    <span>Rétirer</span>
                  </div>
                </div>

                <div className="flex-1">
                  <h2 className="text-sm font-extrabold text-gray-800  ">
                    {item.category.toUpperCase()}
                  </h2>
                  <h2 className="text-sm font-bold text-gray-500 ">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    [{item.rating.rate}] | Notes: {item.rating.count}
                  </p>
                  <p className="text-xs text-red-500">
                    ⚠ En cours de rupture de Stock
                  </p>
                </div>

                <div className="">
                  <div className="flex flex-col items-center">
                    <p className="text-lg font-bold text-orange-500">
                      {item?.price.toLocaleString()} FCFA
                    </p>
                    <p className="text-sm text-gray-400 line-through"></p>
                    <p className="text-xs text-green-600">{item.discount}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center bg-gray-600 text-white rounded">
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button className="w-8 h-8 flex items-center justify-center bg-orange-600 text-white rounded">
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section droite : Résumé du panier */}
        <div
          className={`${
            itemsInLocal.length === 0
              ? "hidden"
              : "w-full md:w-1/3 mt-14 sticky top-24"
          }`}
        >
          <div className="bg-gray-50 p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-4">RÉSUMÉ DU PANIER</h2>
            <div className="flex justify-between mb-2">
              <span>Sous-total</span>
              <span className="font-bold">{total.toLocaleString()} FCFA</span>
            </div>
            <p className="text-sm text-green-600 mb-4">Livraison 1000 FCFA</p>
            <Link to={"/finaliser-commande"}>
              <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
                Commander ({total.toLocaleString()} FCFA)
              </button>
            </Link>

            <p className="text-xs text-gray-500 mt-4">
              Les retours sont faciles <br />
              Retour gratuit sous 10 jours{" "}
              <span className="text-blue-600 cursor-pointer">Voir plus</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
