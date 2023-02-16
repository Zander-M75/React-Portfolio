import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {

    return (

        <header className={classes.header}>
            <div className={classes.logo}>Zander Marenberg</div>
            <nav>
                <ul>

                    <li>
                        <Link to='/React-Portfolio'>About Me</Link>
                    </li>

                    <li>
                        <Link to='/React-Portfolio/portfolio'>Portfolio</Link>
                    </li>

                    <li>
                        <Link to='/React-Portfolio/contact'>Contact Me</Link>
                    </li>

                    <li>
                        <Link to='/React-Portfolio/resume'>Resume</Link>
                    </li>

                </ul>
            </nav>
        </header>

    );

}

export default MainNavigation;