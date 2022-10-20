import axios from "axios";
import React, { useEffect, useState } from "react";
import '/Users/admin/React/my-app/src/NewsApp/Headline.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const HeadlineAxios = () => {

    const [myData, setMyData] = useState([])

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=609b90f8244b43e5b3a6a2781c7c8a42')
            .then((res) =>
                setMyData(res.data.articles))
    }, [])

    return (
        <>
            <div id="gridHead">
                {myData.map((post) => {
                    const { title, url } = post
                    return <div className="cardHead">
                        <h2 id="titleH">
                            <FontAwesomeIcon icon={faStar} color='red'></FontAwesomeIcon> {title}
                            <a href={url} id='url'>Read More</a>
                        </h2>

                    </div>
                })}
            </div>
        </>
    )



}
export default HeadlineAxios;