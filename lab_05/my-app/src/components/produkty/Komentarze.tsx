import { useEffect, useState } from "react";
import UserComment from "./Komentarz";

interface User {
  id: number;
  username: string;
  fullName: string;
}

interface CommentData {
  id: number;
  postId: number;
  body: string;
  likes: number;
  user: User;
}

function UserComments() {
  const [comments, setComments] = useState<CommentData[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((data) => {
        const mappedComments = data.comments.map((comment: any) => ({
          id: comment.id,
          postId: comment.postId,
          body: comment.body,
          likes: comment.likes,
          user: {
            id: comment.user.id,
            username: comment.user.username,
            fullName: comment.user.fullName,
          },
        }));
        setComments(mappedComments);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Komentarze</h1>
      <p>
        {comments.map((comment) => (
          <UserComment
            id={comment.id}
            postId={comment.postId}
            body={comment.body}
            likes={comment.likes}
            user={comment.user}
          />
        ))}
      </p>
    </div>
  );
}

export default UserComments;
