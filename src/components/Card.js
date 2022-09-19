import React from "react";

function Card({ card, stack, handleRemove }) {
  const handleClick = () => {
    if (stack.length > 0) {
      stack.slice(-1);
      handleRemove(stack);
    }
  };

  const dragStart = (e) => {
    e.dataTransfer.setData("cardToMove", stack.slice(-1)[0].src);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={"card"}
      draggable="true"
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <img
        id={card.id}
        src={card.src}
        stack={stack}
        alt="card front"
        onClick={handleClick}
      />
    </div>
  );
}

export default Card;
