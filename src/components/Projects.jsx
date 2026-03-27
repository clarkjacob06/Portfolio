import styles from '../css/Projects.module.css';

export default function Projects() {
    const projects = [{
        image: '/projectImages/open_notes.avif',
        name: 'OpenNotes',
        url: 'https://mern-opennotes.onrender.com',
        stack: ['mongodb.svg', 'expressdotjs.svg', 'react.svg', 'nodedotjs.svg'],
        description: 'A note-management system for your everyday notes',
        date: 'March 1, 2026'
    },
    {
        image: '/projectImages/web_bundy.avif',
        name: 'WebBundy',
        url: 'https://webbundy.netlify.app/',
        stack: ['html5.svg', 'css.svg', 'javascript.svg'],
        description: 'A timekeeping system to track your total hours working as an intern',
        date: 'October 13, 2025'
    },
    {
        image: '/projectImages/quiz_quest.avif',
        name: 'QuizQuest',
        url: 'https://quizquestss.netlify.app/',
        stack: ['html5.svg', 'css.svg', 'javascript.svg'],
        description: 'An E-Learning website to deepen and challenge your knowledge',
        date: 'November 9, 2025'
    },
    {
        image: '/projectImages/steam_clone.avif',
        name: 'Steam Clone',
        url: 'https://steamshopclone.netlify.app/',
        stack: ['html5.svg', 'css.svg', 'javascript.svg'],
        description: 'A steam shop clone website :)',
        date: 'December 1, 2024'
    },
    {
        image: '/projectImages/real_estate.avif',
        name: 'Real Estate Home Page',
        url: 'https://marcimetzgerweb.netlify.app/',
        stack: ['html5.svg', 'css.svg', 'javascript.svg'],
        description: 'A simple home page design for real estate inquiries',
        date: 'January 14, 2026'
    }
    ]

    return (
        <>
            <section className={styles.projectSection} id='project'>
                <div className={styles.projectContainer}>
                    {projects.map((item, index) => (
                        <a href={item.url} key={index}>

                            <div className={styles.projectCard}>
                                <div className={styles.stackContainer}>
                                    {item.stack.map((svg, index) => (
                                        <img src={`/svg/${svg}`} alt="" key={index}/>
                                    ))}
                                </div>
                                <p className={styles.date}>{item.date}</p>

                                <h2>{item.name}</h2>
                                <p className={styles.description}>{item.description}</p>
                                <img src={item.image} alt="" />
                            </div>

                        </a>
                    ))}
                </div>
            </section>
        </>
    )
}


