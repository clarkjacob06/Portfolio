import styles from '../css/Drawer.module.css';

import { X } from 'lucide-react'
import { FileDown } from 'lucide-react';

export default function Drawer({ setIsOpen }) {
    return (
        <div className={styles.drawer}>
            <X onClick={() => setIsOpen(false)} className={styles.navButton} />

            <section className={styles.messageSection}>
                <div className={styles.profileContainer}>
                    <img src="/pixel_transparent.avif" alt="profile photo" />
                </div>

                <a href="/resume.pdf" download={'Clark_Jacob_CV'}> <FileDown className={styles.fileIcon} />Download CV</a>
            </section>

            <section className={styles.navSection} >
                <a href="#" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#project" onClick={() => setIsOpen(false)}>Projects</a>
                <a href="#about" onClick={() => setIsOpen(false)}>About me</a>
                <a href="#socials" onClick={() => setIsOpen(false)}>Socials</a>
            </section>
        </div>
    )
}