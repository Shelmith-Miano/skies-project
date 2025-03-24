import { useState, useEffect} from "react";
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function BlogPosts() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    async function getPosts() {
      let myData = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
      let myResults = await myData.json();
      setPosts(myResults.slice(0, 8));
    }
    getPosts();
  }
);
 
  return (
    <div>
      {posts.map((post) => (
         <Card style={{ width: '18rem' }}>
         <Card.Img variant="top" src="https://picsum.photos/id/237/200/300" />
          <Card.Body>
           <Card.Title>{post.title}</Card.Title>
           <Card.Text> {post.body}</Card.Text>
           <Button variant="primary">View</Button>
         </Card.Body>
       </Card>
      ))}
     
    </div>
  );
}

