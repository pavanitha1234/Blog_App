import React, { useEffect, useState } from 'react';
import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore';
import { auth, db } from '../firebase'; 

function Home({isAuth}) {
  const [postLists, setPostList] = useState([]); //for listing the saved posts
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => { //get posts from the database
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id }))); //print the data by map it from the docs in the db
    };
    
    getPosts();
  });

  const deletePost = async (id) => { //deletes the post with a post id in db
    const postDoc = doc(db, 'posts', id)
    await deleteDoc(postDoc);
  }

  return (
    <div className='homePage'> {postLists.map((post) => {
      return (
        <div className='post'> 
          <div className='postHeader'>
            <div className='title'>
              <h1> {post.title} </h1>
            </div>
            <div className='deletePost'>
              {isAuth && post.author.id === auth.currentUser.uid && (
              <button onClick={() => {deletePost(post.id)}}>delete</button>
              )}
            </div>
          </div>
          <div className='postTextContainer'> {post.postText} </div>
          <h3>{post.author.name}</h3>
        </div>
        );
      })}
    </div>
  );
}

export default Home;