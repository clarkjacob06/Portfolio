import styles from '../css/Scroll.module.css';
import { ChevronsDown } from 'lucide-react';

export default function Scroll({text}) {
    return(
        <section className={styles.scrollSection}>
            {/* <ChevronsDown className={styles.icon} id='project'></ChevronsDown> */}
            <h1 className={styles.placeholder}>{text}</h1>
        </section>
    )
}