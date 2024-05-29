import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div>
      <Link to={`/posts/${post._id}`}>{post.title}</Link>
      <h5>{post.user.username}</h5>
      <h5>{post.post_date}</h5>
    </div>
  );
}

export default PostCard;