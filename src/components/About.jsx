import styles from '../css/About.module.css';

export default function About() {
    return (
        <>
            <section className={styles.aboutSection}>
                <h1 id='about'>About me</h1>
                
                
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