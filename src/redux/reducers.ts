import { combineReducers } from "@reduxjs/toolkit";
import { shopApi } from "./features/shop/shopSlice";
import themeReducer from "./features/theme/themeSlice";
const rootReducer = combineReducers({
  shop: () => {
    return {};
  },
  appTheme: themeReducer,
  [shopApi.reducerPath]: shopApi.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
