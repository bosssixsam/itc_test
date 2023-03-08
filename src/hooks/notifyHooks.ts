import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks";

import { globalAction, selectGlobal } from "@/globalSlice";

export const useNotify = () => {
  const dispatch = useAppDispatch();
  const { stateOpenNotify, message, format } = useAppSelector(selectGlobal);

  useEffect(() => {
    if (stateOpenNotify === true) {
      let timer: any = setTimeout(() => {
        handleDissmiss();
        return clearTimeout(timer);
      }, 4000);
    }
  }, [stateOpenNotify]);

  const handleDissmiss = () => {
    dispatch(globalAction.closeNotify());
  };
  return {
    stateOpenNotify,
    message,
    format,
    handleDissmiss,
  };
};
