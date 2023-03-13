import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        f_name: null,
        l_name: null,
        gender: null,
        dob: null,
        city:null,
        state:null,
        country:null,
        postalCode: null,
        email: null,
        phone: null,
        language: null,
        occupation: null
    },
    reducers: {
        changeFName(state, action) {
            return { ...state, f_name:action.payload};
        },
        changeLName(state, action) {
            return { ...state, l_name:action.payload}
        },
        changeGender(state, action) {
            return { ...state, gender:action.payload}
        },
        changeDob(state, action) {
            return { ...state, dob:action.payload}
        },
        changeCity(state, action) {
            return { ...state, city:action.payload}
        },
        changeState(state, action) {
            return { ...state, state:action.payload}
        },
        changeCountry(state, action) {
            return { ...state, country:action.payload}
        },
        changePostalCode(state, action) {
            return { ...state, postalCode:action.payload}
        },
        changeEmail(state, action) {
            return { ...state, email:action.payload}
        },
        changePhone(state, action) {
            return { ...state, phone:action.payload}
        },
        changeLanguage(state, action) {
            return { ...state, language:action.payload}
        },
        changeOccupation(state, action) {
            return { ...state, occupation:action.payload}
        }
    }
})

export default userSlice.reducer;

export const {
    changeFName,
    changeLName,
    changeGender,
    changeDob,
    changeCity,
    changeState,
    changeCountry,
    changePostalCode,
    changeEmail,
    changePhone,
    changeLanguage,
    changeOccupation,
} = userSlice.actions;