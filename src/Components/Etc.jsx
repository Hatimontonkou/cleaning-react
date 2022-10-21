import React from "react";

export const Etc = (props) => {
  const { cleaningEtc, CompleteEtc, deleteEtc } = props;
  return (
    <div className="else-area">
      <p className="title">その他</p>
      <ul>
        {cleaningEtc.map((etc, index) => {
          return (
            <div key={etc} className="list-row">
              <li>{etc}</li>
              <button onClick={() => CompleteEtc(index)}>
                クリーニング済み
              </button>
              <button onClick={() => deleteEtc(index)}>キャンセル</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
