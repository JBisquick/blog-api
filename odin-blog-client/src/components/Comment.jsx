function Comment({ comment }) {
  return (
    <div>
      <p>{comment.text}</p>
      <h6>{comment.user.username}</h6>
      <h6>{comment.post_date}</h6>
    </div>
  );
}

export default Comment;