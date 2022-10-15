import React, { useState, useTransition } from 'react';


import { FaAngleDown, FaAviato, FaGlobe, FaSearch, FaUser } from "react-icons/fa";
import CategoryBanner from '/Users/admin/React/my-app/src/PrimeVideoApp/CategoryBanner.jsx'
import '/Users/admin/React/my-app/src/PrimeVideoApp/Header.css'
import LanguageBox from '/Users/admin/React/my-app/src/PrimeVideoApp/LanguageBox.jsx'
import UserBox from "./UserBox";
import MainBanner from '/Users/admin/React/my-app/src/PrimeVideoApp/MainBanner.jsx'
import MovieDetails from '/Users/admin/React/my-app/src/PrimeVideoApp/MovieDetails.jsx'


const Navbar = () => {
    const [isToggle, setisToggle]=useState(false)
    const [isLanguage,setisLanguage]=useState(false)
    const [userBox , setuserBox]=useState(false)
    const [isVisible, setVisible]=useState(false)
    return (
        <>
            <nav className="main-nav center">
                <div className="leftBox flex">
                    <div className="logo ">
                      <img src="data:image/png;base64,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" alt="" className="logo" />
                    </div>
                        <div className="navigation flex center">
                            <div>
                                <p>Home</p>
                            </div>

                            <div>
                                <p>Store</p>
                            </div>
                            <div>
                                <p>Channel</p>
                            </div>
                            <div>
                               <p onMouseOverCapture={()=>setisToggle(!isToggle)}>Categories</p>
                               {isToggle && <CategoryBanner/>}
                               {/* <FaAngleDown/> */}
                            </div>
                            <div>
                                <p>MyStuff</p>
                            </div>
                        </div>
                </div>

                <div className="icons ">
                    <div className="deskIcons flex ">
                        <div>
                            <div className="try">try for free</div>
                        </div>
                        <div>
                            <input type="text" />
                            <FaSearch/>
                        </div>
                        <div>
                            <FaGlobe  onMouseOverCapture={()=>setisLanguage(!isLanguage)}/><span>EN</span>
                            {isLanguage && <LanguageBox/>}
                        </div>
                        <div>
                            <FaUser onMouseOverCapture={()=>setuserBox(!userBox)}/>
                            {userBox && <UserBox/>}
                        </div>
                    </div>
                </div>
            </nav>
            <MainBanner/>
            <MovieDetails/>

        </>
    )
}
export default Navbar;