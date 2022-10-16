import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="氏名" />
        <button>スーツ類</button>
        <button>布団類</button>
        <button>その他</button>
      </div>
      <div className="suit-area">
        <p className="title">スーツ類</p>
        <ul>
          <div className="list-row">
            <li>aaaaa</li>
            <button>クリーニング済み</button>
            <button>キャンセル</button>
          </div>
        </ul>
      </div>
      <div className="futon-area">
        <p className="title">布団類</p>
        <ul>
          <div className="list-row">
            <li>bbbbb</li>
            <button>クリーニング済み</button>
            <button>キャンセル</button>
          </div>
        </ul>
      </div>
      <div className="else-area">
        <p className="title">その他</p>
        <ul>
          <div className="list-row">
            <li>ccccc</li>
            <button>クリーニング済み</button>
            <button>キャンセル</button>
          </div>
        </ul>
      </div>
      <div className="finish-area">
        <p>受け取り待ち</p>
        <ul>
          <div className="list-row">
            <li>dddddd</li>
            <button>受け取り完了</button>
          </div>
        </ul>
      </div>
    </>
  );
};
