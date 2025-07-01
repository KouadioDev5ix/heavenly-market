import React from "react";
import successImg from "../../Assets/Images/images.png";
import { NavLink } from "react-router-dom";

export default function CommandeSave() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center w-full">
        <div>
          <div className="text-base font-bold text-green-600">
            Votre commande a bien été enregistrer avec succes
          </div>
          <img
            src={successImg}
            alt=""
            className="w-10 h-10 rounded-full my-10 inline-block "
          />

          <p className="font-semibold mx-auto text-gray-600 w-1/2">
            A présent ,vous pouvez effectuer de nouvelles commandes ou suivre
            vos commandes précédentes
          </p>
          <NavLink to={"/"}>
            <p className="text-orange-500 font-semibold underline my-2 cursor-pointer">
              Effectuer de nouveaux achats
            </p>
          </NavLink>
          <NavLink to={"/panier"}>
            <span className="font-semibold underline cursor-pointer">
              Suivre vos commandes
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
