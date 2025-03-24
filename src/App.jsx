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
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
       <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );

  return (
    <Container>
      {posts.map((post) => (
        <Card style={{ width: "18rem" }} key={post.id}>
          <Card.Img variant="top" src="https://via.placeholder.com/150/92c952" />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body.substring(0, 60)}...</Card.Text>
            <Button variant="primary">View Post</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
  
}

