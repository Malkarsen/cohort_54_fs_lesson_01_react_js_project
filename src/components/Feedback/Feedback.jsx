import { useState } from "react";

import Button from "../Button/Button";
import "./styles.css";

function Feedback() {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const like = () => {
    setLikeCount((prevValue) => {
      return prevValue + 1;
    });
  };
  const dislike = () => {
    setDislikeCount((prevValue) => {
      return prevValue + 1;
    });
  };
  const resetResult = () => {
    setLikeCount(0);
    setDislikeCount(0);
  };

  return (
    <div className="feedback_wrapper">
      <div className="left_column_button">
        <div className="buttons_container">
          <Button onClick={like}>
            <img
              className="icon"
              src="https://cdn1.iconfinder.com/data/icons/social-media-2355/32/like_love_favourite_approval_best-512.png"
            ></img>
          </Button>
          <p className="like_count">{likeCount}</p>
        </div>
        <div className="buttons_container">
          <Button onClick={dislike}>
            <img
              className="icon"
              src="https://cdn1.iconfinder.com/data/icons/social-media-2355/32/dislike_thumb_like_hand_down-512.png"
            ></img>
          </Button>
          <p className="dislike_count">{dislikeCount}</p>
        </div>
      </div>
      <div className="right_column_button">
        <Button buttonName="Reset Results" onClick={resetResult} />
      </div>
    </div>
  );
}

export default Feedback;
