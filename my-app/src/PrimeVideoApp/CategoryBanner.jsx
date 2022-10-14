// import React from "react";
import '/Users/admin/React/my-app/src/PrimeVideoApp/CategoryBanner.css'





const CategoryBanner = () => {
    return (
       
        <>
            <div className="category-banner flex">

                <div className="mainSubBanner">
                    <p className='heading'>Top categories</p>
                    <div className="leftBanner">
                        <div className="small-box" id="includes">Included with prime</div>
                        <div className="small-box" id="originals">Amazon originals</div>
                        <div className="small-box" id="movies">Movies</div>
                        <div className="small-box" id="tv">Tv</div>
                        <div className="small-box" id="kids">kids</div>
                    </div>

                </div>
                <div className="midLine"></div>

                <div className="subsubBanner flex">

                    <div className="audio-languages">
                        <p className='heading'>Audio languages</p>
                        <ul>

                            <li>English</li>
                            <li>Hindi</li>
                            <li>Telugu</li>
                            <li>Tamil</li>
                            <li>Kannada</li>
                            <li>Malayalam</li>
                            <li>Punjabi</li>
                            <li>Marathi</li>
                            <li>Bengali</li>
                            <li>Gujrati</li>
                        </ul>
                    </div>
                    <div className="other-categories">
                        <ul>
                            <p className='heading'>Other categories</p>
                            <li>Drama</li>
                            <li>Action and adventure</li>
                            <li>Romance</li>
                            <li>Comedy</li>
                            <li>Suspence</li>
                            <li>Horror</li>
                            <li>Award winners</li>
                        </ul>
                    </div>

                </div>

            </div>
        </>
    )


}
export default CategoryBanner;