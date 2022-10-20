import Navbar from '/Users/admin/React/my-app/src/NewsApp/Navbar.jsx'
import HeadlineFun from '/Users/admin/React/my-app/src/NewsApp/HeadlineFun.jsx'
import NewsAxios from '/Users/admin/React/my-app/src/NewsApp/NewsAxios.jsx'
import About from '/Users/admin/React/my-app/src/NewsApp/About.jsx'
import Contact from '/Users/admin/React/my-app/src/NewsApp/Contact.jsx'
import Footer2 from '/Users/admin/React/my-app/src/NewsApp/Footer2.jsx'
import '/Users/admin/React/my-app/src/NewsApp/News.css'
import { Route, Routes } from 'react-router-dom'

const NewsApp = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path='/' element={<NewsAxios />} />
                    <Route path='/headline' element={<HeadlineFun />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
            <Footer2 />

        </>
    )
}
export default NewsApp;