import React, { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks";

import { FilterItemView, getTypes, selecthome } from "@/modules/home";
import axiosClient from "@/services/axiosClients";

export interface FilterItemContainer {
  name: string;
  url: string;
}

const FilterItemContainer = ({ name, url }: FilterItemContainer) => {
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState("");

  useEffect(() => {
    handleItem();
  }, [url]);

  const handleItem = async () => {
    setLoading(true);
    try {
      const result: any = await axiosClient.get(url);
      if (result) {
        setLoading(false);
        setImg(result.sprites.other["official-artwork"].front_default);
      }
    } catch (error) {
      setLoading(false);
      return "";
    }
  };
  return <FilterItemView loading={loading} name={name} />;
};

export default FilterItemContainer;
