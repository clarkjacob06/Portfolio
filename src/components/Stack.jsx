import styles from '../css/Stack.module.css';
import { Layers, Cloud, Cog } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useState } from 'react';
gsap.registerPlugin(ScrollTrigger);

import { ChevronDown } from 'lucide-react';

export default function Stack({ icon, title, stack }) {
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 60%',
                end: 'bottom 10%',
                toggleActions: 'restart none none reverse',
            }
        })

        tl.fromTo(`.${styles.introContainer}`,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'elastic.out'
            }
        )
            .fromTo(`.${styles.introH2}`,
                {
                    maxWidth: 0,
                    opacity: 0
                },
                {
                    opacity: 1,
                    maxWidth: 100,
                    duration: .4,
                    ease: 'power1.out'
                }
            )
            .fromTo(`.${styles.carouselContainer}`,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    flex: .5,
                    duration: .8,
                    ease: 'power1.out'
                },
                '-=.4'
            )
            .fromTo(`.${styles.bgIcon}`, 
                {
                    x: -50,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: .02,
                    duration: .5
                },
                '-=.8'
            )
            .fromTo(`.${styles.showBtn}`,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: .5,
                }
            )

    }, { scope: cardRef })

    function handleClick() {
        setIsVisible(!isVisible);

        gsap.to(cardRef.current,
            {
                height: isVisible ? '300px' : 'calc(300px - 90px)',
                duration: .5,
                ease: 'expo.out'
            }
        )
    }


    return (
        <div className={styles.stackCard} ref={cardRef} onClick={handleClick}>
            <div className={styles.animationContainer} ref={containerRef}>

                <div className={styles.introWrapper}>
                    <div className={styles.introContainer}>
                        <div className={styles.iconContainer}>
                            {icon === 'layers' ? <Layers className={styles.stackIcon} /> : icon === 'cog' ? <Cog className={styles.stackIcon} /> : <Cloud className={styles.stackIcon} />}
                        </div>
                        <h2 className={styles.introH2}>{title}</h2>
                    </div>
                </div>

                <div className={styles.carouselContainer}>
                    <div className={styles.logoContainer}>
                        {stack.map((item, i) => (
                            <img src={item.logo} alt={item.name} className={styles.logos} key={i} />
                        ))}
                    </div>

                    <div className={styles.logoContainer}>
                        {stack.map((item, i) => (
                            <img src={item.logo} alt={item.name} className={styles.logos} key={i} />
                        ))}
                    </div>

                    <div className={styles.logoContainer}>
                        {stack.map((item, i) => (
                            <img src={item.logo} alt={item.name} className={styles.logos} key={i} />
                        ))}
                    </div>
                </div>

            </div>

            <div className={styles.stackContainer}>
                {stack.map((item, _) => (
                    <p>{item.name}</p>
                ))}
            </div>

            <div className={styles.showBtn} onClick={handleClick}>
                <ChevronDown className={styles.icon}></ChevronDown>
            </div>
{/* 
            {isVisible && <div className={styles.showBtn} onClick={handleClick}>
                <ChevronDown className={styles.icon}></ChevronDown>
            </div>} */}


            {/* for displaying background icons */}
            {
                icon === 'layers' ? <Layers className={styles.bgIcon} /> : 
                icon === 'cog' ? <Cog className={styles.bgIcon} /> : 
                <Cloud className={styles.bgIcon} />
            }

        </div>
    )
}