import React, { useEffect, useState } from "react";
import axios from "axios";

import { useAppDispatch, useAppSelector, usePaginationHooks } from "@/hooks";

import { Container, Pagination } from "@/components";
import { FilterView } from "@/modules/home";

import { getList, getTypes, HomeView, selecthome } from "@/modules/home";

const HomeContainer = () => {
  const dispatch = useAppDispatch();
  const { list, loading, type } = useAppSelector(selecthome);
  const [filter, setFilter] = useState<Array<{ name: string; url: string }>>([]);
  const [view, setView] = useState<Array<any>>([]);

  const { viewdata, totalPages, page, handleNext, handlePre, resetPage } = usePaginationHooks(48, view);

  useEffect(() => {
    dispatch(getList());
    dispatch(getTypes());
  }, []);

  useEffect(() => {
    loadData();
  }, [filter, list]);

  const loadData = async () => {
    let check: any = list;

    for (let i = 0; i < filter.length; i++) {
      const result = await axios.get(filter[i].url);
      const map = result.data.pokemon.map((item: any) => {
        return { ...item.pokemon };
      });

      check = check.filter((item: any) => {
        if (map.find((obj: any) => obj.name === item.name)) {
          return item;
        }
      });
    }
    resetPage();
    setView(check);
  };

  const handleFilter = (name: string, url: string) => {
    filter.find((item) => item.name === name)
      ? setFilter(filter.filter((item) => item.name !== name))
      : setFilter([
          ...filter,
          {
            name,
            url,
          },
        ]);
  };

  return loading ? (
    <p>Loading............</p>
  ) : (
    <>
      <FilterView fillist={filter} types={type} handleFilter={handleFilter} />
      <div className="mt-12">
        <Container>
          <div className="font-bold">{view.length} results found.</div>
        </Container>
      </div>
      <HomeView list={viewdata} />
      <Pagination total={totalPages} page={page} handleNext={handleNext} handlePre={handlePre} />
    </>
  );
};

export default HomeContainer;
