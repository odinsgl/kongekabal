import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";

const cardImages = [
  { src: "/img/1H.png", value: 1, suit: "H" },
  { src: "/img/2H.png", value: 2, suit: "H" },
  { src: "/img/3H.png", value: 3, suit: "H" },
  { src: "/img/4H.png", value: 4, suit: "H" },
  { src: "/img/5H.png", value: 5, suit: "H" },
  { src: "/img/6H.png", value: 6, suit: "H" },
  { src: "/img/7H.png", value: 7, suit: "H" },
  { src: "/img/8H.png", value: 8, suit: "H" },
  { src: "/img/9H.png", value: 9, suit: "H" },
  { src: "/img/10H.png", value: 10, suit: "H" },
  { src: "/img/11H.png", value: 11, suit: "H" },
  { src: "/img/12H.png", value: 12, suit: "H" },
  { src: "/img/13H.png", value: 13, suit: "H" },
  { src: "/img/1S.png", value: 1, suit: "S" },
  { src: "/img/2S.png", value: 2, suit: "S" },
  { src: "/img/3S.png", value: 3, suit: "S" },
  { src: "/img/4S.png", value: 4, suit: "S" },
  { src: "/img/5S.png", value: 5, suit: "S" },
  { src: "/img/6S.png", value: 6, suit: "S" },
  { src: "/img/7S.png", value: 7, suit: "S" },
  { src: "/img/8S.png", value: 8, suit: "S" },
  { src: "/img/9S.png", value: 9, suit: "S" },
  { src: "/img/10S.png", value: 10, suit: "S" },
  { src: "/img/11S.png", value: 11, suit: "S" },
  { src: "/img/12S.png", value: 12, suit: "S" },
  { src: "/img/13S.png", value: 13, suit: "S" },
  { src: "/img/1D.png", value: 1, suit: "D" },
  { src: "/img/2D.png", value: 2, suit: "D" },
  { src: "/img/3D.png", value: 3, suit: "D" },
  { src: "/img/4D.png", value: 4, suit: "D" },
  { src: "/img/5D.png", value: 5, suit: "D" },
  { src: "/img/6D.png", value: 6, suit: "D" },
  { src: "/img/7D.png", value: 7, suit: "D" },
  { src: "/img/8D.png", value: 8, suit: "D" },
  { src: "/img/9D.png", value: 9, suit: "D" },
  { src: "/img/10D.png", value: 10, suit: "D" },
  { src: "/img/11D.png", value: 11, suit: "D" },
  { src: "/img/12D.png", value: 12, suit: "D" },
  { src: "/img/13D.png", value: 13, suit: "D" },
  { src: "/img/1C.png", value: 1, suit: "C" },
  { src: "/img/2C.png", value: 2, suit: "C" },
  { src: "/img/3C.png", value: 3, suit: "C" },
  { src: "/img/4C.png", value: 4, suit: "C" },
  { src: "/img/5C.png", value: 5, suit: "C" },
  { src: "/img/6C.png", value: 6, suit: "C" },
  { src: "/img/7C.png", value: 7, suit: "C" },
  { src: "/img/8C.png", value: 8, suit: "C" },
  { src: "/img/9C.png", value: 9, suit: "C" },
  { src: "/img/10C.png", value: 10, suit: "C" },
  { src: "/img/11C.png", value: 11, suit: "C" },
  { src: "/img/12C.png", value: 12, suit: "C" },
  { src: "/img/13C.png", value: 13, suit: "C" },
];

const cardBack = { src: "/img/blue_back.png" };

