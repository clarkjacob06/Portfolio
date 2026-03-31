import styles from '../css/Projects.module.css';
import { Smartphone, Laptop } from 'lucide-react';
import {motion} from 'framer-motion';

export default function Projects() {
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
        description: 'A steam shop clone website :)',
        date: 'December 1, 2024',
        device: [<Laptop className={styles.device} />]
    }
    ]

    return (
        <>
            <section className={styles.projectSection} id='project'>
                <h1>My Works</h1>

                {projects.map((item, index) => (
                    <a href={item.url} key={index}>
                        <motion.div className={styles.projectCard} 
                        initial={{
                                y: 50,
                                opacity: 0,
                        }}
                        whileInView={{
                                y: 0,
                                opacity: 1,
                                transition: {duration: .3}
                        }}
                        viewport={{amount: .3}}>
                            <div className={styles.projectImageContainer} style={{ backgroundImage: `url(${item.image})` }}></div>

                            <div className={styles.descContainer}>
                                <div className={styles.titleContainer}>
                                    <h2>{item.name}</h2>
                                    <div className={styles.deviceContainer}>{item.device}</div>
                                </div>
                                
                                <p className={styles.description}>{item.description}</p>
                            </div>

                            <div className={styles.stackContainer}>
                                {item.stack.map((svg, index) => (
                                    <img src={`/svg/${svg}`} alt="" key={index} />
                                ))}
                            </div>

                            <p className={styles.date}>{item.date}</p>
                        </motion.div>
                    </a>
                ))}
            </section>
        </>
    )
}


