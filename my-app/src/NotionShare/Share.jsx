

import React, { useState } from 'react';
import EmailList from '/Users/admin/React/my-app/src/NotionShare/EmailList.jsx';
import '/Users/admin/React/my-app/src/NewsApp/CommentApp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLink, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import "/Users/admin/React/my-app/src/NotionShare/Share.css"


const ToDoApp = () => {
    const [Add, setAdd] = useState('')
    const [Items, setItems] = useState([]);
    const [myStyle, setMyStyle] = useState(false)

    const EmailEvent = (event) => {
        setAdd(event.target.value)
    }
    const listOfItem = () => {
        setItems((prevItems) => {
            return [...prevItems, Add]
        });
        setAdd('');
        // making it empty
    };


    // const [btnText, setBtnText]=useEffect('COVID-19 Across India')

    // const toggleStyle = () => {
    //     if (myStyle.visibility == 'hidden') {
    //         setMyStyle({
    //             visibility: 'visible'
    //         })
    //     } else {
    //         setMyStyle({
    //             visibility:'hidden'
    //         })
    //     }
    // }



        return (
            <>
                <div className="shareButton">
                    <button>Share</button>
                </div>
                <div className='main_div'>
                    <div className="center_div">
                        <input className='inputText' type="text" onChange={EmailEvent} value={Add} placeholder="Add peoples or emails" />
                        <button className='invite' onClick={listOfItem}>Invite</button>

                        <ol>
                            {/* <li>{Add}</li> */}

                            {Items.map((itemval, index) => {
                                // return <li>{itemval}</li>
                                return <EmailList key={index} id={index} text={itemval} />
                            })}
                        </ol>
                    </div>

                    <div className="addweb">
                        <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                        <div className="someText">
                            <p>Share to web</p>
                            <p>Publish and share link with anyone</p>
                        </div>
                    </div>

                    <div className="learn">
                        <div className="questionMark flex">
                            <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>
                            <p>Learn about sharing</p>
                        </div>
                        <div className="link flex">
                            <FontAwesomeIcon icon={faLink}></FontAwesomeIcon>
                            <p>copy link</p>
                        </div>
                    </div>

                </div>
            </>
        )
    }
    export default ToDoApp;