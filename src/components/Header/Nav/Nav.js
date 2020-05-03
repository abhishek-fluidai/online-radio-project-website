import React from 'react';
import styles from './Nav.module.css';
import menuicon from '../../../assets/Icons/menu.svg'
const Nav = () => {
    
    return(
   <nav>
        <img src={menuicon} alt="menu" className={styles["btn"]} />
      <ul>
        <li className={styles["btn"]}><img src={menuicon} alt="menu" /></li>
        <div className={styles["items"]}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </div>
     {//<li className={styles["search-icon"]}>
//          <input type="search" placeholder="Search" />
//          <label className={styles["icon"]}>
//            <span ></span>
//          </label>
//        </li>
        }
      </ul>
    </nav>
    )
}
export default Nav;