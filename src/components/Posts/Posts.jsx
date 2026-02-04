import { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';
import './Posts.css';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) {
          throw new Error('Request failed');
        }
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        setError(e.message || 'Error');
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) return <p className="posts__status">Loading...</p>;
  if (error) return <p className="posts__status posts__status--error">{error}</p>;

  return (
    <section className="posts">
      <div className="posts__grid">
        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </section>
  );
}

export default Posts;

