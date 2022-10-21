import React from "react";

export const Futon = (props) => {
  const { cleaningFuton, deleteFuton, CompleteFuton } = props;
  return (
    <div className="futon-area">
      <p className="title">布団類</p>
      <ul>
        {cleaningFuton.map((futon, index) => {
          return (
            <div key={futon} className="list-row">
              <li>{futon}</li>
              <button onClick={() => CompleteFuton(index)}>
                クリーニング済み
              </button>
              <button onClick={() => deleteFuton(index)}>キャンセル</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
