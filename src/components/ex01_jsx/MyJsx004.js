import React from "react";

const MyJsx004 = () => {
  const name = "css";
  return (
    <div>
      <p>
        {name === "react" ? (
          <h1>리액트입니다.</h1>
        ) : (
          <h1>리액트가 아닙니다.</h1>
        )}

        {name === "react" ? <h1>리액트입니다.</h1> : null}
      </p>
    </div>
  );
};

export default MyJsx004;
