import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [cleaningThings, setCleaningThings] = useState("");
  const [suit, setSuit] = useState(["adae", "gsrfsr"]);
  const [futon, setFuton] = useState(["aaaa"]);
  const [etc, setEtc] = useState(["cccc"]);
  const [finish, setFinish] = useState(["eeee"]);
  const onChangeThings = (event) => setCleaningThings(event.target.value);
  const onClickAddSuit = () => {
    if (cleaningThings === "") return;
    const newCleaningThings = [...suit, cleaningThings];
    setSuit(newCleaningThings);
    setCleaningThings("");
  };
  const onClickAddFuton = () => {
    if (cleaningThings === "") return;
    const newCleaningThings = [...futon, cleaningThings];
    setFuton(newCleaningThings);
    setCleaningThings("");
  };
  const onClickAddEtc = () => {
    if (cleaningThings === "") return;
    const newCleaningThings = [...etc, cleaningThings];
    setEtc(newCleaningThings);
    setCleaningThings("");
  };
  const onClickDeleteSuit = (index) => {
    const newCleaningThings = [...suit];
    newCleaningThings.splice(index, 1);
    setSuit(newCleaningThings);
  };
  const onClickDeleteFuton = (index) => {
    const newCleaningThings = [...futon];
    newCleaningThings.splice(index, 1);
    setFuton(newCleaningThings);
  };
  const onClickDeleteEtc = (index) => {
    const newCleaningThings = [...etc];
    newCleaningThings.splice(index, 1);
    setEtc(newCleaningThings);
  };
  const onClickDeleteFinish = (index) => {
    const newCleaningThings = [...finish];
    newCleaningThings.splice(index, 1);
    setFinish(newCleaningThings);
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="氏名"
          value={cleaningThings}
          onChange={onChangeThings}
        />
        <button onClick={onClickAddSuit}>スーツ類</button>
        <button onClick={onClickAddFuton}>布団類</button>
        <button onClick={onClickAddEtc}>その他</button>
      </div>
      <div className="suit-area">
        <p className="title">スーツ類</p>
        <ul>
          {suit.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>クリーニング済み</button>
                <button onClick={() => onClickDeleteSuit(index)}>
                  キャンセル
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="futon-area">
        <p className="title">布団類</p>
        <ul>
          {futon.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>クリーニング済み</button>
                <button onClick={() => onClickDeleteFuton(index)}>
                  キャンセル
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="else-area">
        <p className="title">その他</p>
        <ul>
          {etc.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>クリーニング済み</button>
                <button onClick={() => onClickDeleteEtc(index)}>
                  キャンセル
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="finish-area">
        <p>受け取り待ち</p>
        <ul>
          {finish.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickDeleteFinish(index)}>
                  受け取り完了
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
