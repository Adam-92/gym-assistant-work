import { useState } from "react";
import { useForm } from "react-hook-form";
import { Tip } from "../../model/Tips.model";
import "./Tips.css";

const Tips = () => {
  const [tips, setTips] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  

  const addTip = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setTips([...tips, inputValue]);
    setInputValue("");
  };
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="container-tips">
      <div>
        <header className="header-exercise-form">
          Enter tips - optional:
        </header>
        <div className="enter-tips">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => changeValue(e)}
          />
          <button type="submit" onClick={addTip} >ADD</button>
        </div>
      </div>
      <ul className="add-tips">
        {tips.map((tip: string, index: number) => {
          return <li key={index}>{tip}</li>;
        })}
      </ul>
      {tips.length === 0 && (
        <ul className="add-tips example-tips">
          For Example:
          <li>Set machine seat on 4 height</li>
          <li>Remember to straight arms while ending repetition </li>
          <li>Remember to straight arms while ending repetition </li>
        </ul>
      )}
    </div>
  );
};

export default Tips;
