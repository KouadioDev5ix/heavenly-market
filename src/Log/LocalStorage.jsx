import React, { useState } from "react";

export default function LocalStorage() {
  const [localData, setLocalData] = useState([]);

  const storeDataOnComponentMounted = () => {
    const dataStore = JSON.parse(localStorage.getItem("items")) || [];
    setLocalData(dataStore);
  };

  const addItemInLocal = (product, quantity = 1) => {
    const itemsAlreadyExistInLocal = localData.find(
      (item) => item.id === product.id
    );

    localStorage.setItem("items", JSON.stringify(""));
  };
  return <div></div>;
}
