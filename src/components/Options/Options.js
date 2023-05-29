import React from "react";
import { useState } from "react";
import "./Options.css";

const Options = ({ question, i, onNext }) => {
  const { correctAnswer } = question;

  const text = question.question.split("p>");
  const quizName = text[1].split(`)</`);

  const onSelect = (e) => {
    const select = e.target.value;
    if (select === correctAnswer) {
      onNext(correctAnswer);
    }
  };
  return (
    <div className="options">
      <h2>
        <span className="quiz-name">Quiz:{i + 1} </span>
        {quizName} ?
      </h2>
      <ul>
        {question.options.map((quiz, index) => (
          <li key={index}>
            <input
              type="radio"
              value={quiz}
              name={correctAnswer}
              id={`q${quiz}-option`}
              onChange={onSelect}
            />
            <label className="text-primary" htmlFor={`q${quiz}-option`}>
              {quiz}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Options;
