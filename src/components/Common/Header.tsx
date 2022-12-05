import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'
export const Header: React.FC = () => {
 
    return (
        <nav className={classes.navbar}>
            <a href="#" className={classes.logo}>BOOK Shelf</a>
            <div className={classes.nav__links}>
                <ul className={classes.nav__menu}>
                    <li >  <NavLink className={({ isActive }) => (
                                isActive
                                    ? classes.active : "")} to={'/search'}> search</NavLink ></li>
                    <li> <NavLink className={({ isActive }) => (
                                isActive
                                    ? classes.active : "")} to={'/'}>
                        Home
                    </NavLink></li>
                

                </ul>
            </div>

        </nav>
    );
}

