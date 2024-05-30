import { usePost } from '../hooks/api';
import { useParams } from "react-router-dom";
import Navigation from './Navigation';
import Comment from './Comment';
import CommentForm from './CommentForm';

function Post() {
  const { id } = useParams();
  const { post, error, loading } = usePost(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Could not find post!</div>;
  }

  if (post.post.public === false) {
    return <div>Post is not public</div>;
  }

  return(
    <>
    <Navigation></Navigation>
    <h2>{post.post.title}</h2>
    <h6>{post.post.user.username}</h6>
    <h6>{post.post.post_date}</h6>
    <p>{post.post.content}</p>
    <CommentForm post={post.post._id} ></CommentForm>
    {post.comments.map((comment) => (
        <Comment comment={comment} key={comment._id} ></Comment>
      ))}
    </>
  ); 
}

export default Post;