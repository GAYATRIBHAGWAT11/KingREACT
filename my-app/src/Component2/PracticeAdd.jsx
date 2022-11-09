import React, { useState } from "react";
import PracticeAddList from '/Users/admin/React/my-app/src/Component2/PracticeAddList.jsx'



let index = 0;
const PracticeAdd = () => {
    const [addName, setName] = useState('')
    const [listName, setListName] = useState([])


    const readInput = (event) => {
        setName(event.target.value)
    }

    const HandleClick = () => {
        setListName((prevItems) => {
            return [...prevItems, addName]
        })
    }


    const HandleDelete = (id) => {
        console.log(id);
        setListName((prevItems)=>{
            return prevItems.filter((index)=>{
                console.log(index);
                return index!==id
            })
        })
    }

    return (
        <>
            <input type="text" onChange={readInput} />
            <button onClick={HandleClick}>add</button>



            <ol>
                {listName.map((currElm,index) => {
                    return <PracticeAddList text={currElm} handleDlt={HandleDelete} id={index}/>
                })}
            </ol>
        </>
    )

}
export default PracticeAdd;