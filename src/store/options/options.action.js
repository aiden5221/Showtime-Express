import { createAction } from "../../utils/reducer/reducer.utils";
import { OPTIONS_TYPES } from "./options.types";

export const setOptions = (options) =>
    createAction(OPTIONS_TYPES.SET_OPTIONS, options);