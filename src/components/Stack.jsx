import styles from '../css/Stack.module.css';
import { Layers, Cloud, Cog } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

export default function Stack({icon, title, stack}) {
    const containerRef = useRef(null);

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
                duration: .3,
                ease: 'power1.out'
            }
        )
    }, {scope: containerRef})


    return(
        <div className={styles.stackCard}>
            <div className={styles.animationContainer} ref={containerRef}>

                <div className={styles.introContainer}>
                    <div className={styles.iconContainer}>
                        {icon === 'layers' ? <Layers className={styles.stackIcon}/> : icon === 'cog' ? <Cog className={styles.stackIcon}/> : <Cloud className={styles.stackIcon}/>}
                    </div>
                    <h2 className={styles.introH2}>{title}</h2>
                </div>

                {stack.map((item, index) => (
                    <img src={item.logo} alt={item.name} className={styles.logos}/>
                ))}
                
            </div>

            <div className={styles.stackContainer}>
                {stack.map((item, _) => (
                    <p>{item.name}</p>
                ))}
            </div>
        </div>
    )
}