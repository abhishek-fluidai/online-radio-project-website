import React,{useState} from 'react';
import styles from './Nav.module.css'
import menuItem from '../../assets/Icons/menu.svg'

const Nav = () => {
    const [toggle, setToggle] = useState(false);
    const clickHandler = () => {
        setToggle(!toggle)
    }
    return (
        <div id={styles["nav"]} className={toggle ? styles["collapsed"] :''}>
            <div className={styles["logo"]} onClick={clickHandler}>
            <h4>Indi-FM</h4>
            </div>
            <div className={styles["item"]}>
            <img src={menuItem} className={styles["fas"]}/><span>Home</span>
            </div>
            
             <div className={styles["item"]}>
            <img src={menuItem} className={styles["fas"]}/><span>discover</span>
            </div>
        </div>
    )
}
export default Nav;