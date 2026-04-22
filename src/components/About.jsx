import styles from '../css/About.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

import Stack from './Stack';
import Scroll from './Scroll';
import Experience from './Experience';
import Contacts from './Contacts';


export default function About() {
    const tech = [
        {name: 'HTML', logo: '/svg/html5.svg'},
        {name: 'CSS', logo: '/svg/css.svg'},
        {name: 'Javascript', logo: '/svg/javascript.svg'},
        {name: 'MongoDB', logo: '/svg/mongodb.svg'},
        {name: 'Express', logo: '/svg/expressdotjs.svg'},
        {name: 'React', logo: '/svg/react.svg'},
        {name: 'Node', logo: '/svg/nodedotjs.svg'},
        {name: 'REST', logo: '/svg/api.svg'}
    ];

    const tools = [
        {name: 'Figma', logo: '/svg/figma.svg'},
        {name: 'Git', logo: '/svg/git.svg'},
        {name: 'Github', logo: '/svg/github.svg'},
        {name: 'NPM', logo: '/svg/npm.svg'},
        {name: 'Postman', logo: '/svg/postman.svg'},
        {name: 'GSAP', logo: '/svg/gsap.svg'},
        {name: 'Vite', logo: '/svg/vite.svg'},
    ]

    const infrastructures = [
        {name: 'Netlify', logo: '/svg/netlify.svg'},        
        {name: 'Render', logo: '/svg/render.svg'},        
        {name: 'Vercel', logo: '/svg/vercel.svg'},        
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: `.${styles.gridContainer}`,
            toggleActions: 'restart none none reverse',
            start:  'top 50%',
            end: 'top 10%',
            }
        });

        tl.fromTo(`.${styles.imgContainer}`, {
            opacity: 0,
            y: 100
        },
        {
           opacity: 1,
           y: 0,
           duration: .8,
           ease: 'power1.out'     
        })
        .fromTo(`.${styles.imgContainer}`, 
        {
            x: -80
        },
        {
            x: 0,
            duration: .3,
            ease: 'power1.out'
        })
        .fromTo(`.${styles.aboutH1}`,
        {
            opacity: 0,
            x: 50,
            zIndex: -1
        },
        {
            opacity: 1,
            x: 0,
            duration: .3,
            ease: 'power1.out',
        }, '-=.3')
        .fromTo(`.${styles.aboutP}`, 
        {
            opacity: 0,
            y: -50,
            zIndex: -1
        },
        {
            opacity: 1,
            y: 0,
            transformOrigin: 'bottom',
            duration: .3
        }, '+=.4')
    })

    return (
        <>
            <section className={styles.aboutSection}>

                <div className={styles.gridContainer} id='about'>
                    <div className={styles.imgContainer}></div>
                    <h1 className={styles.aboutH1}>Know more about <span>Clark.</span></h1>
                    
                    <p className={styles.aboutP}>It all started with a simple college project. Now I have a passion for creating functional web applications using self-taught web development skills.</p>
                </div>

                <Scroll/>
                <Scroll text='Work History'/>
                <Experience/>
                <Scroll/>
                
                <Scroll text='What I work with'/>
                <div className={styles.stackWrapper}>
                    <Stack icon='layers' title='Tech Stack' stack={tech}/>
                    <Stack icon='cog' title='Tools' stack={tools}/>
                    <Stack icon='monitor' title='Infrastructure' stack={infrastructures}/>
                </div>
                
                <Scroll/>
                <Scroll text='Reach out to me'/>
                <Contacts/>
            </section>
        </>
    )
}
























{/* <div className={styles.gridContainer}>
                    <div className={`${styles.profileContainer} ${styles.gridBox}`} data-name='profile'>Profile</div>
                    <div className={`${styles.experience} ${styles.gridBox}`} data-name='exp'>Work experience</div>
                    <div className={`${styles.mapContainer} ${styles.gridBox}`} data-name='map'>Map</div>
                    <div className={`${styles.socials} ${styles.gridBox}`} data-name='socials'>Social medias</div>
                    <div className={`${styles.stackContainer} ${styles.gridBox}`} data-name='stack'>Tech stack</div>
                </div> */}




/* .gridContainer {
    border: 1px solid yellow;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas: 'profile exp exp'
                        'map map socials'
                        'stack stack stack';
}

.gridBox {
    border: 1px solid white;
}

.gridBox:nth-child(1) {
    grid-area: profile;
    background-image: url('/profile.jpg');
    background-position: center;
    background-size: cover;
}
.gridBox:nth-child(2) {
    grid-area: exp;
}
.gridBox:nth-child(3) {
    grid-area: map;
}
.gridBox:nth-child(4) {
    grid-area: socials;
}
.gridBox:nth-child(5) {
    grid-area: stack;
} */