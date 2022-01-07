import { DisplayInput } from "./DisplayInput/DisplayInput";
import { useState } from "react";
import { ActionsPart } from "./Actions/ActionsPart";

export function Calculator() {
  const [firstArg, setFirstArg] = useState([]);
  const [secondArg, setSecondArg] = useState([]);
  const [action, setAction] = useState(null);
  const [isActionSet, setIsActionSet] = useState(false);

  const handleClickNumber = (item) => {
    if (!action) {
      const newFirstArg = [...firstArg];
      newFirstArg.push(item);
      setFirstArg(newFirstArg);
      console.log("newFirstArg", newFirstArg);
    } else {
      const newSecondArg = [...secondArg];
      newSecondArg.push(item);
      setSecondArg(newSecondArg);
      console.log("newSecondArg", newSecondArg);
    }
  };

  const handleSign = () => {
    if (!action) {
      const newFirstArg = [...firstArg];
      if (newFirstArg[0] === "-") newFirstArg.shift();
      else newFirstArg.unshift("-");
      console.log(newFirstArg);
      setFirstArg(newFirstArg);
    } else {
      const newSecondArg = [...secondArg];
      if (newSecondArg[0] === "-") newSecondArg.shift();
      else newSecondArg.unshift("-");
      console.log(newSecondArg);
      setSecondArg(newSecondArg);
    }
  };

  const handleDote = () => {
    if (!action) {
      const newFirstArg = [...firstArg];
      if (newFirstArg[newFirstArg.length - 1] === ".") newFirstArg.pop();
      else if (newFirstArg.includes(".")) return;
      else newFirstArg.push(".");
      console.log(newFirstArg);
      setFirstArg(newFirstArg);
    } else {
      const newSecondArg = [...secondArg];
      if (newSecondArg[newSecondArg.length - 1] === ".") newSecondArg.pop();
      else if (newSecondArg.includes(".")) return;
      else newSecondArg.push(".");
      console.log(newSecondArg);
      setSecondArg(newSecondArg);
    }
  };

  const handleAC = () => {
    setFirstArg([]);
    setSecondArg([]);
    setAction(null);
    setIsActionSet(false);
  };

  const handleAction = (type) => {
    setAction(type);
    setIsActionSet(true);
  };

  const handleEqualAndPercent = (type) => {
    let res;
    if (type === "%") {
      res = Number(firstArg.join("")) / 100;
    } else {
      const firstNum = Number(firstArg.join(""));
      const secondNum = Number(secondArg.join(""));
      switch (action) {
        case "/":
          res = firstNum / secondNum;
          break;
        case "*":
          res = firstNum * secondNum;
          break;
        case "+":
          res = firstNum + secondNum;
          break;
        default:
          res = firstNum - secondNum;
          break;
      }
    }
    setFirstArg([res]);
    setSecondArg([]);
    setAction(null);
    setIsActionSet(false);
  };

  const handleClick = (type) => {
    if (typeof type === "number") {
      if (
        type === 0 &&
        ((firstArg[0] === "0" && firstArg.length === 1) ||
          (secondArg[0] === "0" && secondArg.length === 1))
      )
        return;
      else handleClickNumber(String(type));

      return;
    }

    switch (type) {
      case "+/-":
        handleSign();
        break;
      case ".":
        handleDote();
        break;
      case "AC":
        handleAC();
        break;
      case "%":
        handleEqualAndPercent(type);
        break;
      case "=":
        handleEqualAndPercent(type);
        break;
      default:
        handleAction(type);
        break;
    }
  };

  return (
    <>
      <DisplayInput
        firstArg={firstArg}
        secondArg={secondArg}
        isActionSet={isActionSet}
      />
      <ActionsPart handleClick={handleClick} />
    </>
  );
}
