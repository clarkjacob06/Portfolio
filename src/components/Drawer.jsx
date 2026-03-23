import styles from '../css/Drawer.module.css';

import { X } from 'lucide-react'
import { Mail } from 'lucide-react';
import {FileDown} from 'lucide-react';

export default function Drawer({ isOpen, setIsOpen }) {
    return (
        <>
            {isOpen &&
                <div className={styles.drawer}>
                    <X onClick={() => setIsOpen(false)} className={styles.navButton} />

                    <section className={styles.messageSection}>
                        <div className={styles.profileContainer}>
                            <img src="/profile.jpg" alt="profile photo" />
                        </div>

                        <a href="mailto: clarkjacob627@gmail.com"> <Mail className={styles.mailIcon} />Send an Email</a>
                    </section>

                    <section className={styles.navSection}>
                        <a href="#hero">Home</a>
                        <a href="#about">About me</a>
                        <a href="#project">Projects</a>
                        <a href="#contact">Socials</a>
                    </section>

                    <a href="/resume.pdf" download={'Clark_Jacob_CV'}  className={styles.resume}><FileDown className={styles.fileIcon}/>Download CV</a>
                </div>}
        </>
    )
}