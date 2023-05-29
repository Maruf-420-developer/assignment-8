import React from "react";
import "./Result.css";

const Result = ({ questions, answer }) => {
  console.log(answer);
  return (
    <div className="result">
      <h2>Result</h2>
      <p>
        Your Score <span> {answer.length} </span> out of
        <span> {questions.length} </span>
      </p>

      <ul>
        <p>Your Correct Answer</p>
        {answer.map((ans, i) => (
          <li key={i}>
            <span>Ans: {i + 1}</span>
            {ans}
          </li>
        ))}
      </ul>
      <ul>
        <p>All Correct Answer</p>
        {questions.map((quiz, i) => (
          <li key={i}>
            <span>Quiz: {i + 1}</span>
            {quiz.correctAnswer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
