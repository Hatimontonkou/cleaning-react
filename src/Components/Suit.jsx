import React from "react";

export const Suit = (props) => {
  const { cleaningSuit, CompleteSuit, deleteSuit } = props;
  return (
    <div className="suit-area">
      <p className="title">スーツ類</p>
      <ul>
        {cleaningSuit.map((suit, index) => {
          return (
            <div key={suit} className="list-row">
              <li>{suit}</li>
              <button onClick={() => CompleteSuit(index)}>
                クリーニング済み
              </button>
              <button onClick={() => deleteSuit(index)}>キャンセル</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
