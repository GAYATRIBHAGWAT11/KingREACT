import React, {useState } from 'react'
// import axios from "axios";

const AxiosApp=async()=>{
    const [myData, setMyData]=useState([])
    try {
        const res = await fetch('https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1');
        const actualData = await res.json();
        setMyData(actualData)

    } catch (err) {
        console.log(err);
    }

}
export default AxiosApp;

