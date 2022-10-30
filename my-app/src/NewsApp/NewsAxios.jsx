import React, { useState, useEffect, useContext } from "react";
import CommentApp from '/Users/admin/React/my-app/src/NewsApp/CommentApp.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSun } from '@fortawesome/free-solid-svg-icons'
import '/Users/admin/React/my-app/src/NewsApp/NewsAxios.css'
import LikeFeature from '/Users/admin/React/my-app/src/NewsApp/LikeFeature.jsx'
import axios from "axios";



const NewsAxios = () => {
    const [myData, setMyData] = useState([])
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [myStyle, setMyStyle] = useState({ backgroundColor: 'black' })
    const [isLoaded, setIsLoaded] = useState(true)

    const toggleStyle = () => {
        console.log('theme changer');
        if (myStyle.backgroundColor == 'white') {
            setMyStyle({
                backgroundColor: 'black'
            })
        } else {
            setMyStyle({
                backgroundColor: 'white'
            })
        }

    }

    const NewsDetails = async () => {
        const res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=609b90f8244b43e5b3a6a2781c7c8a42')
        // console.log(res.data.articles);
        setFilteredData(res.data.articles);
        setMyData(res.data.articles)
        setIsLoaded(false)
    }
    useEffect(() => {
        NewsDetails();

    }, []);

    // remove article============>
    const removeArticle = (id) => {
        // console.log('here is id', id);
        alert(id);

        let filterData = myData.filter((item) => item.url !== id)
        console.log(filterData);
        setFilteredData(filterData)

    }

    // filtering data============>

    useEffect(() => {
        console.log('this is filter');
        const afterFilterData = myData.filter((post) => {
            if (post.title) {
                post = post.title.toLowerCase();
                return post.includes(search.toLowerCase());
            }
        });
        // console.log(afterFilterData);
        setFilteredData(afterFilterData);
    }, [search]);
    // jitni bari search change hoga utni bari useeffect call hoga



    return (
        <>
            <h1><div>{isLoaded ? 'Loading......' : null}</div></h1>
            <section style={myStyle}>
                <div className="SearchBar">
                    <input id="NewsSearch" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search here' />
                    <button className="search"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                    <div className="changeTheme">
                        <FontAwesomeIcon onClick={toggleStyle} icon={faSun}></FontAwesomeIcon>
                    </div>
                </div>
                {filteredData.map((currData) => {
                    return (
                        <>
                            <div id="cardMain" >
                                <h2 className="titleMain">{currData.title}</h2>
                                <img className="imgMain" src={currData.urlToImage} alt="image not available" />
                                <p className="author"><span className="by">By</span> {currData.author} | <span>{currData.publishedAt}</span></p>
                                <p className="content"> {currData.content}</p>
                                <p className="desc">{currData.description}</p>
                                <p className="source">Source: {currData.source.name}</p>
                                <div className="likeFeature">
                                    <LikeFeature />
                                </div>
                                <div className="Comment flex">
                                    <CommentApp />
                                </div>
                                <div className="Readremove flex">
                                    <a className="ReadMore" href={currData.url}>Read more</a>
                                    <a className="remove" onClick={() => removeArticle(currData.url)}>Remove</a>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )

}


export default NewsAxios;

