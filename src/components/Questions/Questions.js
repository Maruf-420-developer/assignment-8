import React, { useState } from "react";
import "./Questions.css";
import Options from "../Options/Options";
import Result from "../Result/Result";

const Questions = ({ qz }) => {
  const { logo, name, questions } = qz;
  const [open, setOpen] = useState(true);
  const [answer, setAnswer] = useState([]);

  const onNext = (ans) => {
    if (answer.includes(ans)) {
      return;
    }
    const newAns = [...answer, ans];
    setAnswer(newAns);
    console.log(answer, newAns);
  };

  return (
    <div className="quiz">
      <div className="container">
        <h3>
          <img src={logo} alt="" />
          {name}
        </h3>

        <div className={`questiones ${open ? undefined : "hide"}`}>
          {/* <Options questions={questions}></Options> */}

          {questions.map((question, i) => (
            <Options
              question={question}
              onNext={onNext}
              i={i}
              key={question.id}
            ></Options>
          ))}
        </div>

        <div className={`${open ? "hide-result" : undefined}`}>
          <Result questions={questions} answer={answer} />
        </div>

        <div className="flex" onClick={() => setOpen(!open)}>
          {open ? (
            <button className="btn-next">Results</button>
          ) : (
            <button className="btn-next">Try Again</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questions;
