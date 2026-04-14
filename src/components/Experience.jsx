import { useState } from 'react';
import styles from '../css/Experience.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Experience() {
    const [year, setYear] = useState('2025');
    const experiences = [
        {
            year: 2025,
            position: 'Mobile App QA Intern',
            company: 'MNLeistung Inc.',
            term: 'August - November',
            description: 'Assisted in manual software testing/documentation on new features for bugs, and created UI designs for visual enhancements'
        }
    ]
    const filteredExp = experiences.filter((exp) => exp.year.toString().includes(year));

    useGSAP(() => {
        const items = gsap.utils.toArray(`.${styles.history}`);

        gsap.fromTo(items,
            {
                y: -50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: .5,
                ease: 'power1.out',
                stagger: .3
            }
        )
    }, [year]);

    return(
        <div className={styles.historyContainer}>
            <div className={styles.yearContainer}>
                
                <input type="radio" name='year' id='2025' defaultChecked onClick={() => setYear('2025')}/>
                <label htmlFor="2025">2025</label>

                {/* FOR FUTURE MODIFICATIONS :) */}

                {/* <input type="radio" name='year' id='2026' onClick={() => setYear('2026')}/>
                <label htmlFor="2026">2026</label>

                <input type="radio" name='year' id='2027' onClick={() => setYear('2027')}/>
                <label htmlFor="2027">2027</label> */}

                {/* FOR FUTURE MODIFICATIONS :) */}
                
            </div>

            <div className={styles.historyList}>
                {filteredExp.map((exp, i) => (
                    <div className={styles.history} key={i}>
                        <h1 className={styles.position}>{exp.position}</h1>
                        <p className={styles.company}>{exp.company}</p>
                        <p className={styles.description}>{exp.description}</p>
                        <p className={styles.term}>{exp.term}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}