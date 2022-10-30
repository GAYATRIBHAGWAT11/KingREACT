import React, { useEffect, useState } from "react";
import Home from '/Users/admin/React/my-app/src/NewsAppSouvikSir/Home.jsx';
import Headlines from '/Users/admin/React/my-app/src/NewsAppSouvikSir/Headlines.jsx';
import Contact from '/Users/admin/React/my-app/src/NewsAppSouvikSir/Contact.jsx';
import SignIn from '/Users/admin/React/my-app/src/NewsAppSouvikSir/SignIn.jsx';
import ErrorPage from '/Users/admin/React/my-app/src/NewsAppSouvikSir/ErrorPage.jsx';
import '/Users/admin/React/my-app/src/NewsAppSouvikSir/MainApp.css'
import { Route, Routes } from "react-router-dom";
import axios from 'axios'





 function MainApp(){
    const [url,setUrl]=useState(
        'https://newsapi.org/v2/everything?q=bitcoin&apiKey=7689a33b160242fe868be519e87f7035'
    );

    const [data,setData]=useState(null)
    const [error, setError]=useState(null)
    const [isLoading,setIsLoading]=useState(true)

    const handleChangeUrl=(e,value)=>{
        console.log('this is value', value);
        e.preventDefault();
        setUrl(`https://newsapi.org/v2/everything?q=${value}&apiKey=7689a33b160242fe868be519e87f7035`);
    };
    useEffect(()=>{
        const getData=async ()=>{
            try{
                setIsLoading(true)

                const response=await axios.get(url);
                setData(response.data.articles)
                // console.log('data',response.data.articles);
                setError(null)
            }catch(error){
                setError(error.message)
                setData(null);
                // data mat dikhao
            }finally{
                setIsLoading(false)
            }
        };
        getData()
    },[url])

    return(
        <>
        <Routes>
            <Route path="/" element={<Home  handleChangeUrl={handleChangeUrl} data={data} error={error} loader={isLoading}/>}></Route>
            {/* bydefalut home page */}
            <Route path="/headlines" element={<Headlines/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/signin" element={<SignIn/>}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
        </>
    )
}
export default MainApp;