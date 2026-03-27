import styles from '../css/Hero.module.css';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className={styles.heroSection} id='hero'>
            <div className={styles.heroContainer}>
                <motion.div className={styles.namePlate}
                    initial={{
                        opacity: 0,
                        y: -50
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: .3 }
                    }}
                    viewport={{
                        amount: .5
                    }}>
                    <img src="/pixel.jpg" alt="pixel profile" />
                    <p>Hello! I'm Clark Jacob</p>
                </motion.div>

                <div className={styles.intro}>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            x: -50
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: .3, duration: .3 }
                        }}
                        viewport={{
                            amount: .5
                        }}
                    >Web</motion.h1>

                    <motion.h1
                        initial={{
                            opacity: 0,
                            x: 50
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: .4, duration: .3 }
                        }}
                        viewport={{
                            amount: .5
                        }}
                    >Developer</motion.h1>

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -50
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: .5, duration: .3 }
                        }}
                        viewport={{
                            amount: .5
                        }}>
                        <p>Specializing in <span>Front-end</span> development</p>
                        <p>with experience on <span>MERN</span> stack</p>
                    </motion.div>
                </div>

                <div className={styles.contactContainer}>
                    <motion.a href="https://github.com/clarkjacob06"
                        initial={{
                            scale: 0
                        }}
                        whileInView={{
                            scale: 1,
                            transition: { delay: .8, duration: .3 }
                        }}
                        viewport={{
                            amount: .5
                        }}
                    ><img src="/svg/github.svg" alt="" className={styles.svg} /></motion.a>

                    <motion.a href="https://linkedin.com/in/clark-jacob-ab74663a0"
                        initial={{
                            scale: 0
                        }}
                        whileInView={{
                            scale: 1,
                            transition: { delay: .9, duration: .3 }
                        }}
                        viewport={{
                            amount: .5
                        }}
                    ><img src="/svg/linkedin.svg" alt="" className={styles.svg} /></motion.a>

                    <motion.a href="mailto: clarkjacob627@gmail.com"
                        initial={{
                            scale: 0
                        }}
                        whileInView={{
                            scale: 1,
                            transition: { delay: 1, duration: .3 }
                        }}
                        viewport={{
                            amount: .5
                        }}>
                        <img src="/svg/gmail.svg" alt="" className={styles.svg} /></motion.a>
                </div>
            </div>
        </section>
    )
}
