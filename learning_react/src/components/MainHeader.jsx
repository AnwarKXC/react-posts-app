import { Link } from "react-router-dom";
import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./components_style/MainHeader.module.css";

function MainHeader() {
   return (
      <header className={classes.header}>
         <h1 className={classes.logo}>
            <MdMessage />
            React Poster
         </h1>
         <p>
            <Link to="/create-post" className={classes.button}>
               <MdPostAdd size={18} />
               New Post
            </Link>
         </p>
      </header>
   );
}

export default MainHeader;
