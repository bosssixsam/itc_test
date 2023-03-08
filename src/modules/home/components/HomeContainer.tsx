import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector, usePaginationHooks } from "@/hooks";

import { Pagination } from "@/components";
import { HomeView, selecthome } from "@/modules/home";

import { getList } from "@/modules/home";

const HomeContainer = () => {
  const dispatch = useAppDispatch();
  const { count, list, loading } = useAppSelector(selecthome);
  const { viewdata, totalPages, page, handleNext, handlePre } = usePaginationHooks(48, list);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    dispatch(getList());
  }, []);

  // const handleNext = (url: string) => {
  //   const offset = new URL(url).searchParams.get("offset") as string;
  //   setParams({
  //     offset,
  //   });
  // };

  return loading ? (
    <p>Loading............</p>
  ) : (
    <>
      <div className="mt-12 mx-4 font-bold">{count} results found.</div>
      <HomeView list={viewdata} />
      <Pagination total={totalPages} page={page} handleNext={handleNext} handlePre={handlePre} />
    </>
  );
};

export default HomeContainer;
