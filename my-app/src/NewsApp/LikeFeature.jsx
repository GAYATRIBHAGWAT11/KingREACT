import React, { useState } from "react";
import '/Users/admin/React/my-app/src/NewsApp/LikeFeature.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'


const LikeDeslike = () => {
    const [LikeFeature, setLikeFeature] = useState(0)
    const [DeslikeFeature, setDeslikeFeature] = useState(0)

    const [likeState, setLikeState] = useState(false)
    const [deslikeState, setDeslikeState] = useState(false)

    const Like = () => {
        <h1>this islike and deslike</h1>
        if (likeState) {
            setLikeState(false)
            setLikeFeature(LikeFeature + 1)
        } else {
            setLikeState(true)
            setLikeFeature(LikeFeature + 1)
            if (deslikeState) {
                setDeslikeState(false)
                setLikeFeature(LikeFeature + 1)
                setDeslikeFeature(LikeFeature - 1)
            }
        }


    }

    const Deslike = () => {
        if (deslikeState) {
            setDeslikeState(false)
            setDeslikeFeature(DeslikeFeature - 1)
        } else {
            setDeslikeState(true)
            setDeslikeFeature(LikeFeature + 1)
            if (likeState) {
                setDeslikeState(false)
                setDeslikeFeature(LikeFeature + 1)
                setLikeFeature(LikeFeature - 1)
            }
        }


    }



    return (
        <>
            <div className="likeDeslike">
                <button id="Ld" onClick={Like}><FontAwesomeIcon icon={faThumbsUp} color='red'></FontAwesomeIcon> {LikeFeature}</button>
                <button id="Ld" onClick={Deslike}><FontAwesomeIcon icon={faThumbsDown} color='blue'></FontAwesomeIcon>{DeslikeFeature} </button>
            </div>
        </>
    )
}
export default LikeDeslike;




