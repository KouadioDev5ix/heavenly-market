import { Link, useParams } from "react-router-dom";
import { recupererDetailDunArticleParId } from "../../Api/Products/Product";
import { useEffect, useState } from "react";
import { ChevronLeft, Heart } from "lucide-react";
import {
  CartContext,
  useCart,
} from "../../Components/Context/CardContext/CartContext";
import toast from "react-hot-toast";
import ProductSkeleton from "../../Components/ProductDetailSkeleton/ProductSkeleton";

export default function DetailDesProduits() {
  const [detailArtircle, setdetailArtircle] = useState(null);

  const param = useParams();
  const { addItemsToCard, articlesDuPanier } = useCart();
  const [selectedBtn, setSelectedBtn] = useState({ id: 1, value: "S" });

  const sizes = [
    {
      id: 1,
      value: "S",
    },
    {
      id: 2,
      value: "M",
    },
    {
      id: 3,
      value: "L",
    },
    {
      id: 4,
      value: "XL",
    },
  ];

  /**
   *Cette fonct permet de recuperer les details, en focntion de l'id au    *click sur un article
   * @param {@number} productID
   */

  const afficherLesDetailDunArticles = (productID) => {
    recupererDetailDunArticleParId(productID)
      .then((response) => {
        setdetailArtircle(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * Ouvrir la modal pour faire un/des choix
   */
  const handleAddToCart = () => {
    if (detailArtircle) {
      addItemsToCard(detailArtircle, 1);
      toast.success("Article ajouté au panier avec succès !");
    }
  };

  useEffect(() => {
    if (param) {
      afficherLesDetailDunArticles(param.productID);
    }
  }, [param]);

  return (
    <div>
      <div>
        <Link to={"/"}>
          <div className="cursor-pointer my-5 flex items-center gap-2">
            <ChevronLeft className="bg-gray-950 text-white rounded-md" />
            <span className="text-gray-800 text-sm font-bold">
              Retour aux articles
            </span>
          </div>
        </Link>

        <span className="text-sm font-semibold text-black">
          Categories {">"}{" "}
          {detailArtircle
            ? detailArtircle.category
            : "Aucune catégorie trouvée"}{" "}
          {">"} {detailArtircle ? detailArtircle.title : "Aucun titre trouvé"}
        </span>
      </div>

      <div className="">
        {/* Section Gauche - Images du produit */}

        {!detailArtircle ? (
          <>
            <ProductSkeleton />
          </>
        ) : (
          <div className="flex flex-col md:flex-row gap-8 rounded-lg max-w-7xl mx-auto mt-5">
            <div className="border rounded-lg border-gray-200 bg-gray-100 p-4">
              <img
                src={detailArtircle ? detailArtircle.image : null}
                alt="Main Jacket"
                className="w-full md:w-96 md:h-full rounded-lg"
              />
            </div>

            {/* Section Droite - Détails du produit */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold">
                {detailArtircle ? detailArtircle.title : null}{" "}
              </h2>
              <div className="flex items-center gap-2 my-2">
                <span className="line-through text-gray-400">20 FCFA</span>
                <span className="text-2xl font-semibold text-orange-600">
                  {detailArtircle ? detailArtircle.price : null} FCFA
                </span>
                <span className="bg-black text-white text-xs px-2 py-1 rounded-md">
                  5% Reduction
                </span>
              </div>
              <div className="flex items-center gap-1 text-yellow-400">
                ⭐⭐⭐⭐⭐{" "}
                <span className="text-gray-600 text-sm">
                  ({detailArtircle ? detailArtircle.rating.rate : null}){" "}
                  {detailArtircle ? detailArtircle.rating.count : null} Notes
                </span>
              </div>
              <p className="text-gray-600 my-4 text-sm">
                {detailArtircle ? detailArtircle.description : null}
              </p>

              {/* Couleurs disponibles */}
              {/* CONDITIONS D 'AFFICHAGE DES TAILLES ET COULLEUR */}
              <div>
                {detailArtircle?.category === "men's clothing" ||
                detailArtircle?.category === "women's clothing" ? (
                  <div>
                    <div>
                      <h4 className="font-semibold">Couleurs disponibles</h4>
                      <div className="flex gap-2 my-2">
                        <div className="w-8 h-8 bg-black rounded-full border-2 cursor-pointer"></div>
                        <div className="w-8 h-8 bg-blue-600 rounded-full border-2 cursor-pointer"></div>
                        <div className="w-8 h-8 bg-green-600 rounded-full border-2 cursor-pointer"></div>
                      </div>
                    </div>

                    {/* Tailles disponibles */}
                    <div>
                      <h4 className="font-semibold mt-4">Tailles</h4>

                      <div className="flex gap-2 my-2">
                        {sizes.map((size) => (
                          <button
                            className={`${
                              selectedBtn.id === size.id
                                ? "border bg-black px-4 py-2 rounded-md text-white"
                                : "border px-4 py-2 rounded-md"
                            }`}
                            onClick={() => {
                              setSelectedBtn({
                                id: size.id,
                                value: size.value,
                              });
                            }}
                            key={size.id}
                          >
                            {size.value}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              {/* Boutons */}
              <div className="flex gap-4 mt-7">
                <button
                  className="bg-gray-200 text-black px-6 py-2 rounded-md "
                  onClick={() => handleAddToCart()}
                >
                  Je fonce
                </button>
                <Link to={"/panier"}>
                  <button className="bg-orange-500 text-white px-4 py-2  md:px-6 md:py-2 rounded-md  ">
                    Aller au panier
                  </button>
                </Link>
                <button className="bg-black text-white px-6 py-2 rounded-md  text-center">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
