// @flow
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import { Card } from "../components/card";
import { CategoryFilter } from "../components/CategoryFilter";
import { Pagination } from "../components/Pagination";
import { PriceFilter } from "../components/PriceFilter";
import { LoadingSkeleton } from "../components/loadingSkeleton";
import { SearchBar } from "../components/SearchBar";
import { SelectInput } from "../components/SelectInput";
import {
  selectPerfumeList,
  selectPerfumeLoading,
} from "../redux/slices/perfume-slice";
import { fetchPerfumes } from "../redux/thunks/perfume-thnuks";
import { Perfume } from "../types/Perfume";

type Props = {};

export function Perfumes(props: Props) {
  const dispatch = useAppDispatch();
  const perfumes = useAppSelector(selectPerfumeList);
  const loading = useAppSelector(selectPerfumeLoading);
  console.log(perfumes);
  useEffect(() => {
    document.title = "Perfumes";
    dispatch(fetchPerfumes());
  }, []);
  return (
    <div className="bg-white mt-5 pt-7 h-full mx-auto px-2 sm:px-6 lg:px-32 ">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Perfumes{" "}
          </h1>
        </div>
        <section aria-labelledby="products-heading" className="pt-6 pb-24">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
            <CategoryFilter />
            <div className="lg:col-span-3">
              <div className="rounded-lg h-96 lg:h-full">
                <div className="bg-white">
                  <div className="max-w-2xl mx-auto  px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="flex justify-between">
                      <SelectInput />
                      <SearchBar />
                    </div>
                    <div className=" flex justify-between mt-3">
                      <div className="relative inline-block text-right">
                        <Pagination />
                      </div>
                      <div className="relative inline-block text-left">
                        <PriceFilter />
                      </div>
                      <h2 className="sr-only">Products</h2>
                    </div>
                    {loading ? <LoadingSkeleton /> : null}

                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                      {perfumes.length > 0 &&
                        perfumes.map((perfume: Perfume) => (
                          <Card perfume={perfume} key={perfume.id} />
                        ))}
                    </div>
                    {/* Pagination */}
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
