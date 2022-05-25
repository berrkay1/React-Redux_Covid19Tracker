import React, { useEffect, useState } from 'react'
import {fetchCountries,fetchCountry} from '../store/covidSlice';
import {useSelector,useDispatch} from 'react-redux';

function SelectCountry() {

    const countries = useSelector(state => state.covid.countries);
    const dispatch = useDispatch();
    
    const [value,setValue] = useState();
    

    useEffect(()=>{
        dispatch(fetchCountries());
        dispatch(fetchCountry(value))
    },[value,dispatch])
    
   

    return (
        <div>
            <form>
              
                <select value={value} onChange={(e)=>setValue(e.target.value)} className="custom-select custom-select-lg mb-3">
                <option selected>Country</option>
                {countries.map((item,index)=>(
                    <option key={index} value={item.name} >{item.name}</option>
                ))}
                
                
            </select>
            </form>
            
        </div>
    )
}

export default SelectCountry