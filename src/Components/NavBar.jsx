import { Heart, Search, ShoppingBag, UserRound } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import Logo from "../Assets/Images/ce5699233cbc0f142250b520d967dff7 (1).png";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CardContext/CartContext";

export default function NavBar() {
  const { articlesDuPanier } = useContext(CartContext);

  const [itemsInLocal, setItemInLocal] = useState([]);

  const storeArticlesSinceLocal = () => {
    const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
    setItemInLocal(storedItems);
  };

  useEffect(() => {
    storeArticlesSinceLocal();
  }, []);

  const articlesTotaleDansLePanier = articlesDuPanier.reduce(
    (total, qty) => total + qty.quantity,
    0
  );
  return (
    <div className="w-full z-50 h-20 bg-gray-100 drop-shadow-md px-4 sticky top-0">
      <div className="h-20 flex items-center justify-between gap-3">
        <nav className="flex items-center gap-3">
          <Link to={"/"}>
            <img src={Logo} alt="" className="w-12 h-12 rounded-full" />
          </Link>
          <p className="cursor-pointer text-gray-950 text-sm">A propos</p>
          <p className="cursor-pointer text-gray-950 text-sm">
            Devenir patenaire
          </p>
        </nav>

        <div>
          <Link to={"/"}>
            <h3 className="font-bold text-2xl text-gray-900">HEAVENLY</h3>
          </Link>
        </div>

        <div className="flex items-center gap-3 text-sm">
          {/* <p className="cursor-pointer flex items-center gap-1">
            <Search className="w-4 h-4" />
            <span className="text-sm text-black">Rechercher</span>
          </p> */}
          <p className="cursor-pointer flex items-center gap-1">
            <UserRound className="w-4 h-4" />
            <span className="text-sm text-black">Compte</span>
          </p>

          <Link to={"/favoris"}>
            <div className="cursor-pointer flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <div className="relative">
                <span className="text-sm text-black"> Favoris</span>
                <button className="text-xs text-white bg-orange-600 w-4 h-4 absolute top-[-11px] right-[-6px] rounded-full">
                  {" "}
                  0
                </button>
              </div>
            </div>
          </Link>

          <Link to={"/panier"}>
            <div className="cursor-pointer flex items-center gap-1 ">
              <ShoppingBag className="w-4 h-4" />

              <div className="relative">
                <span className="text-sm text-black"> Panier</span>
                <button className="text-xs text-white bg-orange-600 w-4 h-4 absolute top-[-11px] right-[-6px] rounded-full">
                  {" "}
                  {articlesTotaleDansLePanier ? articlesTotaleDansLePanier : 0}
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
