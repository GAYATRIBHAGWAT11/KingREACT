const PracticeAddList=({id,text,handleDlt})=>{
return(
    <>
    <div className="addingItems">
    <li>{text}</li>
    <button onClick={()=>{
        handleDlt(id)
    }}>Delete</button>
    </div>
    </>
)
}
export default PracticeAddList;