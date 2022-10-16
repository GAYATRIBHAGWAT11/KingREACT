import { useEffect, useState } from "react";
import '/Users/admin/React/my-app/src/PrimeVideoApp/MovieDetails.css'
import axios from "axios";


function AxiosApp() {
    const [myData, setMyData] = useState([])
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?apikey=74170e3b&s=queen&page=2`)
            .then((res) =>
                setMyData(res.data.Search))
        // console.log(res));
        // res.data

    }, []);


    useEffect(() => {
        const afterFilterData = myData.filter((post) => {
            if (post.Title) {
                return post.Title.includes(search.toLowerCase);
            }
        });
        setFilteredData(afterFilterData);
    }, [search]);
    //   search=search.


    return (
        <>
           <div className="movieCont">
           <input className="SearchMovie" type="text" value={search}  onChange={(e) => setSearch(e.target.value)} placeholder="Search movie here" />
            <div className="Card">
                {/* <h1>Axios</h1> */}
                {filteredData.map((post) => {
                    const { Title, Poster, Year, imdbID } = post
                    return <div className="Container">
                        <img src={Poster} alt="" />
                        <h2>{Title}</h2>
                        <p>{Year}</p>
                        <p>{imdbID}</p>
                    </div>
                })}
            </div>
           </div>
        </>
    )
}
export default AxiosApp;