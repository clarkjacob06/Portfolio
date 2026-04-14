import styles from '../css/Projects.module.css';
import { Smartphone, Laptop } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);

    const projects = [{
        image: '/projectImages/open_notes.avif',
        name: 'Open Notes',
        url: 'https://mern-opennotes.onrender.com',
        stack: ['mongodb.svg', 'expressdotjs.svg', 'react.svg', 'nodedotjs.svg'],
        description: 'A note-management system for your everyday notes.',
        date: 'March 1, 2026',
        device: [<Smartphone className={styles.device} />, <Laptop className={styles.device} />]
    },
    {
        image: '/projectImages/real_estate.avif',
        name: 'Real Estate Home Page',
        url: 'https://marcimetzgerweb.netlify.app/',
        stack: ['html5.svg', 'css.svg', 'javascript.svg'],
        description: 'A simple home page design for real estate inquiries.',
        date: 'January 14, 2026',
        device: [<Laptop className={styles.device} />]
    },
    {
        image: '/projectImages/quiz_quest.avif',
        name: 'Quiz Quest',
        url: 'https://quizquestss.netlify.app/',
        stack: ['html5.svg', 'css.svg', 'javascript.svg'],
        description: 'An E-Learning website to deepen and challenge your programming knowledge.',
        date: 'November 9, 2025',
        device: [<Laptop className={styles.device} />]
    },
    {
        image: '/projectImages/web_bundy.avif',
        name: 'Web Bundy',
        url: 'https://webbundy.netlify.app/',
        stack: ['html5.svg', 'css.svg', 'javascript.svg'],
        description: 'A timekeeping system to track your total hours working as an intern.',
        date: 'October 13, 2025',
        device: [<Laptop className={styles.device} />]
    },
    {
        image: '/projectImages/steam_clone.avif',
        name: 'Steam Clone',
        url: 'https://steamshopclone.netlify.app/',
        stack: ['html5.svg', 'css.svg', 'javascript.svg'],
        description: 'A steam shop clone website for fun :)',
        date: 'December 1, 2024',
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
            date: 'June 24, 2025',
            device: [<Laptop className={styles.device} />]
        },
        {
            image: '/projectImages/dotify.avif',
            name: 'Dotify',
            url: 'https://dotifyed.netlify.app/',
            stack: ['html5.svg', 'css.svg', 'javascript.svg'],
            description: 'My first ever website, spotify clone.',
            date: 'November 28, 2023',
            device: [<Laptop className={styles.device} />]
        }
    ]

    useGSAP(() => {
        gsap.utils.toArray(`.${styles.projectCard}`).forEach((card) => {
            gsap.fromTo(card, 
                {
                    opacity: 0,
                    scale: 0,
                    transformOrigin: 'bottom left'
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: .1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        toggleActions: 'restart none none reverse',
                        start: 'top 90%',
                        end: 'bottom 30%',
                    }
                }
            )
        })

        ScrollTrigger.create({
            trigger: `.${styles.projectSection}`,
            pin: true,
            pinSpacing: false,
            start: 'bottom 70%'
        })
    })

    return (
        <>
            <section className={styles.projectSection}>
                <h1 id='projects'>Works</h1>

                {projects.map((item, i) => (
                    <a href={item.url} key={i}>
                        <div className={styles.projectCard}>
                            <div className={styles.projectImageContainer} style={{ backgroundImage: `url(${item.image})` }}></div>

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

                            <p className={styles.date}>{item.date}</p>
                        </div>
                    </a>
                ))}

                {!isOpen && <button onClick={() => setIsOpen(true)}>Show more</button>}

                {isOpen && otherProjects.map((item, i) => (
                    <a href={item.url} key={i}>
                        <div className={styles.projectCard}>
                            <div className={styles.projectImageContainer} style={{ backgroundImage: `url(${item.image})` }}></div>

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

                            <p className={styles.date}>{item.date}</p>
                        </div>
                    </a>
                ))}
            </section>
        </>
    )
}