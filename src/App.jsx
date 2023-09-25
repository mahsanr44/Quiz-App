import React, { useEffect, useMemo, useState } from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [username, setUsername] = useState(null);

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which region of the Moon is known as Dark side?",
      answers: [
        {
          text: "Equator",
          correct: false,
        },
        {
          text: "North Pole",
          correct: false,
        },
        {
          text: "Great Spot",
          correct: false,
        },
        {
          text: "South Pole",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which bridge in Turkey connects Asia and Europe?",
      answers: [
        {
          text: "Golden Gate Bridge",
          correct: false,
        },
        {
          text: "Akashi Kaikyo Bridge",
          correct: false,
        },
        {
          text: "Bosphorus Bridge",
          correct: true,
        },
        {
          text: "Royal Gorge Bridge",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "The Sun’s mass mainly consists of?",
      answers: [
        {
          text: "Hydrogen",
          correct: true,
        },
        {
          text: "Nitrogen",
          correct: false,
        },
        {
          text: "Carbon",
          correct: false,
        },
        {
          text: "None",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What is the most abundant form of matter in the universe?",
      answers: [
        {
          text: "Liquid",
          correct: false,
        },
        {
          text: "Plasma",
          correct: true,
        },
        {
          text: "Gas",
          correct: false,
        },
        {
          text: "Solid",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "The hottest month ever recorded on Earth was?",
      answers: [
        {
          text: "June 1968",
          correct: false,
        },
        {
          text: "July 1968",
          correct: false,
        },
        {
          text: "June 2023",
          correct: false,
        },
        {
          text: "July 2023",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "The atmosphere of the planet Mars is mostly consists of?",
      answers: [
        {
          text: "Hydrogen",
          correct: false,
        },
        {
          text: "Chlorine",
          correct: false,
        },
        {
          text: "Nitrogen",
          correct: false,
        },
        {
          text: "Carbon Dioxide",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "The amount of time taken by a device to begin reading data is called?",
      answers: [
        {
          text: "Seek Time",
          correct: false,
        },
        {
          text: "Read Time",
          correct: false,
        },
        {
          text: "Access Time",
          correct: true,
        },
        {
          text: "Write Time",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 10000" },
        { id: 9, amount: "$ 50000" },
        { id: 10, amount: "$ 100000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      { !username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {stop || questionNumber > 10  ? (
              <h1 className="endText">You Earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
        </>
      )}
      <div className="pyramid">
        <ul className="moneyList">
        <h1>Your Earning !!!</h1>
          {moneyPyramid.map((item) => (
            <li
            key={item.id}
              className={
                questionNumber === item.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{item.id}</span>
              <span className="moneyListItemAmmount">{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
