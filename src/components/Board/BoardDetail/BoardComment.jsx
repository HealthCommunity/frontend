import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BoardComment() {
  const [comment, SetComment] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const result = async () => {
      const data = await axios(`/api/post/${id}/comments`);
      SetComment(data.data.data);
    };
    result();
  }, [comment]);
  return (
    <h1>
      {comment.map((x) => (
        <li key={x.id}>{x.comment}</li>
      ))}
    </h1>
  );
}
