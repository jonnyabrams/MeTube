import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Comment from "./Comment";
import Default from "../img/default.jpeg"

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = ({ videoId }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, [videoId]);

  const handleNewComment = async (e) => {
    e.preventDefault();
    const res = await axios.post("/comments", {
      username: name,
      content: comment,
      videoId: videoId,
    });
    res.status === 200 && window.location.reload();
  };

  return (
    <Container>
      <NewComment>
        <Avatar src={Default} />
        <form onSubmit={handleNewComment}>
          <Input
            placeholder="Your name (optional)"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Your comment"
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </NewComment>
      {comments
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
    </Container>
  );
};

export default Comments;
