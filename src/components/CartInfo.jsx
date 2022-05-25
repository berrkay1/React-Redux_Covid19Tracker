import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchConfirmed,fetchDeaths,fetch } from '../store/covidSlice';
import moment from 'moment';
import SelectCountry from './SelectCountry';
function CartInfo() {

    const dispatch = useDispatch();

    const confirmed = useSelector(state => state.covid.Infected);
    const deaths = useSelector(state => state.covid.deaths);
    const recovered = useSelector(state => state.covid.recovered);
    const country = useSelector(state => state.covid.country);
    
    let countryInfected = country.value
   
    
    

    let infectedValue = confirmed.value;
    let recorveredValue = recovered.value;
    let deathsValue = deaths.value;
    let activeValue = infectedValue-deathsValue;
    let LastUpdatedat = moment(global?.lastUpdate).format(("MMMM Do YYYY, h:mm:ss a"));

    
    
    
    useEffect(() => {
        dispatch(fetchConfirmed())
        dispatch(fetchDeaths())
        dispatch(fetch())
    }, [])

    return (
        <div className='container-fluid'>
             <div className="row">
                <div className="card text-white bg-primary mb-3" style={{maxWidth:'18rem'}}>
                    <div className="card-header">Infected</div>
                    <div className="card-body">
                        <h5 className="card-title">{infectedValue  ? infectedValue : countryInfected }</h5>
                        <p className="card-text"> <strong>Last Updated at:</strong> {LastUpdatedat}</p>
                        <p>Number of deaths cases of COVID-19 in World</p>
                    </div>
                </div>
                <div className="card text-white bg-success mb-3" style={{maxWidth:'18rem'}}>
                    <div className="card-header">Recovered</div>
                    <div className="card-body">
                        <h5 className="card-title">{recorveredValue}</h5>
                        <p className="card-text"> <strong>Last Updated at:</strong> {LastUpdatedat}</p>
                        <p>Number of deaths cases of COVID-19 in World</p>
                    </div>
                </div>
                <div className="card text-white bg-danger mb-3" style={{maxWidth:'18rem'}}>
                    <div className="card-header">Deaths</div>
                    <div className="card-body">
                        <h5 className="card-title">{deathsValue}</h5>
                        <p className="card-text"> <strong>Last Updated at:</strong> {LastUpdatedat}</p>
                        <p>Number of deaths cases of COVID-19 in World</p>
                    </div>
                </div>
                <div className="card text-white bg-info mb-3" style={{maxWidth:'18rem'}}>
                    <div className="card-header">Active</div>
                    <div className="card-body">
                        <h5 className="card-title">{activeValue}</h5>
                        <p className="card-text"> <strong>Last Updated at:</strong> {LastUpdatedat}</p>
                        <p>Number of deaths cases of COVID-19 in World</p>
                    </div>
                </div>
                
                
            </div> 

            <SelectCountry/>

        </div>
    )
}

export default CartInfo