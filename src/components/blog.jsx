import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";

export default function BlogOne() {
  return (
    <div>

      <h1 className="text-center">Miano's Blog</h1>
      <div className="card mt-4">
        <img className="card-img-top" src="https://picsum.photos/600/300" alt="" />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <Button variant="secondary" onClick={() => setPostDetails("null")}>
            Back
          </Button>
        </div>
      </div>

    </div>
  )
}


