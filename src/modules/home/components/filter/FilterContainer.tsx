import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks";
import axiosClient from "@/services/axiosClients";

import { FilterView, getTypes, selecthome } from "@/modules/home";

type Props = {};

const FilterContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  const { type } = useAppSelector(selecthome);

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  return <FilterView types={type} />;
};

export default FilterContainer;

const handleAPI = async (url: string) => {
  try {
    const result: any = await axiosClient.get(url);
    if (result) {
      return result.pokemon;
    }
  } catch (error) {
    return null;
  }
};
