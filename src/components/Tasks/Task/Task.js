import classes from "./Task.module.css";
import { useState } from "react";
import NewTask from "../../NewTask/NewTask";

const Task = ({ items, addItem }) => {
  const [showNewTask, setShowNewTask] = useState(false);

  const showTaskHandler = () => {
    setShowNewTask(true);
  };

  const hideTaskHandler = () => {
    setShowNewTask(false);
  };

  return (
    <>
      <div className={classes.Task}>
        <div className={classes.Task__One}>
          <p className={classes.Task__pOne}>My Tasks</p>
          <button className={classes.Task__buttonOne}>...</button>
        </div>
        <button
          className={`${classes.Task__buttonTwo} ${classes.Task__buttonFour}`}
          onClick={showTaskHandler}
        >
          +
        </button>
        &nbsp;&nbsp;&nbsp;
        <span className={classes.Task__pTwo}>Add a task</span>
        <div className={classes.Task__Two}>
          <div>
            {items.map((item) => (
              <div className={classes.Task__data} key={item}>
                <input
                  type="checkbox"
                  id={item}
                  className={classes["styled-checkbox"]}
                />
                <label htmlFor={item}>&nbsp;</label>
                <p className={classes.Task__pOne}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showNewTask && <NewTask onClose={hideTaskHandler} addItem={addItem} />}
    </>
  );
};

export default Task;
