import { OPTIONS_TYPES } from "./options.types";

const INITIAL_STATE = {
    page: 1,
    title: '',
    type: '',
    year: 0,
}

export const optionsReducer = (state = INITIAL_STATE, action ) => {
    const { type, payload } = action;

    switch(type) {
        case OPTIONS_TYPES.SET_OPTIONS:
            return { ...state, page: payload.page, title: payload.title, type: payload.type, year: payload.year };
        default:
            return state;
    }
};