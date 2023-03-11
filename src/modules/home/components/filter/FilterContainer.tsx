import React, { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks";

import { selecthome } from "@/modules/home";

type Props = {};

const FilterContainer = (props: Props) => {
  const dispatch = useAppDispatch();
  const { type } = useAppSelector(selecthome);
  const [filterList, setFIlterList] = useState([]);

  const handleFilter = (url: string) => {};

  return (
    <>
      <h2>hello</h2>
    </>
  );
};

export default FilterContainer;
