// import Image from "next/image";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  let images = `https://picsum.photos/99/`;

  return (
    <>
      <div className={classes.Header}>
        <div className={classes.Header__One}>
          <p className={classes.Header__pOne}>
            <Link to="/tasksboard" className={classes.link}>
              Tasksboard
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link className={classes.link} to="/weather">
              Weather
            </Link>
          </p>
        </div>
        <img
          alt="user"
          src={images}
          width={50}
          height={50}
          style={{ borderRadius: "100%" }}
        />
      </div>
    </>
  );
};

export default Header;
