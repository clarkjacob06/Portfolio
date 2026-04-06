import styles from '../css/Drawer.module.css';

import { X } from 'lucide-react'
import { FileDown } from 'lucide-react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';

export default function Drawer({ setIsOpen }) {

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo(`.${styles.profileContainer}`,
            {
                y: -100,
                x: 20
            }, {
                y: 0,
                ease: 'bounce.out',
                duration: 1
            })
            .to(`.${styles.profileContainer}`, 
                {
                    x: -20,
                    ease: 'power1.out',
                    duration: .3
                }
            )
            .fromTo(`.${styles.statusText}`,
                {
                    maxWidth: 0,
                },
                {
                    maxWidth: 100,
                    marginLeft: 3, 
                    transformOrigin: 'left',
                    duration: .3,
                    ease: 'power1.out'
                },
                '-=.2'
            )
    });

    return (
        <div className={styles.drawer}>
            <X onClick={() => setIsOpen(false)} className={styles.navButton} />

            <section className={styles.messageSection}>
                <div className={styles.profileContainer}>
                    <img src="/pixel_transparent.avif" alt="profile photo"/>
                    <div className={styles.status}>
                        <div className={styles.greenIcon}></div>
                        <div className={styles.statusText}>Available to work</div>
                    </div>
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
}9