
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '/Users/admin/React/my-app/src/NewsApp/CommentApp.css'
import '/Users/admin/React/my-app/src/NewsApp/CommentList.css'

const CommentList = (props) => {
    return (
        <>

            <div className="todolist_style">
                <li id="text">{props.text}</li>
                <button onClick={() => {
                    props.onSelect(props.id)
                }} className="delete">
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
            </div>
        </>
    )
}
export default CommentList