import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector, usePaginationHooks } from "@/hooks";

import { Pagination } from "@/components";
import { Filter } from "@/modules/home";

import { getList, getTypes, HomeView, selecthome } from "@/modules/home";

const HomeContainer = () => {
  const dispatch = useAppDispatch();
  const { count, list, loading } = useAppSelector(selecthome);
  const [view, setView] = useState<Array<any>>([]);
  const { viewdata, totalPages, page, handleNext, handlePre } = usePaginationHooks(48, list);

  useEffect(() => {
    dispatch(getList());
    dispatch(getTypes());
  }, []);

  return loading ? (
    <p>Loading............</p>
  ) : (
    <>
      <Filter />
      <div className="mt-12 mx-4 font-bold">{count} results found.</div>
      <HomeView list={viewdata} />
      <Pagination total={totalPages} page={page} handleNext={handleNext} handlePre={handlePre} />
    </>
  );
};

export default HomeContainer;
