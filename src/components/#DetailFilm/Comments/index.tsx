import Button from "@/components/Button/Button";
import * as Style from "./index.styled";
import React, { useEffect, useState } from "react";
import { VscSend } from "react-icons/vsc";

export default function Comments(props: { PersonKey: number }) {
  const [comments, setComments] = useState<CommentData[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [isSend, setIsSend] = useState<boolean>(true);

  const commentsStorageKey = `comments-` + String(props.PersonKey);
  useEffect(() => {
    if (isSend) {
      const storageComments = localStorage.getItem(commentsStorageKey);
      if (storageComments === null) {
        setComments([]);
      } else {
        setComments(JSON.parse(storageComments));
      }
      setIsSend(false);
    }
  }, [isSend, props.PersonKey]);

  const onCommentDelete = (id: string) => {
    const newComments: CommentData[] = comments.filter(
      (com) => com.name !== id
    );
    localStorage.setItem(commentsStorageKey, JSON.stringify(newComments));
    setNewComment("");
    setIsSend(true);
  };

  const onCommentSend = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (newComment.length > 0) {
      const newComments: CommentData[] = comments;
      newComments.push({
        name: `user ${comments.length + 1}`,
        text: newComment,
      });
      localStorage.setItem(commentsStorageKey, JSON.stringify(newComments));
      setNewComment("");
      setIsSend(true);
    }
  };

  return (
    <Style.Comments>
      {comments.length > 0 ? (
        comments.map((c) => (
          <Comment key={c.name} {...c} deleteHandler={onCommentDelete} />
        ))
      ) : (
        <p>На этот фильм никто не оставил комментарий. Вы можете быть первым!</p>
      )}
      <Style.Form onSubmit={onCommentSend}>
        <Style.Input
          placeholder={"Здесь может быть ваш комментарий"}
          value={newComment}
          onChange={(current) => setNewComment(current.target.value)}
        ></Style.Input>
        <Style.ButtonWithImage onClick={() => console.log("Button clicked")}>
          <Style.Image src="/send.svg" alt="Button Image" />
        </Style.ButtonWithImage>
      </Style.Form>
    </Style.Comments>
  );
}

interface CommentData {
  name: string;
  text: string;
}

interface CommentProps extends CommentData {
  deleteHandler: (id: string) => void;
}

const Comment = (props: CommentProps) => {
  return (
    <Style.Comment>
      <Style.DeleteButton
        onClick={() => props.deleteHandler(props.name)}
      >
        Удалить
      </Style.DeleteButton>
      <Style.User>
        <Style.Name>{props.name}</Style.Name>
      </Style.User>
      <Style.Text>{props.text}</Style.Text>
    
    </Style.Comment>
  );
};