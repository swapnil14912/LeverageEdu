import Modal from '../UI/Modal';
import classes from './NewTask.module.css';
import {useState} from 'react';

const NewTask = (props) => {

  const [item, setItem] = useState('');

  const addTaskHandler = (e) => {
    e.preventDefault();
    props.addItem(item);
    props.onClose();
  }


  return (
    <Modal onClose={props.onClose}>
      <div className={classes.NewTask}>
        <div className={classes.NewTask__options}>
          <span>Add Task</span>
          <button onClick={props.onClose} className={classes.NewTask__optionsButton}>+</button>
        </div>
        <form className={classes.NewTask__form}>
          <input placeholder='Add title' onChange={(e)=>setItem(e.target.value)} />
          <textarea placeholder='Add details' rows={5} cols={10} />
        </form>
        <div className={classes.NewTask__optionsTwo}>
          <p>Add Date</p>
          <div>
            <p>Move to another list</p>
            <button className={classes.NewTask__optionsTwoButton} onClick={addTaskHandler}>Save</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NewTask;