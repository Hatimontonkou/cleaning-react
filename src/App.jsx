import React, { useState } from "react";
import { InputCleaning } from "./Components/InputCleaning";
import { Suit } from "./Components/Suit";
import { Futon } from "./Components/Futon";
import { Etc } from "./Components/Etc";
import { Finish } from "./Components/Finish";

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
      <InputCleaning
        cleaningThings={cleaningThings}
        onChangeThings={onChangeThings}
        onClickAddSuit={onClickAddSuit}
        onClickAddFuton={onClickAddFuton}
        onClickAddEtc={onClickAddEtc}
        disabledSuit={suit.length >= 5}
        disabledFuton={futon.length >= 5}
        disabledEtc={etc.length >= 5}
      />
      {suit.length >= 5 && <p style={{ color: "red" }}>　各種類5個まで</p>}
      <Suit
        cleaningSuit={suit}
        deleteSuit={onClickDeleteSuit}
        CompleteSuit={onClickCompleteSuit}
      />
      {futon.length >= 5 && <p style={{ color: "red" }}>　各種類5個まで</p>}
      <Futon
        cleaningFuton={futon}
        deleteFuton={onClickDeleteFuton}
        CompleteFuton={onClickCompleteFuton}
      />
      {etc.length >= 5 && <p style={{ color: "red" }}>　各種類5個まで</p>}
      <Etc
        cleaningEtc={etc}
        deleteEtc={onClickDeleteEtc}
        CompleteEtc={onClickCompleteEtc}
      />
      <Finish finishCleaning={finish} deleteFinish={onClickDeleteFinish} />
    </>
  );
};
