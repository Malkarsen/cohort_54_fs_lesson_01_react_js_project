// Lessons
import Lesson_02 from "./lessons/Lesson_02_JSX_Components/Lesson_02";
import Lesson_03 from "./lessons/Lesson_03_Props/Lesson_03";
import Lesson_04 from "./lessons/Lesson_04_useState_triggers/Lesson_04";

// Homeworks
import Homework_02 from "./homeworks/Homework_02_JSX_Components/Homework_02";
import Homework_03 from "./homeworks/Homework_03_Props/Homework_03";
import Homework_04 from "./homeworks/Homework_04_useState_triggers/Homework_04";

// Consultations

import "./App.css";

function App() {
  return (
    <div className="app">
      {/*Lessons*/}
      {/* <Lesson_02 /> */}
      {/* <Lesson_03 /> */}
      {/* <Lesson_04 /> */}

      {/*Homeworks*/}
      {/* <Homework_02 /> */}
      {/* <Homework_03 /> */}
      <Homework_04 />
    </div>
  );
}

export default App;