function App() {
  const [stack1, setStack1] = useState([]);
  const [stack2, setStack2] = useState([]);
  const [stack3, setStack3] = useState([]);
  const [stack4, setStack4] = useState([]);
  const [drawPile, setDrawPile] = useState([]);
  const [border1, hideBorder1] = useState(false);
  const [border2, hideBorder2] = useState(false);
  const [border3, hideBorder3] = useState(false);
  const [border4, hideBorder4] = useState(false);
  const [score, setScore] = useState(0);

  const topStack1 = stack1[stack1.length - 1];
  const topStack2 = stack2[stack2.length - 1];
  const topStack3 = stack3[stack3.length - 1];
  const topStack4 = stack4[stack4.length - 1];

  //shuffle cards and give random ID
  const startGame = () => {
    addAllBorders();
    setStack1([]);
    setStack2([]);
    setStack3([]);
    setStack4([]);
    const shuffledCards = [...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setDrawPile(shuffledCards);
    const img = document.getElementById("pile");
    img.style.visibility = "visible";
  };

  const validRemove1 = () => {
    if (stack2.length !== 0) {
      if (
        topStack1.value < topStack2.value &&
        topStack1.suit === topStack2.suit
      ) {
        return true;
      }
    }
    if (stack3.length !== 0) {
      if (
        topStack1.value < topStack3.value &&
        topStack1.suit === topStack3.suit
      ) {
        return true;
      }
    }
    if (stack4.length !== 0) {
      if (
        topStack1.value < topStack4.value &&
        topStack1.suit === topStack4.suit
      ) {
        return true;
      }
    }
  };

  const validRemove2 = () => {
    if (stack1.length !== 0) {
      if (
        topStack2.value < topStack1.value &&
        topStack2.suit === topStack1.suit
      ) {
        return true;
      }
    }
    if (stack3.length !== 0) {
      if (
        topStack2.value < topStack3.value &&
        topStack2.suit === topStack3.suit
      ) {
        return true;
      }
    }
    if (stack4.length !== 0) {
      if (
        topStack2.value < topStack4.value &&
        topStack2.suit === topStack4.suit
      ) {
        return true;
      }
    }
  };

  const validRemove3 = () => {
    if (stack1.length !== 0) {
      if (
        topStack3.value < topStack1.value &&
        topStack3.suit === topStack1.suit
      ) {
        return true;
      }
    }
    if (stack2.length !== 0) {
      if (
        topStack3.value < topStack2.value &&
        topStack3.suit === topStack2.suit
      ) {
        return true;
      }
    }
    if (stack4.length !== 0) {
      if (
        topStack3.value < topStack4.value &&
        topStack3.suit === topStack4.suit
      ) {
        return true;
      }
    }
  };

  const validRemove4 = () => {
    if (stack1.length !== 0) {
      if (
        topStack4.value < topStack1.value &&
        topStack4.suit === topStack1.suit
      ) {
        return true;
      }
    }
    if (stack2.length !== 0) {
      if (
        topStack4.value < topStack2.value &&
        topStack4.suit === topStack2.suit
      ) {
        return true;
      }
    }
    if (stack3.length !== 0) {
      if (
        topStack4.value < topStack3.value &&
        topStack4.suit === topStack3.suit
      ) {
        return true;
      }
    }
  };

  useEffect(() => {
    updateScore();
    removeOrAddBorder();
    if (drawPile.length === 0) {
      const img = document.getElementById("pile");
      img.style.visibility = "hidden";
    }
  }, [stack1, stack2, stack3, stack4, drawPile]);

  const updateScore = () => {
    if (drawPile.length === 0)
      if (stack1.length === 1 && stack1[0].value === 13) {
        if (stack2.length === 1 && stack2[0].value === 13) {
          if (stack3.length === 1 && stack3[0].value === 13) {
            if (stack4.length === 1 && stack4[0].value === 13) {
              setScore(score + 1);
            }
          }
        }
      }
  };

  const removeAllBorders = () => {
    hideBorder1(true);
    hideBorder2(true);
    hideBorder3(true);
    hideBorder4(true);
  };

  const addAllBorders = () => {
    hideBorder1(false);
    hideBorder2(false);
    hideBorder3(false);
    hideBorder4(false);
  };

  const handleRemove = (stack) => {
    if (stack === stack1 && validRemove1()) {
      setStack1((stack1) => [...stack1.slice(0, -1)]);
    } else if (stack === stack2 && validRemove2()) {
      setStack2((stack2) => [...stack2.slice(0, -1)]);
    } else if (stack === stack3 && validRemove3()) {
      setStack3((stack3) => [...stack3.slice(0, -1)]);
    } else if (stack === stack4 && validRemove4()) {
      setStack4((stack4) => [...stack4.slice(0, -1)]);
    }
    removeOrAddBorder();
  };

  const deal = () => {
    removeAllBorders();
    setStack1((stack1) => [...stack1, drawPile.pop()]);
    setStack2((stack2) => [...stack2, drawPile.pop()]);
    setStack3((stack3) => [...stack3, drawPile.pop()]);
    setStack4((stack4) => [...stack4, drawPile.pop()]);
  };

  const removeOrAddBorder = () => {
    if (stack1.length !== 0) {
      hideBorder1(true);
    } else {
      hideBorder1(false);
    }
    if (stack2.length !== 0) {
      hideBorder2(true);
    } else {
      hideBorder2(false);
    }
    if (stack3.length !== 0) {
      hideBorder3(true);
    } else {
      hideBorder3(false);
    }
    if (stack4.length !== 0) {
      hideBorder4(true);
    } else {
      hideBorder4(false);
    }
  };

  const drop = (e) => {
    e.preventDefault();
    const stacks = [stack1, stack2, stack3, stack4];

    const src = e.dataTransfer.getData("cardToMove");
    let rightCard = 0;
    for (let i = 0; i < stacks.length; i++) {
      if (stacks[i].length !== 0) {
        if (stacks[i].slice(-1)[0].src === src) {
          rightCard = stacks[i].slice(-1)[0];
        }
      }
    }

    if (e.target.id === "rectangleVisible1") {
      setStack1((stack1) => [...stack1, rightCard]);
    } else if (e.target.id === "rectangleVisible2") {
      setStack2((stack2) => [...stack2, rightCard]);
    } else if (e.target.id === "rectangleVisible3") {
      setStack3((stack3) => [...stack3, rightCard]);
    } else if (e.target.id === "rectangleVisible4") {
      setStack4((stack4) => [...stack4, rightCard]);
    }

    if (stack1.includes(rightCard)) {
      setStack1((stack1) => [...stack1.slice(0, -1)]);
    } else if (stack2.includes(rightCard)) {
      setStack2((stack2) => [...stack2.slice(0, -1)]);
    } else if (stack3.includes(rightCard)) {
      setStack3((stack3) => [...stack3.slice(0, -1)]);
    } else if (stack4.includes(rightCard)) {
      setStack4((stack4) => [...stack4.slice(0, -1)]);
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <div className="App">
        <h1>Kongekabal</h1>
      </div>
      <div className="flex">
        <div className="cardStack" onDrop={drop} onDragOver={dragOver}>
          <div id={border1 ? "rectangleHidden" : "rectangleVisible1"}>
            {stack1.map((card) => (
              <Card
                key={card.id}
                card={card}
                stack={stack1}
                handleRemove={handleRemove}
              />
            ))}
          </div>
        </div>

        <div className="cardStack" onDrop={drop} onDragOver={dragOver}>
          <div id={border2 ? "rectangleHidden" : "rectangleVisible2"}>
            {stack2.map((card) => (
              <Card
                draggable="true"
                key={card.id}
                card={card}
                stack={stack2}
                handleRemove={handleRemove}
              />
            ))}
          </div>
        </div>

        <div className="cardStack" onDrop={drop} onDragOver={dragOver}>
          <div id={border3 ? "rectangleHidden" : "rectangleVisible3"}>
            {stack3.map((card) => (
              <Card
                draggable="true"
                key={card.id}
                card={card}
                stack={stack3}
                handleRemove={handleRemove}
              />
            ))}
          </div>
        </div>
        <div className="cardStack" onDrop={drop} onDragOver={dragOver}>
          <div id={border4 ? "rectangleHidden" : "rectangleVisible4"}>
            {stack4.map((card) => (
              <Card
                draggable="true"
                key={card.id}
                card={card}
                stack={stack4}
                handleRemove={handleRemove}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="pile">
        <img id="pile" onClick={deal} src={cardBack.src} alt="card back"></img>
        <h2>Wins this session: {score}</h2>
      </div>
      <div className="cardsLeft">
        <h2>Cards left in pile: {drawPile.length}</h2>
      </div>

      <div className="btn">
        <button className="button" onClick={startGame}>
          New Game
        </button>
      </div>
    </React.Fragment>
  );
}

export default App;
