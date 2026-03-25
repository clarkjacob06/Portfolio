import styles from '../css/Projects.module.css';

export default function Projects() {
    const projects = [{
        name: 'OpenNotes',
        url: 'https://mern-opennotes.onrender.com',
        stack: ['mongodb.svg', 'expressdotjs.svg', 'reactdotjs.svg', 'nodedotjs.svg'],
        description: 'A note-management system for your everyday notes'
    },
    {
        name: 'WebBundy',
        url: 'https://webbundy.netlify.app/',
        stack: ['html5.svg', 'css.svg', 'javascript.svg'],
        description: 'A timekeeping system to track your total hours working as an intern'
    },
    {
        name: 'QuizQuest',
        url: 'https://quizquestss.netlify.app/',
        stack: ['html5.svg', 'css.svg', 'javascript.svg'],
        description: 'An E-Learning website to deepen and challenge your knowledge'
    }, 
    {
        name: 'Steam Clone',
        url: 'https://steamshopclone.netlify.app/',
        stack: ['html5.svg', 'css.svg', 'javascript.svg'],
        description: 'A steam shop clone website :)'
    },
    {
        name: 'Real Estate Home Page',
        url: 'https://marcimetzgerweb.netlify.app/',
        stack: ['html5.svg', 'css.svg', 'javascript.svg'],
        description: 'A simple home page design for real estate inquiries'
    }
]

    return (
        <>
            <section className={styles.projectSection} id='project'>
                <div className={styles.projectContainer}>

                </div>
            </section>
        </>
    )
}