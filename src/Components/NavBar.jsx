import {
  Box,
  CircleHelp,
  Handshake,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
} from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import Logo from "../Assets/Images/ce5699233cbc0f142250b520d967dff7 (1).png";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CardContext/CartContext";
import { Drawer } from "@mui/material";

export default function NavBar() {
  const { articlesDuPanier } = useContext(CartContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

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
      {/* DRAWER SECTIONS */}
      <Drawer
        open={openDrawer}
        anchor={"right"}
        onClose={() => setOpenDrawer(false)}
      >
        <div className="w-[390px] h-full p-2">
          <div className="flex items-center justify-between ">
            <img src={Logo} alt="" className="w-16 rounded-full" />
            <button className="text-4xl" onClick={() => setOpenDrawer(false)}>
              <X
                strokeWidth={1.75}
                style={{ fontSize: "40px" }}
                className="w-7 h-7"
              />
            </button>
          </div>

          {/* MENU LIST ITEMS */}
          <div className=" pt-7">
            <hr />
            <button className="py-2 h-14 flex items-center justify-center  text-black text-lg w-full font-semibold gap-x-1 ">
              <CircleHelp />A propos
            </button>
            <hr />
            <button className="py-2 h-14 flex items-center justify-center  text-black text-lg w-full font-semibold gap-x-1 ">
              <Handshake />
              Devenir partenaire
            </button>
          </div>
        </div>
      </Drawer>

      <div className="h-20 flex items-center justify-between gap-3">
        <nav className="flex items-center gap-3">
          <Link to={"/"}>
            <img src={Logo} alt="" className="w-12 h-12 rounded-full" />
          </Link>
          <p className=" hidden md:block cursor-pointer text-gray-950 text-sm">
            A propos
          </p>
          <p className=" hidden md:block cursor-pointer text-gray-950 text-sm">
            Devenir patenaire
          </p>
        </nav>

        <div>
          <Link to={"/"}>
            <h3 className="font-bold text-2xl text-gray-900">HEAVENLY</h3>
          </Link>
        </div>

        <div className="flex items-center md:gap-2 gap-4 text-sm">
          <Link className="">
            <div className="cursor-pointer flex items-center gap-1">
              <UserRound className="w-4 h-4" />
              <span className="hidden md:block text-sm text-black">Compte</span>
            </div>
          </Link>

          <Link to={"/favoris"} className="">
            <div className="cursor-pointer flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <div className="relative">
                <span className=" hidden md:block text-sm text-black">
                  {" "}
                  Favoris
                </span>
                <button className="text-xs text-white bg-orange-600 w-4 h-4 absolute top-[-11px] right-[-6px] rounded-full">
                  {" "}
                  0
                </button>
              </div>
            </div>
          </Link>

          <Link to={"/panier"} className="">
            <div className="cursor-pointer flex items-center gap-1 ">
              <ShoppingBag className="w-4 h-4" />

              <div className="relative">
                <span className="hidden md:block text-sm text-black">
                  {" "}
                  Panier
                </span>
                <button className="text-xs text-white bg-orange-600 w-4 h-4 absolute top-[-11px] right-[-6px] rounded-full">
                  {" "}
                  {articlesTotaleDansLePanier ? articlesTotaleDansLePanier : 0}
                </button>
              </div>
            </div>
          </Link>

          <div className="block md:hidden" onClick={() => handleOpenDrawer()}>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}
