import styles from '../css/Contacts.module.css';

export default function Contacts() {
    return(
        
        <div className={styles.contactsContainer}>
            <div className={styles.socialsContainer}>

            </div>
            
            <iframe className={styles.map} allow="geolocation" src="https://api.maptiler.com/maps/base-v4/?key=83xgVCacaBjMMFKdUZvv&marker=121.0959822102268,14.596898420774755#15/14.596898420774755/121.0959822102268"></iframe>
        </div>
    )
}   

// 14.596898420774755, 121.0959822102268

