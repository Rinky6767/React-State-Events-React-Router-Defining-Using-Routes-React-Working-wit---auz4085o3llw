import React from "react";
import { useSearchParams } from "react-router-dom";

export const Calculator = () => {
  let param = useSearchParams();
  let data = param[0];
  let num1 = parseInt(data.get("num1"), 10);
  let num2 = parseInt(data.get("num2"), 10);
  let op = unescape(data.get("op"));
  let res;
  switch (op) {
    case "+":
      res = num1 + num2;
      break;

    case "-":
      res = num1 - num2;
      break;

    case "*":
      res = num1 * num2;
      break;

    case "/":
      res = num1 / num2;
      break;

    case "%":
      res = num1 % num2;
      break;

    default:
      res = 0;
  }

  return (
    <>
      <div>
        Your calculation Result is
        <span id="calc-result"> {res}</span>
      </div>
    </>
  );
};
