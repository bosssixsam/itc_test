import React from "react";

export interface IItemView {
  className?: string;
  loading?: boolean;
  name: string;
  img: string;
}

const ItemView = ({ className = "", loading = false, name, img }: IItemView) => {
  return (
    <div className={`${className} w-full`}>
      {loading ? (
        <div className="flex flex-col space-y-2">
          <p className="text-center">Loading</p>
          <p className="text-center">Loading</p>
        </div>
      ) : (
        <>
          <div className="img-wrapper w-full">
            <img className="w-full" src={img} alt="" />
          </div>
          <p className="text-center">{name}</p>
        </>
      )}
    </div>
  );
};

export default ItemView;
