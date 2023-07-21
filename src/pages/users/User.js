import { useState } from "react";
import Comments from "../comments/Posts";
import Posts from "../comments/Posts";

const User = ({user}) => {
  const [triggerFormAddComment, setTriggerFormAddComment] = useState(false);

  const addComment = (id) => {

  }
 
  return (
    <div className='user'>
   <h3>{user.name}</h3>

   <Posts userId={user.id}/>
    </div>

  )
}

export default User;
