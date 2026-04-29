import styles from '../css/Contacts.module.css';
import { Phone, Mail, Github, Linkedin, MapPinHouse } from 'lucide-react';
import Scroll from '../components/Scroll.jsx'
export default function Contacts() {
    return (

        <>
            <div className={styles.contactsContainer}>
                <div className={styles.socialsContainer}>

                    <div className={styles.container}>
                        <Phone className={styles.icon} />
                        <p>(+63) 9354116879</p>
                    </div>

                    <div className={styles.container}>
                        <Mail className={styles.icon} />
                        <p>clarkjacob627@gmail.com</p>
                    </div>

                    <div className={styles.container}>
                        <Linkedin className={styles.icon} />
                        <p>Clark Jacob</p>
                    </div>

                    <div className={styles.container}>
                        <MapPinHouse className={styles.icon} />
                        <p>Pasig City, Brgy. Manggahan</p>
                    </div>
                </div>

                <iframe className={styles.map} allow="geolocation" src="https://api.maptiler.com/maps/base-v4/?key=83xgVCacaBjMMFKdUZvv&marker=121.0959822102268,14.596898420774755#15/14.596898420774755/121.0959822102268" ></iframe>
            </div>

        </>
    )
}

// 14.596898420774755, 121.0959822102268

