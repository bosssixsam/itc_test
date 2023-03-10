import React from "react";

export interface IFilterItemView {
  className?: string;
  loading?: boolean;
  name: string;
  // img: string;
}

const FIlterItemView = ({ className = "", name }: any) => {
  return (
    <button className={`${className} px-2 py-2 border-red-900 border-2 rounded-md font-bold text-red-900`}>
      {name}
    </button>
  );
};

export default FIlterItemView;
