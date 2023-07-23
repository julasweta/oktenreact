import { useEffect, useState } from "react"
import { apiService } from "../../services/ApiService";
import { Link } from "react-router-dom";

const Comments = () => {

    const [comments, setComments] = useState();
    const url = `https://jsonplaceholder.typicode.com/comments`;


    useEffect(() => {
        const axiosGet = async () => {
            setComments(await apiService.handleGet(url));
        };
        axiosGet();
    }, [])

    return (
        <div className="items">
            <h1>Comments</h1>
            {comments && comments.map((comment, index) => <Link to={`/post/${comment.postId}`} key={index}>{comment.body}
                <p><b>postId: {comment.postId}</b></p>
            </Link>)}
        </div>

    )
}

export default Comments