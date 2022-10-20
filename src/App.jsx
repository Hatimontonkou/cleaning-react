import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [cleaningThings, setCleaningThings] = useState([]);
  const [suit, setSuit] = useState([]);
  const [futon, setFuton] = useState([]);
  const [etc, setEtc] = useState([]);
  const [finish, setFinish] = useState([]);
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
  //
  //
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
  //
  //
  const onClickCompleteSuit = (index) => {
    const newIncompleteSuitThings = [...suit];
    newIncompleteSuitThings.splice(index, 1);

    const newCompleteSuitThings = [...finish, suit[index]];
    setSuit(newIncompleteSuitThings);
    setFinish(newCompleteSuitThings);
  };
  const onClickCompleteFuton = (index) => {
    const newIncompleteFutonThings = [...futon];
    newIncompleteFutonThings.splice(index, 1);

    const newCompleteFutonThings = [...finish, futon[index]];
    setFuton(newIncompleteFutonThings);
    setFinish(newCompleteFutonThings);
  };
  const onClickCompleteEtc = (index) => {
    const newIncompleteSuitThings = [...etc];
    newIncompleteSuitThings.splice(index, 1);

    const newCompleteSuitThings = [...finish, etc[index]];
    setEtc(newIncompleteSuitThings);
    setFinish(newCompleteSuitThings);
  };
  //
  //
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
          {suit.map((suit, index) => {
            return (
              <div key={suit} className="list-row">
                <li>{suit}</li>
                <button onClick={() => onClickCompleteSuit(index)}>
                  クリーニング済み
                </button>
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
          {futon.map((futon, index) => {
            return (
              <div key={futon} className="list-row">
                <li>{futon}</li>
                <button onClick={() => onClickCompleteFuton(index)}>
                  クリーニング済み
                </button>
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
          {etc.map((etc, index) => {
            return (
              <div key={etc} className="list-row">
                <li>{etc}</li>
                <button onClick={() => onClickCompleteEtc(index)}>
                  クリーニング済み
                </button>
                <button onClick={() => onClickDeleteEtc(index)}>
                  キャンセル
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="finish-area">
        <p className="title">受け取り待ち</p>
        <ul>
          {finish.map((finish, index) => {
            return (
              <div key={finish} className="list-row">
                <li>{finish}</li>
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
