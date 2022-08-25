import {createSlice} from "@reduxjs/toolkit";
import En from "../../utils/en";
import Ru from "../../utils/ru";

const initialState = {
    language: "ru",
    arr: Ru
}

const languageSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset(state) {
           return initialState
        },
        changeLanguage(state, action){
            state.language = action.payload;
            state.arr = action.payload === "ru" ? Ru : En;
        }
    },

})

export const {reset,changeLanguage} = languageSlice.actions


export default languageSlice.reducer
