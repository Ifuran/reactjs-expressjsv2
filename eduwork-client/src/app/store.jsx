import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import ProductSlice from "./Features/Product/ProductSlice";
import CategorySlice from "./Features/Category/CategorySlice";
import TagSlice from "./Features/Tag/TagSlice";

let initialState = {};

let store = configureStore(
  {
    reducer: {
      products: ProductSlice,
      categories: CategorySlice,
      tags: TagSlice,
    },
  },
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

setupListeners(store.dispatch);

export default store;
