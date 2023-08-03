import {useEffect, useState} from "react";
import { postsService } from "../services/postsService";
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState(null);


    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data))
    }, [])

    return (
        <div>
            {posts && posts.map(post=> <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};