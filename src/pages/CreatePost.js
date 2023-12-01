import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

function CreatePost({isAuth}) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts"); //collection ref to which posts are added in the db
  let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postsCollectionRef, {title, postText, author: {name: auth.currentUser.displayName , id: auth.currentUser.uid } });
    navigate("/");
  };

  useEffect(() => {
    if(!isAuth) {
      navigate("/login"); //if not authenticated,you cannot createpost page, you will be redirected to login page.
    }
  })

  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create a Post</h1>
        <div className='inputgroup'>
          <label> Title : </label><br></br>
          <input placeholder='give some title' onChange={(event) => {
            setTitle(event.target.value);}} />
        </div>
        <div className='inputgroup'>
          <label> Post : </label><br></br>
          <textarea placeholder='write the post here...' onChange={(event) => {
            setPostText(event.target.value);}} />
        </div>
        <button onClick={createPost}> Submit Post </button>
      </div>
    </div>
  );
}

export default CreatePost;