import React from "react";

export const Finish = (props) => {
  const { finishCleaning, deleteFinish } = props;
  return (
    <div className="finish-area">
      <p className="title">受け取り待ち</p>
      <ul>
        {finishCleaning.map((finish, index) => {
          return (
            <div key={finish} className="list-row">
              <li>{finish}</li>
              <button onClick={() => deleteFinish(index)}>受け取り完了</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
