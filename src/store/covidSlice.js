import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchConfirmed = createAsyncThunk('covid/getConfirmed', async () => {
    const res = await axios('https://covid19.mathdro.id/api')
    .then(response => response.data);
    return res.confirmed;
});

export const fetchDeaths = createAsyncThunk('covid/getDeaths', async () => {
    const res = await axios('https://covid19.mathdro.id/api')
    .then(response => response.data);
    return res.deaths;
});

export const fetch = createAsyncThunk('covid/getfetch', async () => {
    const res = await axios('https://covid19.mathdro.id/api')
    .then(response => response.data);
    return res.recovered;
});


export const fetchCountries = createAsyncThunk('covid/getCountries',async ()=>{
    const res = await axios('https://covid19.mathdro.id/api/countries')
    .then(responsive => responsive.data);
    return res.countries;
});

export const fetchCountry = createAsyncThunk('covid/get/Country', async (country) => {
    const res = await axios(`https://covid19.mathdro.id/api/countries/${country}`)
    .then(response => response.data);
    return res.confirmed;
});

const covidSlice = createSlice({
    name:'covid',
    initialState:{
        global:[],
        Infected:'',
        deaths:'',
        recovered:'',
        isLoading:null,
        countries:[],
        country:''
    },
    reducers:{

    },
    extraReducers:{
        
        [fetchConfirmed.fulfilled] : (state,action) => {
            state.Infected =action.payload
            
           
        },
        [fetchDeaths.fulfilled] : (state,action) => {
            state.deaths =action.payload
            
           
        },
        [fetch.fulfilled]: (state,action) => {
            state.recovered = action.payload
        },
        [fetchCountries.fulfilled]:(state,action) =>{
            state.countries=(action.payload)
        },
        [fetchCountry.fulfilled]:(state,action) =>{
            state.country=(action.payload)
        }
    }
}) 


export default covidSlice.reducer;
