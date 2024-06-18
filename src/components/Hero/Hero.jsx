import React from "react";
import styles from  './Hero.module.css';

import { getImageUrl } from "../../utils";

export const Hero = () =>
{
    return(
        <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> Hi,I'm Gopi</h1>
            <p className={styles.description}>I'm a Full-Stack Developer 
                    
             </p>
             
             <a href="https://drive.google.com/file/d/117Agj9FqDWQiUN-h0N_6ydNw4KoSFbxc/view?usp=drivesdk" className={styles.contactBtn}> Download CV</a>
        </div>
        <img src={getImageUrl("hero/pro.jpg")} alt=" Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur}/>
        <div className={styles.bottonBlur} />
        </section>
    );
}