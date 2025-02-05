import React, { useEffect, useState } from "react";

export default function ArticlesFavoris() {
  const [articleFavorites, setArticleFavorites] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  //FAVORIS SECTIONS ::::::::::::::::::::::::::::::::::::::::::::::::::::::
  const loadFavorites = () => {
    setIsloading(true);
    const storedFavorites = JSON.parse(localStorage.getItem("favoris")) || [];
    if (storedFavorites) {
      setArticleFavorites(storedFavorites);
      setIsloading(false);
    }
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

  const isFavorite = (articleID) => {
    return articleFavorites.some((fav) => fav.id === articleID);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <div>
      <div className="mt-5">
        <h1 className="text-gray-900 font-bold">Mes aritcles préférés:</h1>
      </div>
    </div>
  );
}
