import React, { useEffect, useState } from "react";
import { recupererListesDesProduits } from "../../Api/Products/Product";
import { Link } from "react-router-dom";
import ProductSeleton from "../../Components/SkeletonProductListes/ProductSeleton";
import { Heart } from "lucide-react";
import redHeart from "../../Assets/Icons/Red-Heart.svg";

export default function ProductList() {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [active, setActive] = useState({ index: 0, value: "TOUTES" });
  const [articleFavorites, setArticleFavorites] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searhParam, setSearchParam] = useState("");
  const [filterIsActive, setFilterIsActive] = useState(false);

  const btnTabElements = [
    {
      label: "Toutes catégories",
      value: "TOUTES",
    },
    {
      label: "Men's clothing",
      value: "VESTES",
    },
    {
      label: "Jewelery",
      value: "T-SHIRT",
    },

    {
      label: "Electronics",
      value: "CHAINES",
    },
    {
      label: "Women's clothing",
      value: "AUTRES CATEGORIES",
    },
  ];

  /**
   * Cette fonction recupere la liste la liste de tous les produits depuis l'API
   */

  const recupererListProduits = () => {
    setIsloading(true);
    recupererListesDesProduits()
      .then((response) => {
        setProductsData(response.data);
        setFilterData(response?.data);
        setIsloading(false);
      })
      .catch((error) => {
        setIsloading(false);
        console.log(error);
      });
  };

  /**
   *
   * @param {string} param
   */
  const searcProduct = () => {
    if (searhParam.trim() === "") return;
    setFilterIsActive(true);
    const filterResults = productsData.filter((item) =>
      item.title.toLowerCase().includes(searhParam.toLowerCase())
    );
    setFilterData(filterResults);
  };

  /**
   *
   */

  const cancelFilter = () => {
    setSearchParam("");
    setFilterData(productsData);
    setFilterIsActive(false);
  };

  /**
   * Cette fonction permet de filtrer la liste des articles en fonction de la categorie
   * @param {string} value
   *
   */

  const filterProductByCategory = (value) => {
    if (value === "Toutes catégories") {
      setFilterData(productsData);
    } else {
      const listUpdated = productsData.filter(
        (item) => item.category.toLowerCase() === value.toLowerCase()
      );
      setFilterData(listUpdated);
    }
  };

  //:::::::::::::::FAVORIS SECTIONS ::::::::::::::::::::::::::::::::::::::::::::::::::::::
  const loadFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoris")) || [];
    setArticleFavorites(storedFavorites);
  };

  const saveFavorites = (updatedFavorites) => {
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  /**
   * Ajouter un article en favori / si le produit est deja en favori je le retire
   * @param {number} articleID
   */

  const toggleFavorite = (article, e) => {
    e.stopPropagation();
    e.preventDefault();
    const isFavorite = articleFavorites.some((fav) => fav.id === article.id);
    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = articleFavorites.filter(
        (fav) => fav.id !== article.id
      );
    } else {
      updatedFavorites = [...articleFavorites, article];
    }
    setArticleFavorites(updatedFavorites);
    saveFavorites(updatedFavorites);
  };

  /**
   *
   * @param {*} articleID
   * @returns
   */

  const isFavorite = (articleID) => {
    return articleFavorites.some((fav) => fav.id === articleID);
  };

  useEffect(() => {
    recupererListProduits();
    loadFavorites();
  }, []);

  return (
    <div className="w-full">
      <div className="w-full flex flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mt-7">
            GADGETS COLLECTION
          </h1>

          <p className="my-5 text-sm font-semibold text-gray-700 w-full md:w-1/2 mx-auto">
            Découvrez notre univers de gadgets tendances et innovants ! Plongez
            dans une collection pensée pour vous simplifier la vie et booster
            votre quotidien. Que vous soyez à la recherche d’accessoires
            high-tech, de vêtements stylés ou de bijoux élégants, vous trouverez
            ici des produits uniques, sélectionnés avec soin. Faites-vous
            plaisir en quelques clics et profitez d’une expérience shopping
            rapide, intuitive et sécurisée. Les nouveautés vous attendent, ne
            passez pas à côté !
          </p>
        </div>

        {/* BTN SECTIONS */}

        <div>
          <div className="flex items-center justify-center my-2 ">
            <div className="flex flex-wrap gap-3 ">
              {btnTabElements.map((item, index) => (
                <button
                  disabled={isLoading}
                  key={index}
                  onClick={() => {
                    setActive({
                      index: index,
                      value: item.value,
                    });
                    filterProductByCategory(item.label);
                  }}
                  className={`${
                    active.index === index
                      ? " bg-gray-900 text-white rounded-full h-9 px-4 w-fit text-xs"
                      : "bg-GenerateRevenueButtonBg border-2 text-xs border-gray-600 text-gray-900 rounded-full h-9 px-4 w-fit text-wrap"
                  } `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ARTICLES AVAILLABLE */}
        <div className="w-full">
          <div className="my-7 flex items-center justify-between">
            <h1 className="sm:text-lg md:text-2xl font-extrabold text-orange-600">
              DISPONILBES POUR-VOUS!
            </h1>
            <div className="flex gap-2">
              <input
                disabled={isLoading}
                value={searhParam}
                onChange={(e) => setSearchParam(e.target.value)}
                type="text"
                placeholder="Recherhcer un article..."
                className="input h-10  input-bordered input-md w-full max-w-xs mr-4"
              />

              {filterIsActive && (
                <button
                  className="text-white h-10 px-4 text-xs bg-red-600 rounded-md"
                  onClick={cancelFilter}
                >
                  Annuler
                </button>
              )}
              <button
                className="text-white h-10 px-4 text-xs bg-black rounded-md "
                onClick={searcProduct}
                disabled={isLoading}
              >
                Rechercher
              </button>
            </div>
          </div>

          {/* ARITICLES AVAILLABLE */}

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {isLoading && productsData.length === 0
              ? [
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                  19, 20,
                ].map((_, index) => <ProductSeleton key={index} />)
              : null}

            {!isLoading && filterData.length > 0
              ? filterData.map((item) => (
                  <Link to={`products/${item.id}`} key={item.id}>
                    <div className="cursor-pointer w-full h-full border bg-white rounded-md hover:shadow-xl relative">
                      <div className=" flex items-center justify-center w-full h-72 rounded-md">
                        <img
                          src={item.image}
                          alt=""
                          className=" w-1/2 h-1/2  rounded-tl-md rounded-tr-md"
                        />
                      </div>
                      <div className="p-3">
                        <div className="mt-1">
                          <p className="text-sm text-black font-bold font-paragraph">
                            {item.title}
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-3">
                          <p className="text-base font-bold font-paragraph text-orange-600">
                            {item.price} F CFA
                          </p>
                        </div>

                        <div className="mt-3 flex flex-wrap items-center gap-x-1">
                          <span className="text-[11px] font-semibold underline">
                            Notes:
                          </span>{" "}
                          <p className="text-[11px] text-gray-500 font-medium font-paragraph">
                            {item.rating.rate} ⭐⭐⭐⭐⭐
                          </p>
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-x-1">
                          <span className="text-[11px] font-semibold underline">
                            Votants:
                          </span>{" "}
                          <p className="text-[11px] text-gray-500 font-medium font-paragraph">
                            {item.rating.count} personnes,
                          </p>
                        </div>
                      </div>

                      <button
                        className={`bg-gray-200 rounded-full w-7 h-7 absolute top-2 right-4 flex items-center justify-center`}
                        onClick={(e) => toggleFavorite(item, e)}
                      >
                        {isFavorite(item.id) ? (
                          <>
                            <img src={redHeart} alt="" className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            {" "}
                            <Heart className="text-white p-1" />
                          </>
                        )}
                      </button>
                    </div>
                  </Link>
                ))
              : null}

            {filterData.length === 0 && !isLoading ? (
              <div className="col-span-full text-center text-red-600 font-semibold text-base">
                <h1>Oups, aucun article trouvé...!!!</h1>
              </div>
            ) : null}
            {/* 
            {filterData.length === 0 &&
            searhParam.trim() !== "" &&
            !isLoading ? (
              <div className="col-span-full text-center text-gray-600 font-semibold ">
                <p className="text-red-500 font-semibold">
                  Oups, aucun résultat trouvé pour&nbsp;
                  <span className=" font-bold text-base"> " {searhParam}"</span>
                  .
                </p>
              </div>
            ) : null} */}
          </div>
        </div>
      </div>
    </div>
  );
}
