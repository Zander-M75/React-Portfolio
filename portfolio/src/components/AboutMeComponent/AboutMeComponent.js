
import React from 'react';
import styles from './AboutMeComponent.module.css';
import headshot from '../../images/headshot.jpeg';

function AboutMeComponent() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src={headshot} alt="headshot" className={styles.photo} />
                <div className={styles.content}>
                    <h1>About Me</h1>
                    <p>
                        Hi there! I'm a web developer with a passion for creating beautiful and functional websites. I have experience with various web technologies and I'm always learning new things to improve my skills. In my free time, I enjoy hiking, reading, and playing video games.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMeComponent;


