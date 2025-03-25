import { useState, useEffect } from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [postDetails, setPostdetails] = useState(null); 

  useEffect(() => {
    async function getPosts() {
      let myData = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      let myResults = await myData.json();
      setPosts(myResults.slice(0, 10)); 
    }
    getPosts();
  }, []); 

  return (
    <div>
      {postDetails ? ( 
        <BlogPost post={postDetails} setPostdetails={setPostdetails} /> 
      ) : (
        <div>
          <h1>Miano's Blog</h1>
          {posts.map((post) => (
            <Card key={post.id} style={{ width: '20rem', margin: '20px', display: "inline-flex" }}>
              <Card.Img variant="top" src="https://picsum.photos/600/300" />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Button variant="primary" onClick={() => setPostdetails(post)}> 
                  View
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}


function BlogPost({ post, setPostdetails }) {
  return (
    <div>
      <h1 className="text-center">Miano's Blog</h1>
      <div className="card mt-4">
        <img className="card-img-top" src="https://picsum.photos/600/300" alt="Post Image" />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5> 
          <p className="card-text">{post.body}</p> 
          <Button variant="secondary" onClick={() => setPostdetails(null)}> 
          
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}
