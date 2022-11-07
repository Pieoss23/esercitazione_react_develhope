import React, { useEffect, useState } from "react";

function Info() {
  const [post, setPost] = useState(null);

  async function getPost() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPost(data);
    } catch (err) {
      console.error("ERRORE FETCH");
    }
  }
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div className="d-flex justify-content-center mx-auto gap-5">
      <h1>Title Post:</h1>
      <ul>{post && post.map((p) => <li>{p.title}</li>)}</ul>
    </div>
  );
}

export default Info;
