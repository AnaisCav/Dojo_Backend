import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/post`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  });

  return (
    <div className="App">
      <form action="" className="form">
        <label htmlFor="title">Title :</label>
        <input
          type="text"
          value={title}
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="author">Author :</label>
        <input
          type="text"
          value={author}
          id="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="content">Content :</label>
        <input
          type="text"
          name="content"
          value={content}
          id="content"
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Envoyer
        </button>
      </form>
      {posts &&
        posts.map((post) => (
          <div>
            <p>{post.title}</p>
            <p>{post.author}</p>
            <p>{post.content}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
