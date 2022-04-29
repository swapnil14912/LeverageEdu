import Header from "../Header/Header";
import NewList from "../NewList/NewList";
import Task from "./Task/Task";
import classes from "./Tasks.module.css";

const Tasks = (props) => {

    document.body.style.backgroundColor = "white";

    return(
        <>
            <Header/>
            <div className={classes.Tasks}>
                <Task items={props.items} addItem={props.addItem} />
            </div>
            <NewList onClose={props.onClose} />
        </>
    );
}

export default Tasks;