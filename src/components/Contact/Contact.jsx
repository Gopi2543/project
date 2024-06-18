import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return(<footer id="contact" className={styles.container}>
        <div className={styles.text}> <h2>Contact </h2>
            <p>Feel free to  reach out !</p>

        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")}alt="gmailcom" />
                <a href="mailto:dhavagopi8816@gamil.com"> Email.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")}alt="linkedin" />
                <a href="https://www.linkedin.com/in/gopi-d-0169a8254">Linkedin.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")}alt="github" />
                <a href="https://github.com/Gopi2543/project.git">Github.com</a>
            </li>
        </ul>
    </footer>

    );
};