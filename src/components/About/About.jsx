import React from "react";
import { getImageUrl } from "../../utils";
import styles from './About.module.css';



export const About = () =>{
    return(<section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/about4.jpg")} 
            alt=" Me sitting with a laptop"  className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
                    <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>
                        I'm a frontend developer with experience in bulid and 
                        optimized sites
                    </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="server" />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>
                        I have  experience  developing fast  and 
                        optimized back-end systems
                        
                    </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="server" />
                <div className={styles.aboutItemText}>
                    <h3>Application Support Engineer</h3>
                    <p>
                    I have five months of experience as an Application Support Engineer at IPS, where I gained valuable skills in troubleshooting and resolving software issues.                        
                    </p>
                    </div>
                </li>
            </ul>
        </div>
        
    </section>);
}