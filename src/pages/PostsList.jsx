import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_BASE = 'https://jsonplaceholder.typicode.com';
function PostsList() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');
  useEffect(() => {
    let isMounted = true;

    async function loadPosts() {
      try {
        const response = await fetch(`${API_BASE}/posts`);
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }
        const data = await response.json();
        if (isMounted) {
          setPosts(data);
          setStatus('ready');
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Unknown error');
          setStatus('error');
        }
      }
    }

    loadPosts();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Posts</h1>
      </div>
      {status === 'loading' && <p className="muted">Loading posts...</p>}
      {status === 'error' && (
        <p className="error">Failed to load posts. {error}</p>
      )}

      {status === 'ready' && (
        <div className="card-grid">
          {posts.map((post) => (
            <article className="card" key={post.id}>
              <h2 className="card-title">{post.title}</h2>
              <div className="card-actions">
                <Link className="button" to={`/posts/${post.id}`}>
                  Read post
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
export default PostsList;
