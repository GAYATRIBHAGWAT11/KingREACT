import React from "react";
import '/Users/admin/React/my-app/src/NewsApp/About.css'
// import Footer from '/Users/admin/React/my-app/src/NewsApp/Footer.jsx'


const About = () => {
    return (
        <>
            <div className="aboutCont">
            <p className="para">GNews फैक्ट चेक, टीवी टुडे नेटवर्क लिमिटेड लिमिटेड का हिस्सा है. फैक्ट चेक सेक्शन GNews वेबसाइट का हिस्सा है. लेकिन इस सेक्शन का प्रबंधन अलग और स्वतंत्र तरीके से इंडिया टुडे-GNews की संपादकीय टीम द्वारा किया जाता है.</p>

<div className="aboutPage">

    <div className="card">
        <h2>OurTeam</h2>
        <img src="data:image/jpeg;base64,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" alt="" />
        <h2>Gayatri Bhagwat</h2>
        <p className="title">FULL STACK DEVELOPER</p>
        <p>lorem ipsum ipsum lorem lorem ipsum ipsum lorem.</p>
        <p>xyz@gmail.com</p>
        <p><button className="button">Contact</button></p>
    </div>

</div>
            </div>
        </>
    )
}
export default About;