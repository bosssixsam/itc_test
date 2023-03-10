import { useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export const usePaginationHooks = (pagesize: number, list: Array<any>) => {
  const [params, setParams] = useSearchParams();
  const pageNumber = typeof params.get("page") === "string" ? parseInt(params.get("page") as string) : 1;
  const [page, setPage] = useState(pageNumber);
  const totalPages = useMemo(() => Math.ceil(list.length / pagesize), [list.length, pagesize]);

  let last = page * pagesize;
  let first = last - pagesize;
  const viewdata = list.slice(first, last);

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
      setParams({
        ...params,
        page: `${page + 1}`,
      });
    }
  };

  const handlePre = () => {
    if (page > 1) {
      setPage(page - 1);
      setParams({
        ...params,
        page: `${page - 1}`,
      });
    }
  };

  const resetPage = () => {
    setPage(1);
    setParams({
      ...params,
      page: `1`,
    });
  };
  return {
    viewdata,
    totalPages,
    page,
    handleNext,
    handlePre,
    resetPage,
  };
};
