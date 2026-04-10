import styles from '../css/Hero.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);


export default function Hero() {

    useGSAP(() => {
        const tl = gsap.timeline();
        const contacts = gsap.utils.toArray(`.${styles.svg}`);

        tl.fromTo(`.${styles.nameplateImg}`,
            {
                x: -100,
                rotation: -360
            },
            {
                x: 0,
                rotation: 180,
                duration: 1,
                ease: 'power1.out'
            }
        )
        .fromTo(`.${styles.nameplateP}`,
            {
                opacity: 0,
                scale: 0,
            },
            {
                opacity: 1,
                scale: 1,
                transformOrigin: 'bottom left',
                duration: .3,
                ease: 'power1.out',
            }
        )
        .to(`.${styles.horizontalLine}`,
            {
                scaleX: 1
            },
            '+=.3'
        )
        .to(`.${styles.introH1}`,
            {
                scaleY: 1,
                duration: .4

            },
            '+=.2'
        )
        .to(`.${styles.introP}`,
            {
                scaleY: 1,
                duration: .4,
                transformOrigin: 'top'
            },
            '-=.4'
        )
        .to(`.${styles.horizontalLine}`,
            {
                scaleX: 0
            }
        )
        .fromTo(contacts, 
            {
                scale: 0
            },
            {
                scale: 1,
                duration: .3,
                ease: 'power2.out',
                stagger: .1
            }
        )
    })

    return (
        <section className={styles.heroSection} id='hero'>
            <div className={styles.heroContainer}>

                <div className={styles.namePlate}>
                    <img src="/pixel.jpg" alt="pixel profile" className={styles.nameplateImg}/>
                    <p className={styles.nameplateP}>Hello! I'm Clark Jacob</p>
                </div>
            
                <div className={styles.intro}>
                    <h1 className={styles.introH1}>Web Developer</h1>
                    <hr className={styles.horizontalLine}/>
                    <div className={styles.introP}>
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
