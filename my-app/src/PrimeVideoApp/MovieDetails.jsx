import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
import axios from 'axios';
import '/Users/admin/React/my-app/src/PrimeVideoApp/MovieDetails.css'

// https://www.omdbapi.com/?apikey=74170e3b&s=king&page=10

const MovieDetails = () => {
    // const [poster, setPoster]=useState('');
    const [getMovieData, setMoviedata] = useState([])
    //  const [page, setPage]=useState(0)



    const MovieData = async () => {

        const res = await axios.get(`https://www.omdbapi.com/?apikey=74170e3b&s=adventure&page=2`)
        console.log(res);
        setMoviedata(res.data.Search);

    }
    useEffect(() => {
        MovieData();

    }, [])
    // as many times page value willchange use effect will get called
    // pagination
    // debouncing



    return (
        <>
        <div className="Card"> 
        {
                getMovieData.map((currElem) => {
                    console.log(currElem);
                    return (
                        <>
                            <div className="Container">
                                <img className='poster' src={currElem.Poster} alt="" />
                                <h1 className='title'>{currElem.Title}</h1>
                                <p className='year'>{currElem.Year}</p>
                                <p className='imdb'>{currElem.imdbID}</p>
                            </div>
                        </>

                    )
                })

            }
        </div>
            

        </>
    )



}
export default MovieDetails;


