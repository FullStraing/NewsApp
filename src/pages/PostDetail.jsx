import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const API_BASE = 'https://jsonplaceholder.typicode.com';
function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadPost() {
      try {
        const postResponse = await fetch(`${API_BASE}/posts/${id}`);
        if (!postResponse.ok) {
          throw new Error(`Post request failed: ${postResponse.status}`);
        }
        const postData = await postResponse.json();

        if (isMounted) {
          setPost(postData);
          setStatus('ready');
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Unknown error');
          setStatus('error');
        }
      }
    }

    loadPost();
    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <div className="page">
      <div className="page-header">
        <div className="breadcrumbs">
          <Link className="link" to="/posts">
            All posts
          </Link>
          <span className="separator">/</span>
          <span>Post #{id}</span>
        </div>
        <h1 className="page-title">Post details</h1>
      </div>
      {status === 'loading' && <p className="muted">Loading post...</p>}
      {status === 'error' && (
        <p className="error">Failed to load post. {error}</p>
      )}

      {status === 'ready' && post && (
        <article className="card detail-card">
          <h2 className="detail-title">{post.title}</h2>
          <p className="detail-body">{post.body}</p>
          <div className="card-actions">
            <Link className="button outline" to="/posts">
              Back to posts
            </Link>
          </div>
        </article>
      )}

    </div>
  );
}

export default PostDetail;
