import styles from '../css/Projects.module.css';
import { Smartphone, Laptop, Globe, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Scroll from './Scroll';

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    
    const projects = [{
        image: '/projectImages/open_notes.avif',
        name: 'Open Notes',
        url: 'https://mern-opennotes.onrender.com',
        stack: ['mongodb.svg', 'expressdotjs.svg', 'react.svg', 'nodedotjs.svg'],
        description: 'A note-management system for your everyday notes.',
        date: 'Mar 1, 2026',
        device: [<Smartphone className={styles.device} />, <Laptop className={styles.device} />]
    },
    {
        image: '/projectImages/real_estate.avif',
        name: 'Real Estate Home Page',
        url: 'https://marcimetzgerweb.netlify.app/',
        stack: ['html5.svg', 'css.svg', 'javascript.svg'],
        description: 'A simple home page design for real estate inquiries.',
        date: 'Jan 14, 2026',
        device: [<Laptop className={styles.device} />]
    },
    {
        image: '/projectImages/quiz_quest.avif',
        name: 'Quiz Quest',
        url: 'https://quizquestss.netlify.app/',
        stack: ['html5.svg', 'css.svg', 'javascript.svg'],
        description: 'An E-Learning website to deepen and challenge your programming knowledge.',
        date: 'Nov 9, 2025',
        device: [<Laptop className={styles.device} />]
    },
    {
        image: '/projectImages/web_bundy.avif',
        name: 'Web Bundy',
        url: 'https://webbundy.netlify.app/',
        stack: ['html5.svg', 'css.svg', 'javascript.svg'],
        description: 'A timekeeping system to track your total hours working as an intern.',
        date: 'Oct 13, 2025',
        device: [<Laptop className={styles.device} />]
    },
    {
        image: '/projectImages/steam_clone.avif',
        name: 'Steam Clone',
        url: 'https://steamshopclone.netlify.app/',
        stack: ['html5.svg', 'css.svg', 'javascript.svg'],
        description: 'A steam shop clone website for fun :)',
        date: 'Dec 1, 2024',
        device: [<Laptop className={styles.device} />]
    }
    ]

    const otherProjects = [
        {
            image: '/projectImages/beyond_the_woods.avif',
            name: 'Beyond the Woods',
            url: 'https://ceejaygamedev.itch.io/beyond-the-woods',
            stack: ['csharp.svg', 'unity.svg'],
            description: 'A 3D-survival horror game for a school project.',
            date: 'Jun 24, 2025',
            device: [<Laptop className={styles.device} />]
        },
        {
            image: '/projectImages/dotify.avif',
            name: 'Dotify',
            url: 'https://dotifyed.netlify.app/',
            stack: ['html5.svg', 'css.svg'],
            description: 'My first ever website, spotify clone.',
            date: 'Nov 28, 2023',
            device: [<Laptop className={styles.device} />]
        }
    ]

    useEffect(() => {
        ScrollTrigger.refresh()
    }, [isOpen])

    useGSAP(() => {
        gsap.utils.toArray(`.${styles.projectCard}`).forEach((card) => {
            gsap.fromTo(card, 
                {
                    scale: 0,
                    transformOrigin: 'bottom left'
                },
                {
                    scale: 1,
                    duration: .1,
                    ease: 'sine.out',
                    scrollTrigger: {
                        trigger: card,
                        toggleActions: 'restart none none reverse',
                        start: 'top 90%',
                        end: 'bottom 30%',
                    }
                }
            )
        })

        gsap.fromTo(`.${styles.showBtn}`, 
            {
                scale: 0
            },
            {
                scale: 1,
                duration: .3,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: `.${styles.showBtn}`,
                    start: 'top 90%',
                    toggleActions: 'restart none none reverse'
                }
            }
        )

        ScrollTrigger.create({
            trigger: `.${styles.projectSection}`,
            pin: true,
            pinSpacing: false,
            start: 'bottom 70%'
        })
    })

    useEffect(() => {
        const windowResize = () => {
            window.innerWidth >= 768 && setIsMobile(false);
        }

        windowResize();
        window.addEventListener('resize', windowResize);

        return () => removeEventListener('resize', windowResize);
    })

    return (
        <>
            <section className={styles.projectSection}>
                <div id='projects'></div>
                <Scroll text='Check out my works'/>

                {projects.map((item, i) => (
                    <a href={item.url}>
                        <div className={styles.projectCard}  key={i}>
                            <div className={styles.projectImageContainer} style={{ backgroundImage: `url(${item.image})` }}>

                                {!isMobile && 
                                <div className={styles.blurPanel}>
                                    <div className={styles.redirectBtn}>
                                        <ExternalLink className={styles.icon}/>
                                        <p>Visit site</p>
                                    </div>
                                </div>}

                            </div>

                            <div className={styles.descContainer}>
                                <div className={styles.titleContainer}>
                                    <h2>{item.name}</h2>
                                    <div className={styles.deviceContainer}>{item.device}</div>
                                </div>
                                
                                <p className={styles.description}>{item.description}</p>
                            </div>

                            <div className={styles.stackContainer}>
                                {item.stack.map((svg, i) => (
                                    <img src={`/svg/${svg}`} alt="" key={i} />
                                ))}
                            </div>

                            <div className={styles.dateContainer}>
                                <Globe className={styles.icon}/>
                                <p className={styles.date}>{item.date}</p>
                            </div>
                        </div>
                    </a>
                ))}

                {isOpen && otherProjects.map((item, i) => (
                    <a href={item.url} key={i}>
                        <div className={styles.projectCard}>
                            <div className={styles.projectImageContainer} style={{ backgroundImage: `url(${item.image})` }}>

                                {!isMobile && 
                                <div className={styles.blurPanel}>
                                    <div className={styles.redirectBtn}>
                                        <ExternalLink className={styles.icon}/>
                                        <p>Visit site</p>
                                    </div>
                                </div>}

                            </div>

                            <div className={styles.descContainer}>
                                <div className={styles.titleContainer}>
                                    <h2>{item.name}</h2>
                                    <div className={styles.deviceContainer}>{item.device}</div>
                                </div>
                                
                                <p className={styles.description}>{item.description}</p>
                            </div>

                            <div className={styles.stackContainer}>
                                {item.stack.map((svg, i) => (
                                    <img src={`/svg/${svg}`} alt="" key={i} />
                                ))}
                            </div>

                            <div className={styles.dateContainer}>
                                <Globe className={styles.icon}/>
                                <p className={styles.date}>{item.date}</p>
                            </div>
                        </div>
                    </a>
                ))}

                {!isOpen ? <button className={styles.showBtn} onClick={() => setIsOpen(true)}>Show more</button> : <button className={styles.showBtn} onClick={() => setIsOpen(false)}>Hide</button>}

            </section>
        </>
    )
}