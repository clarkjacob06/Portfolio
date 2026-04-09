import styles from '../css/Hero.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);


export default function Hero() {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `.${styles.heroSection}`,
                start: 'top top',
                end: 'botto bottom',
                toggleActions: 'restart none none reverse'
            }
        })
    })

    return (
        <section className={styles.heroSection} id='hero'>
            <div className={styles.heroContainer}>

                <div className={styles.namePlate}>
                    <img src="/pixel.jpg" alt="pixel profile" />
                    <p>Hello! I'm Clark Jacob</p>
                </div>

                <div className={styles.intro}>
                    <h1>Web</h1>

                    <h1>Developer</h1>

                    <div>
                        <p>Specializing in <span>Front-end</span> development</p>
                        <p>with experience on <span>MERN</span> stack</p>
                    </div>
                </div>

                <div className={styles.contactContainer}>
                    <a href="https://github.com/clarkjacob06">
                        <img src="/svg/github.svg" alt="" className={styles.svg} />
                    </a>

                    <a href="https://linkedin.com/in/clark-jacob-ab74663a0">
                        <img src="/svg/linkedin.svg" alt="" className={styles.svg} />
                        </a>

                    <a href="mailto: clarkjacob627@gmail.com">
                        <img src="/svg/gmail.svg" alt="" className={styles.svg} />
                    </a>
                </div>
            </div>
        </section>
    )
}
