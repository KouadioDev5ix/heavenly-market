import React from "react";
import NavBar from "../Components/NavBar";

import logo from "../Assets/Images/ce5699233cbc0f142250b520d967dff7 (1).png";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <div className="w-full h-12 bg-[#191919] text-white flex items-center justify-center">
        <h1 className="font-semibold text-lime-50">
          DE NOUVELLE COLLECTION !!!
        </h1>
      </div>

      <NavBar />

      <div className="px-4 flex-grow w-full">{children}</div>

      {/* FOOTER SECTIONS */}
      <div className="w-full h-full bg-[#191919] border-t mt-32">
        <div className="w-[95%] mx-auto max-w-screen-2xl pt-12 pb-5">
          <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-2">
            <div className="space-y-3">
              <a aria-current="page" className="active" href="#/">
                <img src={logo} alt="" className="w-16" />
              </a>
              <p className="text-sm text-gray-300 font-normal">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
                officia modi aliquam voluptates hic voluptate tempore! Hic id q
                esse ea vero!
              </p>
              <p className="text-gray-300 text-sm font-medium font-paragraph">
                +225 0585132212 - contact@gmail.com
              </p>
            </div>

            <div className="md:px-5">
              <h2 className="text-lg text-white font-bold font-title">
                Catégories
              </h2>
              <div className="mt-3 space-y-1 text-white">
                <p className="text-xs cursor-pointer hover:underline">
                  T-shirt
                </p>
                <p className="text-xs cursor-pointer hover:underline">Vestes</p>
                <p className="text-xs cursor-pointer hover:underline">
                  Pantalons
                </p>
                <p className="text-xs cursor-pointer hover:underline">
                  Sweate à capuche
                </p>
                <p className="text-xs cursor-pointer hover:underline">Short</p>
              </div>
            </div>
            <div className="md:px-5">
              <h2 className="text-lg text-white font-bold font-title">
                Collections
              </h2>
              <div className="mt-3 space-y-1 text-white">
                <p className="text-xs cursor-pointer hover:underline">Lorem</p>
                <p className="text-xs cursor-pointer hover:underline"> Ipsum</p>
                <p className="text-xs cursor-pointer hover:underline">
                  Dolor Sit
                </p>
                <p className="text-xs cursor-pointer hover:underline">Build</p>
                <p className="text-xs cursor-pointer hover:underline">
                  That's good
                </p>
              </div>
            </div>
            <div className="md:px-5">
              <h2 className="text-lg text-white font-bold font-title">
                Compte
              </h2>
              <div className="mt-3 space-y-1 text-white">
                <a className="" href="#/mon-compte">
                  <p className="text-xs cursor-pointer hover:underline">
                    Mon compte
                  </p>
                </a>
                <p className="text-xs cursor-pointer hover:underline">
                  Se connecter/S'inscrire
                </p>
                <p className="text-xs cursor-pointer hover:underline">
                  Favoris
                </p>
              </div>
            </div>
            <div className="md:px-5">
              <h2 className="text-lg text-white font-bold font-title">
                Retrouvez nous sur
              </h2>
              <div className="flex items-center gap-2 text-white mt-3">
                <Facebook className="cursor-pointer hover:text-orange-600" />
                <Instagram className="cursor-pointer hover:text-orange-600" />
                <Twitter className="cursor-pointer hover:text-orange-600" />
              </div>
            </div>
          </div>

          <div className="mt-8 py-4 flex flex-wrap items-center justify-between border-t border-t-zinc-800 gap-3">
            <p className="text-xs text-white font-medium font-pragraph">
              Copyright 2025 © Tout droit réservé
            </p>
            <div className="flex items-center divide-x-2">
              <a className="" href="#/cgu">
                <p className="text-xs text-white font-medium font-pragraph px-2">
                  Conditions d'utilisation
                </p>
              </a>
              <p className="text-xs text-white font-medium font-pragraph px-2">
                Politique de confidentialité
              </p>
              <p className="text-xs text-white font-medium font-pragraph px-2">
                Politique de retour
              </p>
            </div>
          </div>
          <div className="pt-5 flex items-center justify-end gap-x-3 border-t border-t-zinc-800">
            <p className="text-sm text-white font-bold font-paragraph">
              Powered By
            </p>
            <img src={logo} alt="" className="w-7 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
