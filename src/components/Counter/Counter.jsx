// 1 шаг: импортировать функцию хук useState из библиотеки React
import { useState } from "react";

import Button from "../Button/Button";
import "./styles.css";

function Counter() {
  // При старом способе компонент Counter не перезагружается и
  // не может показать на странице актуальное значение переменной count (не происходит перерендер)
  //   let count = 0;
  //   console.log("Count in Counter component: ", count);

  //   const onPlus = () => {
  //     // Тут пишем логику по увеличению значения счетчика на 1
  //     count++;
  //     console.log("Count in onPlus function: ", count);
  //   };
  //   const onMinus = () => {
  //     // Тут пишем логику по уменьшению значения счетчика на 1
  //     count--;
  //     console.log("Count in onMinus function: ", count);
  //   };

  // Синтаксис без деструктуризации
  //   const state = useState(0);
  //   console.log(state);
  //   console.log(state[0]);
  //   console.log(state[1]);

  // Синтаксис с деструктуризации
  const [count, setCount] = useState(0);
  console.log(count);
  console.log(setCount);

  const onPlus = () => {
    console.log("+");
    // Тут пишем логику по увеличению значения счетчика на 1
    setCount((prevValue) => {
      console.log(prevValue);
      return prevValue + 1;
    });
  };
  const onMinus = () => {
    console.log("-");
    // Тут пишем логику по уменьшению значения счетчика на 1
    setCount((prevValue) => {
      console.log(prevValue);
      return prevValue - 1;
    });
  };

  // Пример 1
  //   const [personName, setPersonName] = useState("John");

  //   const changeName = () => {
  //     setPersonName("John Johnson");
  //   };

  // Пример 2
  //   const [animal, setAnimal] = useState(["Pig", "Cat", "Dog"]);

  //   const addRat = () => {
  //     setAnimal((prevValue) => {
  //       return [...prevValue, "Rat"];
  //     });
  //   };

  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button buttonName="+" onClick={onPlus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button buttonName="-" onClick={onMinus} />
      </div>
      {/* Пример 1 */}
      {/* {personName}
      <div className="button_control">
        <Button buttonName="Add last name" onClick={changeName}></Button>
      </div> */}

      {/* Пример 2 */}
      {/* {animal}
      <div className="button_control">
        <Button buttonName="Add Rat" onClick={addRat}></Button>
      </div> */}
    </div>
  );
}

export default Counter;
