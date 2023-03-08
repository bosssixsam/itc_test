import React from "react";

export interface IPagination {
  total: number;
  page: number;
  handleNext: () => void;
  handlePre: () => void;
}

const Pagination = ({ total, page, handleNext, handlePre }: IPagination) => {
  return (
    <div className="flex space-x-4 justify-center py-[30px]">
      <button
        className="p-2 bg-red-900 rounded-md text-white disabled:opacity-40 disabled:cursor-not-allowed select-none text-[1.6rem]"
        disabled={page > 1 ? false : true}
        onClick={handlePre}
      >
        prev
      </button>
      <button
        className="p-2 bg-red-900 rounded-md text-white disabled:opacity-40 disabled:cursor-not-allowed select-none text-[1.6rem]"
        disabled={page < total ? false : true}
        onClick={handleNext}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
