import React from 'react';
import '/Users/admin/React/my-app/src/NewsApp/Footer2.css'

const Footer = () => {
    const showDate = new Date();
    const newDate = showDate.toDateString();
    const todayDate = showDate.getDate() + '-' + (showDate.getMonth() + 1) + '-' + showDate.getFullYear()
    const Time = showDate.getHours() + ':' + showDate.getMinutes() + ':' + showDate.getSeconds();

    return (
        <>
            <footer className="footer">
                <div>
                    {newDate}- {Time}
                </div>
            </footer>
        </>
    )
}

export default Footer;