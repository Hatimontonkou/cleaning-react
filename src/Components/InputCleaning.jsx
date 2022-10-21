import React from "react";

const style = {
  backgroundColor: "#ccff99",
  width: "450px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputCleaning = (props) => {
  const {
    cleaningThings,
    onChangeThings,
    onClickAddSuit,
    onClickAddFuton,
    onClickAddEtc
  } = props;
  return (
    <div style={style}>
      <input
        placeholder="氏名"
        value={cleaningThings}
        onChange={onChangeThings}
      />
      <button onClick={onClickAddSuit}>スーツ類</button>
      <button onClick={onClickAddFuton}>布団類</button>
      <button onClick={onClickAddEtc}>その他</button>
    </div>
  );
};
