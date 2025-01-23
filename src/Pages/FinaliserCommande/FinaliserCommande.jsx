import { ChevronLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function FinaliserCommande() {
  return (
    <div>
      <Link to={"/panier"}>
        <div className="cursor-pointer my-5 flex items-center gap-2">
          <ChevronLeft className="bg-gray-950 text-white rounded-md" />
          <span className="text-gray-800 text-sm font-bold">
            Retour aux articles
          </span>
        </div>
      </Link>

      <div className="text-2xl font-bold text-orange-600 my-5">
        <h2>Finalisez votre commande</h2>
      </div>

      {/* FIRST BOXES */}
      <div>
        <h4 className="text-gray-600 text-lg mb-5">1.Informations client</h4>
      </div>
      <div className="flex items-start gap-5">
        <div className="w-full">
          {/* FIRST INPUT CARD */}
          <div className="bg-custumGrayForBoxes border border-custumGrayForBoxesBorder p-4 w-full h-80 rounded-lg"></div>
          {/* SECOND INPUT CARD */}
          <div>
            <h4 className="text-gray-600 text-lg mt-7 mb-3">
              2.Mode de livraison
            </h4>
          </div>
          <div className="bg-custumGrayForBoxes border border-custumGrayForBoxesBorder p-4 w-full h-96 rounded-lg"></div>
          {/* THIRD INPUT CARD */}
          <div>
            <h4 className="text-gray-600 text-lg mt-7 mb-3">
              3.Mode de payement
            </h4>
          </div>
          <div className="bg-custumGrayForBoxes border border-custumGrayForBoxesBorder p-4 w-full h-80 rounded-lg"></div>
        </div>

        {/* SAVE AND VALIDATE */}
        <div className="w-[30%] h-fit sticky top-24 rounded-xl border border-gray-200 shadow-sm">
          <div className=" bg-gray-100 rounded-tr-lg rounded-tl-lg p-2 ">
            <h1 className="text-md font-semibold text-gray-900">Presque OK!</h1>
          </div>
          <div className="p-3 space-y-7 bg-custumGrayForBoxes">
            <div className="flex items-center justify-between">
              <h1 className="text-gray-600 font-medium text-sm">
                Total produits (09)
              </h1>
              <h1 className="font-medium text-sm text-gray-700">
                73 000 FCFA{" "}
              </h1>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-gray-600 font-medium text-sm">
                Frais de service
              </h1>
              <h1 className="font-medium text-sm text-gray-700">1 000 FCFA </h1>
            </div>
            <div>
              <hr />
            </div>
            <div className="flex items-center justify-between ">
              <h1 className="text-gray-600 font-medium text-sm">
                Total à payer
              </h1>
              <h1 className="font-medium text-sm text-SoutraMarketCustumOrange">
                73 000 FCFA{" "}
              </h1>
            </div>

            <hr className="my-4" />
            <div className="flex items-center justify-center">
              <button className="bg-orange-600 text-sm text-white w-80 h-10 px-2 py-2 rounded-md font-semibold cursor-pointer">
                Enregistrer et valider
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
