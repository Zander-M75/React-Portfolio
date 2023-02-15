import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';

function Navbar() {

    return (

        <header className={classes.header}>
            <div className={classes.logo}>Zander Marenberg</div>
            <nav>
                <ul>

                    <li>
                        <Link to='/'>About Me</Link>
                    </li>

                    <li>
                        <Link to='/portfolio'>Portfolio</Link>
                    </li>

                    <li>
                        <Link to='/contact'>Contact Me</Link>
                    </li>

                    <li>
                        <Link to='/resume'>Resume</Link>
                    </li>

                </ul>
            </nav>
        </header>

    );

}

export default MainNavigation;