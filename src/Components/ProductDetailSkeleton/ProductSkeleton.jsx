import React from "react";

export default function ProductSkeleton() {
  return (
    <div className="flex flex-col md:flex-row gap-8 rounded-lg max-w-7xl mx-auto mt-5 animate-pulse">
      {/* Image Section */}
      <div className="border skeleton  rounded-lg border-gray-200 bg-gray-100 p-4 w-full md:w-96 h-[300px] md:h-[400px]">
        <div className="w-full h-full skeleton bg-gray-300 rounded-lg" />
      </div>

      {/* Details Section */}
      <div className="flex-1 space-y-4">
        {/* Title */}
        <div className="h-6 skeleton  bg-gray-300 rounded w-3/4" />

        {/* Price + Promo */}
        <div className="flex items-center skeleton gap-4">
          <div className="w-20 h-4 skeleton bg-gray-300 rounded" />
          <div className="w-24 h-6 skeleton bg-gray-400 rounded" />
          <div className="w-16 h-5 skeleton bg-gray-300 rounded" />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="w-24 h-4 bg-gray-300 rounded" />
          <div className="w-24 h-3 bg-gray-200 rounded" />
        </div>

        {/* Description */}
        <div className="space-y-2 ">
          <div className="w-full h-4 skeleton bg-gray-300 rounded" />
          <div className="w-5/6 h-4 skeleton bg-gray-300 rounded" />
          <div className="w-2/3 h-4 skeleton bg-gray-300 rounded" />
        </div>

        {/* Couleurs */}
        <div>
          <div className="h-5 bg-gray-300 rounded w-32 mb-2" />
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 skeleton bg-gray-300 rounded-full border-2"
              />
            ))}
          </div>
        </div>

        {/* Tailles */}
        <div>
          <div className="h-5 bg-gray-300 rounded w-24 mt-4 mb-2" />
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-12 h-8 skeleton bg-gray-300 rounded border"
              />
            ))}
          </div>
        </div>

        {/* Boutons */}
        <div className="flex gap-4 mt-7">
          <div className="w-24 h-10 bg-gray-300 rounded-md" />
          <div className="w-28 h-10 bg-gray-300 rounded-md" />
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  );
}
