import styles from '../css/Navigation.module.css';

import {Menu} from 'lucide-react';

export default function Navigation({isMobile, isOpen, setIsOpen}) {

    return (
        <>
            <nav id='home'>
                {isMobile &&    
                    <>
                        <h1 className={styles.logo}>Clark.</h1>
                        {!isOpen && <Menu onClick={() => setIsOpen(!isOpen)} className={styles.navButton}/>}
                    </>
                }

                {!isMobile &&
                    <div className={styles.navContainer}>
                        <a href="#hero">Home</a>
                        <a href="#projects">Projects</a>
                        <a href="#about">About</a>
                        <a href="#socials">Contact</a>
                    </div>
                }
            </nav>
        </>
    )
}