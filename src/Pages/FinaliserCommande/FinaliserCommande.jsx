import { ChevronLeft } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import {
  CartContext,
  useCart,
} from "../../Components/Context/CardContext/CartContext";

export default function FinaliserCommande() {
  const [itemsInLocal, setItemInLocal] = useState([]);
  const [inputsValue, setInputsValue] = useState({
    NOM: "",
    PRENOMS: "",
    NUMERO: "",
    SECOND_NUMERO: "",
    EMAIL: "",
    COMMUNE_VILLE: "",
    QUARITER: "",
    ADDRESSE_LIVRAISON: "",
  });
  const [isFormSumitted, setIsFormSumitted] = useState(false);
  let { addItemsToCard, articlesDuPanier } = useCart();

  const removeItem = setItemInLocal;

  const navigate = useNavigate();

  const updateCart = () => {
    articlesDuPanier = [];
  };

  /**
   * handleInputChange()
   * @param {*} e
   */

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputsValue({ ...inputsValue, [name]: value });
  };

  /**
   *
   */

  const clearInputValuesAfterSubmitedForm = () => {
    setInputsValue({
      NOM: "",
      PRENOMS: "",
      NUMERO: "",
      SECOND_NUMERO: "",
      EMAIL: "",
      COMMUNE_VILLE: "",
      QUARITER: "",
      ADDRESSE_LIVRAISON: "",
    });
  };
  /**
   *
   * @param {*} e
   */

  const handeSubmitForm = (e) => {
    e.preventDefault();
    if (inputsValue.NOM.trim() === "" || inputsValue.PRENOMS.trim() === "") {
      toast.error("Veuillez au moins renseigner le nom et le prenoms");
      setIsFormSumitted(false);
    } else {
      setIsFormSumitted(true);
      setTimeout(() => {
        toast.success("Votre commande a été enregistrer avec succes");
        clearInputValuesAfterSubmitedForm();
        navigate("/commande-enregistree");

        setIsFormSumitted(false);
      }, 3000);

      localStorage.removeItem("cart");
    }
  };

  /**
   * storeArticlesSinceLocal()
   */
  const storeArticlesSinceLocal = () => {
    const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
    setItemInLocal(storedItems);
  };

  const total = itemsInLocal.reduce((total, qty) => total + qty.price, 0);

  const totalToSold = itemsInLocal.reduce(
    (total, qty) => total + qty.price,
    1000
  );
  const numberTotalOfItemOrdered = itemsInLocal.reduce(
    (total, item) => total + item.quantity,
    0
  );
  useEffect(() => {
    storeArticlesSinceLocal();
  }, []);

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
        <h4 className="text-gray-600 text-lg mb-2">1.Informations client</h4>
      </div>
      <div className="flex items-start flex-col md:flex-row gap-5">
        <div className="flex-1">
          {/* FIRST INPUT CARD */}
          <div className=" border bg-gray-50 p-2 w-full h-fit rounded-lg">
            {/* LAST NAME AND FIRST NAME */}
            <div className="flex items-start gap-4 ">
              <label className="form-control w-full max-w-full">
                <div className="">
                  <span className="label-text text-gray-700 font-semibold">
                    Nom
                  </span>
                </div>
                <input
                  onChange={(event) => {
                    setInputsValue({ ...inputsValue, NOM: event.target.value });
                  }}
                  value={inputsValue.NOM}
                  type="text"
                  placeholder="Ex: Kouadio "
                  className="input input-bordered h-10 w-full max-w-full"
                />
              </label>

              <label className="form-control w-full max-w-full">
                <div className="">
                  <span className="label-text text-gray-700 font-semibold">
                    Prenoms
                  </span>
                </div>
                <input
                  onChange={(event) => {
                    setInputsValue({
                      ...inputsValue,
                      PRENOMS: event.target.value,
                    });
                  }}
                  value={inputsValue.PRENOMS}
                  type="text"
                  placeholder="Ex: Kouadio Alfred "
                  className="input h-10 input-bordered w-full max-w-full"
                />
              </label>
            </div>
            {/* CONTACT SECTIONS */}
            <div className="flex items-start gap-4 my-3 ">
              <label className="form-control w-full max-w-full">
                <div className="">
                  <span className="label-text text-gray-700 font-semibold">
                    Numero
                  </span>
                </div>
                <input
                  onChange={(event) => {
                    setInputsValue({
                      ...inputsValue,
                      NUMERO: event.target.value,
                    });
                  }}
                  value={inputsValue.NUMERO}
                  type="text"
                  placeholder="Ex: 07 00 00 00 07"
                  className="input h-10 input-bordered w-full max-w-full"
                />
              </label>

              <label className="form-control w-full max-w-full">
                <div className="">
                  <span className="label-text text-gray-700 font-semibold">
                    Second numéro
                  </span>
                </div>
                <input
                  value={inputsValue.SECOND_NUMERO}
                  onChange={(event) => {
                    setInputsValue({
                      ...inputsValue,
                      SECOND_NUMERO: event.target.value,
                    });
                  }}
                  type="text"
                  placeholder="Ex: 05 85 13 22 12 "
                  className="input h-10 input-bordered w-full max-w-full"
                />
              </label>

              <label className="form-control w-full max-w-full">
                <div className="">
                  <span className="label-text text-gray-700 font-semibold">
                    Email
                  </span>
                </div>
                <input
                  value={inputsValue.EMAIL}
                  onChange={(event) => {
                    setInputsValue({
                      ...inputsValue,
                      EMAIL: event.target.value,
                    });
                  }}
                  type="text"
                  placeholder="Ex: kouadio@gmail.com"
                  className="input h-10 input-bordered w-full max-w-full"
                />
              </label>
            </div>

            {/* COMMUNE QUARTIER */}
            <div className="flex items-start gap-4 ">
              <label className="form-control w-full max-w-full">
                <div className="">
                  <span className="label-text text-gray-700 font-semibold">
                    Commune/Ville
                  </span>
                </div>
                <input
                  value={inputsValue.COMMUNE_VILLE}
                  onChange={(event) => {
                    setInputsValue({
                      ...inputsValue,
                      COMMUNE_VILLE: event.target.value,
                    });
                  }}
                  type="text"
                  placeholder="Ex: Riviera Palmeraie"
                  className="input h-10 input-bordered w-full max-w-full"
                />
              </label>

              <label className="form-control w-full max-w-full">
                <div className="">
                  <span className="label-text text-gray-700 font-semibold">
                    Quartier
                  </span>
                </div>
                <input
                  value={inputsValue.QUARITER}
                  onChange={(event) => {
                    setInputsValue({
                      ...inputsValue,
                      QUARITER: event.target.value,
                    });
                  }}
                  type="text"
                  placeholder="Ex: Guiro"
                  className="input h-10 input-bordered w-full max-w-full"
                />
              </label>
            </div>

            {/* ADDRESSE DE LIVRAISON */}
            <div className="flex items-center gap-4 my-3 ">
              <label className="form-control w-full max-w-full">
                <div className="">
                  <span className="label-text text-gray-700 font-semibold">
                    Addresse de livraison
                  </span>
                </div>
                <input
                  value={inputsValue.ADDRESSE_LIVRAISON}
                  onChange={(event) => {
                    setInputsValue({
                      ...inputsValue,
                      ADDRESSE_LIVRAISON: event.target.value,
                    });
                  }}
                  type="text"
                  placeholder="Ex: Riviera Palmeraie ¨Pharmarcie Eunika"
                  className="input h-10 input-bordered w-full max-w-full"
                />
              </label>
            </div>
          </div>
          {/* SECOND INPUT CARD */}
          <div>
            <h4 className="text-gray-600 text-lg mt-7 mb-1">
              2.Mode de livraison
            </h4>
          </div>
          <div className="bg-gray-50 border p-2 w-full h-fit rounded-lg">
            {/* COMMUNE QUARTIER */}

            <div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-white rounded-md border"></span>
                <h1 className="text-xl font-bold text-black">
                  LIVRAISON A DOMICILE
                </h1>
              </div>
              <p className="text-xs font-normal text-gray-600 my-2">
                Vos produits seront livrés à la date prévu et à l'addresse que
                vous aller indiquer <br /> dans les champs suivants :
              </p>
            </div>
            <div className="flex items-center gap-4 ">
              <label className="form-control w-full max-w-full">
                <div className="mb-2">
                  <span className="label-text text-gray-700  font-semibold">
                    Commune/Ville
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Ex: Riviera Palmeraie"
                  className="input h-10 input-bordered w-full max-w-full"
                />
              </label>

              <label className="form-control w-full max-w-full">
                <div className="mb-2">
                  <span className="label-text text-gray-700 font-semibold">
                    Quartier
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Ex: Guiro"
                  className="input h-10 input-bordered w-full max-w-full"
                />
              </label>
            </div>

            {/* ADDRESSE DE LIVRAISON */}
            <div className="flex items-center gap-4 my-3 ">
              <label className="form-control w-full max-w-full">
                <div className="mb-2">
                  <span className="label-text text-gray-700 font-semibold">
                    Addresse de livraison
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Ex: Riviera Palmeraie ¨Pharmarcie Eunika"
                  className="input h-10  input-bordered w-full max-w-full"
                />
              </label>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-green-600 rounded-md border"></span>
                <h1 className="text-xl font-bold text-black">
                  RECUPERATION SUR SITE
                </h1>
              </div>
              <p className="text-xs font-normal text-gray-600 my-2">
                Vous devez aaller recuper votre article sur le site que vouds
                aurezz choisi.
              </p>

              <label className="form-control w-full max-w-full my-3">
                <div className="mb-2">
                  <span className="label-text text-gray-700 font-semibold">
                    Lieu de récuperation
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Ex: Riviera Palmeraie"
                  className="input h-10  input-bordered w-full max-w-full"
                />
              </label>
            </div>
          </div>
          {/* THIRD INPUT CARD */}
          <div>
            <h4 className="text-gray-600 text-lg mt-7 mb-1">
              3.Mode de payement
            </h4>
          </div>
          <div className="bg-gray-50 border p-4 w-full h-80 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 bg-green-600 rounded-md border text-white">
                V
              </span>
              <h1 className="text-xl font-bold text-black">PAYER UNE PARTIE</h1>
            </div>

            <div>
              <label className="form-control w-full max-w-full">
                <div className="label mb-2">
                  <span className="label-text  text-gray-700 font-semibold">
                    Moyen de paiement
                  </span>
                </div>
                <select className="select h-10  select-bordered">
                  <option disabled selected>
                    Selectionner un moyen de paiement
                  </option>
                  <option>MTN Money</option>
                  <option>Orange Money</option>
                  <option>Moov Money</option>
                  <option>Wave</option>
                </select>
              </label>
            </div>

            <label className="form-control w-full max-w-full my-3">
              <div className="mb-2">
                <span className="label-text text-gray-700  font-semibold">
                  Numero de payement
                </span>
              </div>
              <input
                type="text"
                placeholder="Ex: 07 55 55 55 07"
                className="input h-10 input-bordered w-full max-w-full"
              />
            </label>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="scales" name="scales" />
              <label
                for="scales"
                className=" leading-tight  cursor-pointer text-xs font-bold "
              >
                PAYER LA TOTALITE
              </label>
            </div>
          </div>
        </div>

        {/* SAVE AND VALIDATE */}
        <div className="w-full md:w-1/3 h-fit sticky top-24 rounded-xl border border-gray-200 shadow-sm">
          <div className=" bg-gray-100 rounded-tr-lg rounded-tl-lg p-2">
            <h1 className="text-md font-semibold text-gray-900">Presque OK!</h1>
          </div>
          <div className="p-3 space-y-4 bg-custumGrayForBoxes">
            <div className="flex items-center justify-between">
              <h1 className="text-gray-600 font-medium text-sm">
                Total produits ({numberTotalOfItemOrdered})
              </h1>
              <h1 className="font-medium text-sm text-orange-500">
                {total} FCFA{" "}
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
                {totalToSold} FCFA{" "}
              </h1>
            </div>

            <hr className="my-4" />
            <div
              className="flex items-center justify-center"
              onClick={handeSubmitForm}
            >
              <div className="w-full">
                {isFormSumitted ? (
                  <div className="bg-orange-600 w-full rounded-md  h-10 px-2 py-2 flex items-center justify-center ">
                    <button
                      className="loading loading-spinner loading-md text-white "
                      disabled={isFormSumitted ? true : false}
                    ></button>
                  </div>
                ) : (
                  <button className="bg-orange-600 text-sm text-white w-full h-10 px-2 py-2 rounded-md font-semibold cursor-pointer">
                    Enregistrer et valider
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
