import {useSelector} from "react-redux";
import {store} from "../store/ReduxStore.ts";

export const useAppSelectorHook =useSelector.withTypes<ReturnType<typeof store.getState>>()
