import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMessage } from "./action";

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message.message);

  return (
    <div className="message">
      <h2>{message}</h2>
      <input
        type="text"
        onChange={(e) => dispatch(updateMessage(e.target.value))}
        placeholder="Update message"
      />
    </div>
  );
};

export default Message;
