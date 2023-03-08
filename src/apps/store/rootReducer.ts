import globalReducer from "@/globalSlice";

import { authReducer } from "@/modules/auth";
import { homeReducer } from "@/modules/home";

export const RootReducer = {
  global: globalReducer,
  auth: authReducer,
  home: homeReducer,
  // auth: authReducer,
  // news: newsActionReducer,
};
