import { createHashRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ProductList from "../Pages/Main/ProductList";
import DetailDesProduits from "../Pages/Detailsdesproduits/DetailDesProdutis";
import Panier from "../Pages/Panier/Panier";
import ArticlesFavoris from "../Pages/Favoris/ArticlesFavoris";
import FinaliserCommande from "../Pages/FinaliserCommande/FinaliserCommande";
import Account from "../Pages/Account/Account";
import AboutUs from "../Pages/AboutUs/AboutUs";
import BecomePatner from "../Pages/BecomePatner/BecomePatner";

export const AppRoutes = createHashRouter([
  {
    path: "/",
    element: (
      <Layout>
        <ProductList />
      </Layout>
    ),
  },

  {
    path: "/products/:productID",
    element: (
      <Layout>
        <DetailDesProduits />
      </Layout>
    ),
  },

  {
    path: "/panier",
    element: (
      <Layout>
        <Panier />
      </Layout>
    ),
  },

  {
    path: "/favoris",
    element: (
      <Layout>
        <ArticlesFavoris />
      </Layout>
    ),
  },

  {
    path: "/compte",
    element: (
      <Layout>
        <Account />
      </Layout>
    ),
  },
  {
    path: "/qui-sommes-nous",
    element: (
      <Layout>
        <AboutUs />
      </Layout>
    ),
  },

  {
    path: "/devenir-patenaire",
    element: (
      <Layout>
        <BecomePatner />
      </Layout>
    ),
  },

  {
    path: "/finaliser-commande",
    element: (
      <Layout>
        <FinaliserCommande />
      </Layout>
    ),
  },
]);
