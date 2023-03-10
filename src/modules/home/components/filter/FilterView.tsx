import React from "react";

import { Container } from "@/components";
import { FilterItem } from "@/modules/home";

export interface IFilterView {
  types: Array<{ name: string; url: string }>;
}

const FilterView = ({ types }: IFilterView) => {
  return (
    <div className="wrapper pt-[30px]">
      <Container>
        <div className="flex">
          <h2 className="mr-2 my-4 font-bold self-start">Types:</h2>
          <div className="flex flex-wrap -m-[6px]">
            {types.map((item, index) => (
              <div key={index} className="p-[6px]">
                <FilterItem name={item.name} url={item.url} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FilterView;
