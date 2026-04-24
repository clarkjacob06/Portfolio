import styles from '../css/Navigation.module.css';

import { Menu, FileDown } from 'lucide-react';

export default function Navigation({ isMobile, isOpen, setIsOpen }) {

    return (
        <>
            <nav id='home'>
                {isMobile &&
                    <>
                        <h1 className={styles.logo}>Clark.</h1>
                        {!isOpen && <Menu onClick={() => setIsOpen(!isOpen)} className={styles.navButton} />}
                    </>
                }

                {!isMobile &&
                    <>
                        <h1 className={styles.logo}>Clark.</h1>

                        <div className={styles.navContainer}>
                            <a href="#hero">Home</a>
                            <a href="#projects">Projects</a>
                            <a href="#about">About me</a>
                            <a href="#socials">Contacts</a>
                        </div>

                        <a href="/resume.pdf" download={'Clark_Jacob_CV'} className={styles.cvContainer}>
                            <FileDown className={styles.icon} />
                            <p>Download CV</p>
                        </a>
                    </>
                }
            </nav>
        </>
    )
}