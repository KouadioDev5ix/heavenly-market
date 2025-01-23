import React from "react";

export default function ProductSeleton() {
  return (
    <div className="skeleton cursor-pointer w-full h-full border bg-gray-100 rounded-md hover:shadow-xl">
      <div className=" flex items-center justify-center w-full h-72 rounded-md">
        <div className=" w-2/3 h-2/3 skeleton rounded-md bg-gray-200"></div>
      </div>
      <div className="p-3">
        <div className="">
          <p className="text-sm font-bold font-paragraph">
            <div className="flex flex-wrap items-center gap-x-3 my-1">
              <div className="w-full h-3 bg-slate-300 rounded-sm"></div>
              <div className="w-2/3 h-3 bg-slate-300 rounded-sm my-1"></div>
              <div className="w-1/2 h-3 bg-slate-300 rounded-sm"></div>
            </div>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 my-1">
          <div className="w-1/2 bg-gray-200  h-5 rounded-sm border border-gray-100"></div>
          <div className="w-full h-2 bg-gray-300 rounded-sm my-1"></div>
          <div className="w-full h-2 bg-gray-300 rounded-sm "></div>
        </div>
      </div>
    </div>
  );
}
