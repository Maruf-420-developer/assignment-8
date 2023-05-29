import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const Git = () => {
  const quiz = useLoaderData();
  return (
    <div>
      <Questions qz={quiz.data}></Questions>
    </div>
  );
};

export default Git;
