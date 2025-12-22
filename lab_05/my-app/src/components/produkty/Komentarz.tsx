import { useEffect, useState } from "react";

interface UserCommentProps {
  id: number;
  postId: number;
  body: string;
  likes: number;
  user: User;
}
interface User {
  id: number;
  username: string;
  fullName: string;
}

function UserComment({ id, postId, body, likes, user }: UserCommentProps) {
  const [likeCount, setLikeCount] = useState(likes);

  return (
    <div>
      <p>
        <strong>
          {user.fullName} @{user.username}
        </strong>
      </p>
      <p>{body}</p>
      <p>Polubienia: {likeCount}</p>
      <button onClick={() => setLikeCount((prev) => prev + 1)}>👍</button>
      <button onClick={() => setLikeCount((prev) => Math.max(prev - 1, 0))}>
        👎
      </button>
      <p>Post ID: {postId}</p>
      <p>
        -------------------------------------------------------------------------------------------
      </p>
    </div>
  );
}

export default UserComment;
