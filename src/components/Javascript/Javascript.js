import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Javascript.css";
import Questions from "../Questions/Questions";

const Javascript = () => {
  const quiz = useLoaderData();

  return (
    <>
      <div>
        <Questions qz={quiz.data}></Questions>
      </div>
    </>
  );
};

export default Javascript;
