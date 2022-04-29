import { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./NewList.module.css";

const NewList = (props) => {
  const [newList, setNewList] = useState(false);
  const showNewListHandler = () => {
    setNewList(true);
  };
  const hideNewListHandler = () => {
    setNewList(false);
  };
  const newListHandler = (e) => {
    e.preventDefault();
    hideNewListHandler();
  }
  return (
    <>
      <div className={classes.NewList}>
        <button
          className={classes.NewList__buttonOne}
          onClick={showNewListHandler}
        >
          +
        </button>
      </div>
      {newList && <Modal onClose={hideNewListHandler}>
        <form className={classes.NewList__form}>
          <input placeholder="New List" />
          <button onClick={newListHandler}>+</button>
        </form>
        </Modal>}
    </>
  );
};

export default NewList;
