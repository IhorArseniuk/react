import {useDispatch} from "react-redux";
import {store} from "../store/ReduxStore.ts";

export const useDispatchHook=useDispatch.withTypes<typeof store.dispatch>()
